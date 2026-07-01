/**
 * Creates the DOM structure and toggling functionality dynamically.
 */
(function() {
  // --- Create the main content div ---
  const contentDiv = document.createElement('div');
  contentDiv.id = 'content';

  // --- Create the paragraph with text "code" ---
  const para = document.createElement('p');
  para.textContent = 'code';
  contentDiv.appendChild(para);

  // --- Create the controls container ---
  const controlsDiv = document.createElement('div');
  controlsDiv.className = 'controls';

  // Button definitions: (id, label, target element, class to toggle)
  const buttonData = [
    { id: 'bold', label: 'B', target: para, className: 'bold' },
    { id: 'italic', label: 'I', target: para, className: 'italic' },
    { id: 'underline', label: 'U', target: para, className: 'underline' },
    { id: 'highlight', label: 'Highlight', target: contentDiv, className: 'highlight' }
  ];

  // Create buttons and attach click listeners
  buttonData.forEach(({ id, label, target, className }) => {
    const btn = document.createElement('button');
    btn.id = id;
    btn.textContent = label;
    btn.addEventListener('click', function() {
      target.classList.toggle(className);
    });
    controlsDiv.appendChild(btn);
  });

  // --- Append everything to the body ---
  document.body.appendChild(contentDiv);
  document.body.appendChild(controlsDiv);
})();