(function () {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let selectedIndex = 0; // 'A' is at index 0
  
  // Track font sizes individually for each letter, default is 14
  const fontSizes = Array(26).fill(14); 

  // --- 1. DOM Generation ---
  
  // Create letter container
  const letterContainer = document.createElement('div');
  letterContainer.className = 'letter-container';

  // Create and append 26 letter divs
  const letterElements = ALPHABET.map((char, index) => {
    const div = document.createElement('div');
    div.className = 'letter';
    div.id = char.toLowerCase();
    div.textContent = char;
    
    // Setup initial state for 'A'
    if (index === 0) {
      div.classList.add('selected');
    }

    // Direct click selection handler
    div.addEventListener('click', () => {
      updateSelection(index);
    });

    letterContainer.appendChild(div);
    return div;
  });

  // Create button container and buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  const btnConfigs = [
    { id: 'prev', text: ' < ' },
    { id: 'next', text: ' > ' },
    { id: 'decrease', text: ' - ' },
    { id: 'increase', text: ' + ' }
  ];

  const buttons = {};
  btnConfigs.forEach(config => {
    const btn = document.createElement('button');
    btn.id = config.id;
    btn.textContent = config.text;
    buttonContainer.appendChild(btn);
    buttons[config.id] = btn;
  });

  // Append everything directly to the body immediately
  document.body.appendChild(letterContainer);
  document.body.appendChild(buttonContainer);

  // --- 2. Interaction Logic ---

  function updateSelection(newIndex) {
    // Remove selected class from previous target
    letterElements[selectedIndex].classList.remove('selected');
    
    // Update index pointer
    selectedIndex = newIndex;
    
    // Add selected class to new target
    letterElements[selectedIndex].classList.add('selected');
  }

  // Handle navigation buttons (with wrap-around cycling)
  buttons.prev.addEventListener('click', () => {
    // Adding 25 is equivalent to subtracting 1 in modulo 26 math
    const newIndex = (selectedIndex + 25) % 26; 
    updateSelection(newIndex);
  });

  buttons.next.addEventListener('click', () => {
    const newIndex = (selectedIndex + 1) % 26;
    updateSelection(newIndex);
  });

  // Handle font resizing buttons
  buttons.decrease.addEventListener('click', () => {
    const currentSize = fontSizes[selectedIndex];
    if (currentSize > 10) {
      const newSize = currentSize - 2;
      fontSizes[selectedIndex] = newSize;
      letterElements[selectedIndex].style.fontSize = `${newSize}px`;
    }
  });

  buttons.increase.addEventListener('click', () => {
    const currentSize = fontSizes[selectedIndex];
    if (currentSize < 26) {
      const newSize = currentSize + 2;
      fontSizes[selectedIndex] = newSize;
      letterElements[selectedIndex].style.fontSize = `${newSize}px`;
    }
  });
})();