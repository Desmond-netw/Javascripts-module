/**
 * Alpha Jail – spawns characters that follow the mouse and can be trapped.
 * Builds the UI and handles all interactions.
 */
(function() {
  // --- Create the two zones (free world and jail) ---
  const freeWorld = document.createElement('div');
  freeWorld.id = 'free-world';
  freeWorld.className = 'zone';

  const jail = document.createElement('div');
  jail.id = 'jail';
  jail.className = 'zone';

  // Append them to the body
  document.body.appendChild(freeWorld);
  document.body.appendChild(jail);

  // --- State variables ---
  let mouseX = 0;
  let mouseY = 0;
  let currentCharacter = null;       // the character currently following the cursor
  let wasInsideJail = false;        // track previous mouse position relative to jail

  // --- Helper: check if a point (x,y) is inside jail element ---
  function isInsideJail(x, y) {
    const rect = jail.getBoundingClientRect();
    return x >= rect.left && x <= rect.right &&
           y >= rect.top && y <= rect.bottom;
  }

  // --- Detach a character (stop following, keep at current position) ---
  function detachCharacter(character) {
    if (!character) return;
    character.classList.remove('follow');
    // Optionally, we could set a flag, but we just remove the class.
    // The character remains at its current position.
  }

  // --- Spawn a new character at the current mouse position ---
  function spawnCharacter(letter) {
    // Detach the current follower (if any) – it stays where it is
    if (currentCharacter) {
      detachCharacter(currentCharacter);
      currentCharacter = null;
    }

    // Create the character div
    const charDiv = document.createElement('div');
    charDiv.className = 'character follow';
    charDiv.textContent = letter;
    // Start with white background
    charDiv.style.backgroundColor = 'white';
    // Position at the mouse
    charDiv.style.left = mouseX + 'px';
    charDiv.style.top = mouseY + 'px';

    // Append to body (so it can be anywhere)
    document.body.appendChild(charDiv);

    // Set as current follower
    currentCharacter = charDiv;

    // Immediately check if mouse is inside jail, to set trapped state if applicable
    if (isInsideJail(mouseX, mouseY)) {
      charDiv.style.backgroundColor = 'var(--orange)';
      charDiv.classList.add('trapped');
      wasInsideJail = true;
    } else {
      wasInsideJail = false;
    }
  }

  // --- Remove all characters (Escape) ---
  function clearAllCharacters() {
    const characters = document.querySelectorAll('.character');
    characters.forEach(el => el.remove());
    currentCharacter = null;
  }

  // --- Mouse move handler ---
  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // If there is a current follower, update its position
    if (currentCharacter && currentCharacter.classList.contains('follow')) {
      currentCharacter.style.left = mouseX + 'px';
      currentCharacter.style.top = mouseY + 'px';

      // Check if pointer is inside jail
      const inside = isInsideJail(mouseX, mouseY);

      if (inside) {
        // Inside jail: turn orange, add trapped class
        currentCharacter.style.backgroundColor = 'var(--orange)';
        currentCharacter.classList.add('trapped');
        wasInsideJail = true;
      } else {
        // Outside jail: set background to white
        // But if it was previously inside (wasInsideJail true) and now outside,
        // we need to detach it permanently.
        if (wasInsideJail) {
          // Pointer left jail while following → detach permanently
          detachCharacter(currentCharacter);
          // It stays at the current position (which is at the edge)
          // and remains trapped (still has trapped class and orange bg)
          // but we stop following.
          currentCharacter = null;   // no follower anymore
          wasInsideJail = false;
        } else {
          // Normal outside: white background
          currentCharacter.style.backgroundColor = 'white';
          // If it had trapped class from before? It shouldn't, but we can keep it.
          // We do not remove trapped class, but the background is white.
          // (It might have been trapped earlier and then moved outside? That shouldn't happen because when leaving jail we detach.)
        }
      }
    } else {
      // No follower, but we still track wasInsideJail state for future spawns
      wasInsideJail = isInsideJail(mouseX, mouseY);
    }
  });

  // --- Keyboard handler ---
  document.addEventListener('keydown', function(e) {
    const key = e.key;

    // Escape: clear all characters
    if (key === 'Escape') {
      clearAllCharacters();
      e.preventDefault(); // prevent browser default
      return;
    }

    // Lowercase letters a-z
    if (/^[a-z]$/.test(key)) {
      spawnCharacter(key);
      e.preventDefault(); // prevent typing in any input
    }
  });

  // --- Ensure the mouse position is initialised ---
  // Set initial mouse coordinates to center of viewport (or default)
  mouseX = window.innerWidth / 2;
  mouseY = window.innerHeight / 2;
})();