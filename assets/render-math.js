/* Kramdown emits math/tex elements; render only those, leaving code untouched. */
document.querySelectorAll('script[type^="math/tex"]').forEach((source) => {
  const equation = document.createElement('span');
  katex.render(source.textContent, equation, {
    displayMode: source.type.includes('mode=display'),
    throwOnError: false,
    trust: false,
    output: 'htmlAndMathml'
  });
  source.replaceWith(equation);
});

// Newer Kramdown versions emit delimiters instead of math/tex elements.
renderMathInElement(document.querySelector('.prose'), {
  delimiters: [
    { left: '\\[', right: '\\]', display: true },
    { left: '\\(', right: '\\)', display: false }
  ],
  throwOnError: false,
  trust: false,
  output: 'htmlAndMathml'
});
