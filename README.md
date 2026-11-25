# Philipp Reinhardt

A small GitHub Pages site. Jekyll builds the Markdown into static HTML; the home
page has no JavaScript or external font requests. Posts load self-hosted KaTeX
only when `math: true` is set. Light and dark modes follow the reader’s system.

## Edit the About section

Edit `_includes/about.md` in Markdown.

## Write a post

Create `_posts/YYYY-MM-DD-your-title.md`:

```markdown
---
title: "Your title"
description: "An optional one-sentence summary."
math: true
---

Your post, in Markdown.

An inline equation: $$E = mc^2$$.

A display equation:

$$
\int_0^1 x^2\,dx = \frac{1}{3}.
$$

![Describe the figure](/assets/images/your-figure.svg)
```

Use double dollar signs for both inline and display equations (Kramdown syntax).
Put display equations on separate lines with blank lines around them. Omit
`math: true` for posts without equations. KaTeX supports mathematical LaTeX,
not complete LaTeX documents.

Put SVGs and raster images in `assets/images/`. Use descriptive alt text;
HTML `<figure>` / `<figcaption>` also works for captions. Resize large raster
images before adding them. Tables, fenced code, and ordinary Markdown work.

Keep unfinished posts in `_drafts/`; they are excluded from production. The
included `example.md` demonstrates the supported formats. Move a finished draft
to `_posts/` and add the date to its filename to publish. Posts are listed on
the home page, newest first. Future-dated posts are not shown until a build runs
after their date.

## Preview locally

With a current Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --drafts --host 127.0.0.1
```

Open http://127.0.0.1:4000. Omit `--drafts` for a production-equivalent preview.
To check a production build: `bundle exec jekyll build`.

## Publishing

GitHub Pages is configured to build from the root of `main`. Jekyll is native
to that workflow; no hosting-setting changes or custom deployment actions are
needed. The `.nojekyll` file must stay removed so Markdown and layouts compile.
`CNAME` preserves `preinhardt.com`.

Changes for this personal website are made directly on `main`.

## Math assets

`assets/katex/` vendors the browser distribution of KaTeX 0.19.1 and its MIT
license. All math scripts, styles, and fonts are served locally. The small
`assets/render-math.js` adapter renders Kramdown’s equation elements, including
accessible MathML, without touching code blocks.
