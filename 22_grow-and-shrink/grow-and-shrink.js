/**
 * This script runs after the DOM is fully loaded and manipulates
 * the existing structure to provide full interactivity.
 */
document.addEventListener('DOMContentLoaded', function() {
  // --- Get references to all letter elements and buttons ---
  const letterElements = Array.from(document.querySelectorAll('.letter'));
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');

  // --- Helper to get the currently selected letter element ---
  function getSelected() {
    return document.querySelector('.letter.selected');
  }

  // --- Select a letter: remove 'selected' from all, add to the given element ---
  function selectLetter(element) {
    letterElements.forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
  }

  // --- Navigate by delta (±1) with wrap-around ---
  function navigate(delta) {
    const current = getSelected();
    const currentIndex = letterElements.indexOf(current);
    const newIndex = (currentIndex + delta + 26) % 26;  // wrap around
    selectLetter(letterElements[newIndex]);
  }

  // --- Change font size of the selected letter by delta (px) ---
  function changeSize(delta) {
    const selected = getSelected();
    if (!selected) return;

    // Get current size (fallback to 14 if no inline style)
    let currentSize = parseInt(selected.style.fontSize);
    if (isNaN(currentSize)) currentSize = 14;   // default from CSS

    let newSize = currentSize + delta;
    // Clamp between 10 and 26
    if (newSize < 10) newSize = 10;
    if (newSize > 26) newSize = 26;

    // Only update if the size actually changes
    if (newSize !== currentSize) {
      selected.style.fontSize = newSize + 'px';
    }
  }

  // --- Attach click listeners to each letter ---
  letterElements.forEach(el => {
    el.addEventListener('click', function() {
      selectLetter(this);
    });
  });

  // --- Attach button listeners ---
  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));
  decreaseBtn.addEventListener('click', () => changeSize(-2));
  increaseBtn.addEventListener('click', () => changeSize(2));

  // --- Ensure 'A' is selected by default (already has class 'selected') ---
  // If for some reason none is selected, select 'A'
  if (!getSelected()) {
    const first = letterElements.find(el => el.id === 'a');
    if (first) selectLetter(first);
  }
});