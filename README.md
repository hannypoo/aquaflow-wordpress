# Aquaflow Plumbing — Marketing Website

Live, lead-generating website for **Aquaflow Plumbing**, a residential plumbing business serving Kitsap, Mason, and Pierce County, Washington.

🔗 **Live site:** https://aquaflowplumbing.us

## About this project

I build and maintain this site as the contract consultant for the business — part of taking it from zero online presence to a complete digital footprint (website, Google Business Profile, Google Ads, and social). This repository is the source of truth for the site and its automated deployment.

## Stack

- **Front end:** Static HTML, CSS, and vanilla JavaScript, with Tailwind CSS (via CDN) for utility styling.
- **Hosting:** SiteGround.
- **CI/CD:** GitHub Actions → SiteGround over FTPS (see below).

## Continuous deployment

Every push to `main` that changes `index.html`, `style.css`, or `script.js` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`) that uploads the changed files to the live SiteGround server over FTPS. Server credentials are stored as **encrypted GitHub Actions secrets** — none are committed to the repository.

```
push to main  ─▶  GitHub Actions  ─▶  FTPS upload  ─▶  aquaflowplumbing.us
```

## Structure

```
index.html                     # single-page site (hero, services, pricing, about, contact)
style.css                      # site styles
script.js                      # interactivity: service modals, mobile menu, contact form
images/                        # job photos and assets
.github/workflows/deploy.yml   # auto-deploy workflow
```

## Notes

- Single-page layout covering services, transparent pricing, a job-photo gallery, an About section, hours, and a "Request Service" contact form.
- Built and maintained hands-on; this repo auto-deploys to production on every push.
