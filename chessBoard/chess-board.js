/**
 * Initializes an interactive chessboard with 64 squares.
 * - White square at top‑left (row 1, column 1)
 * - Alternating black/white pattern
 * - Clicking a square turns it red; the previously clicked square
 *   reverts to its original colour.
 */
function initializeChessboard() {
  // Create the board container
  const board = document.createElement('div');
  board.className = 'chessboard';

  // Keep track of the currently selected square (red)
  let selectedSquare = null;

  // Build 8x8 grid (row and column numbers start at 1)
  for (let row = 1; row <= 8; row++) {
    for (let col = 1; col <= 8; col++) {
      const square = document.createElement('div');
      square.className = 'square';
      square.id = `square-${row}-${col}`;   // e.g. "square-1-1"

      // Determine colour: black if (row+col) is odd, else white
      const isBlack = (row + col) % 2 !== 0;
      const originalColor = isBlack ? 'black' : 'white';
      square.style.backgroundColor = originalColor;
      square.dataset.originalColor = originalColor;   // store for later revert

      // Click handler
      square.addEventListener('click', function() {
        // If there was a previously selected square (and it's not this one),
        // revert it to its original colour.
        if (selectedSquare && selectedSquare !== this) {
          selectedSquare.style.backgroundColor = selectedSquare.dataset.originalColor;
        }

        // Change the clicked square to red and make it the new selected
        this.style.backgroundColor = 'red';
        selectedSquare = this;
      });

      board.appendChild(square);
    }
  }

  // Append the board to the page (inside <body>)
  document.body.appendChild(board);
}