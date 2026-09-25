# Tensor7 Website

Static site for [tensor7.ai](https://www.tensor7.ai), hosted on GitHub Pages.

## Structure

The design is a static reproduction of the original Wix site (Poppins
headings, Wix Madefor Text body, original imagery). The contact form was
replaced with static contact details.

```
index.html      — one-page marketing site
styles.css      — all styles (shared by home + blog)
script.js       — small enhancements (mobile nav, footer year); site works without JS
analytics.js    — Google Analytics 4 loader; the Measurement ID lives here only
sitemap.xml     — list of public URLs for search engines (update when adding pages)
robots.txt      — allows all crawlers, points at the sitemap
images/         — logo, section photos, and client logos (pulled from the Wix site)
blog/
  index.html    — blog post listing
  *.html        — individual posts (hand-written, one file per post)
```

## Adding a blog post

1. Copy an existing post (e.g. `blog/temporal-partners-with-tensor7.html`) to a
   new file in `blog/` with a URL-friendly name.
2. Replace the `<title>`, meta description, heading, byline/date, and body.
   In the `<head>`, also update the canonical URL, the `og:*` tags, and the
   JSON-LD block (headline, description, author, `datePublished`, URL).
3. Add a `post-card` entry for it at the top of the list in `blog/index.html`.
4. Add the post's URL to `sitemap.xml`.
5. Commit and push — GitHub Pages redeploys automatically.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploying to GitHub Pages

1. Create a GitHub repository (e.g. `tensor7/tensor7.ai`) and push this
   directory to the `main` branch.
2. In the repo: Settings → Pages → Source: "Deploy from a branch",
   Branch: `main`, folder `/ (root)`.
3. For the custom domain: Settings → Pages → Custom domain: `www.tensor7.ai`,
   and check "Enforce HTTPS" once the certificate is issued. This creates a
   `CNAME` file in the repo — keep it.
4. At your DNS provider, point `www` at GitHub Pages with a CNAME record:
   `www.tensor7.ai → <github-username>.github.io`. For the apex domain
   (`tensor7.ai`), add A records to GitHub Pages IPs:
   185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
5. Keep the Wix site live until DNS has propagated and the Pages site serves
   correctly over HTTPS, then cancel Wix.
