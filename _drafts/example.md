---
title: "An example post"
description: "A draft demonstrating equations, figures, and Markdown."
math: true
---
This is a private draft for testing the writing setup. Replace it with your own
post before publishing.

## Equations

Kramdown uses double dollar signs for both inline and display math. An inline
equation such as $$E = mc^2$$ sits within a sentence.

Put an equation on its own lines for display math:

$$
\int_{-\infty}^{\infty} e^{-x^2}\,\mathrm{d}x = \sqrt{\pi}.
$$

## Figures

SVG diagrams and PNG, JPEG, WebP, or GIF images use the same Markdown syntax:

![A line plot showing a quadratic curve.](/assets/images/example-plot.svg)

For a caption and explicit dimensions, use HTML:

<figure>
  <img src="/assets/images/example-plot.svg" alt="A quadratic curve rising from the origin." width="640" height="360" loading="lazy">
  <figcaption>An example SVG figure.</figcaption>
</figure>

## Code and lists

```python
def energy(mass, speed_of_light):
    return mass * speed_of_light**2
```

- Write in Markdown.
- Keep figures in `assets/images/`.
- Publish when ready.
