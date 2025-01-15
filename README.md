# Web Developer Portfolio Website

The website is deployed on Arweave using Eleventy. You can access it at [Deployed URL](https://arweave.net/xxxxxxx).

## Description
This project is a simple portfolio website built using Eleventy (11ty), showcasing my web development skills and projects. The website is statically generated, ensuring fast load times and efficient performance. It is permanently hosted on Arweave, leveraging its decentralized storage model for lasting accessibility.

## Files Structure

- `index.md`: Homepage, introducing the portfolio and showcasing key details.
- `about.md`: About Me page, providing personal background and career information.
- `contact.md`: Contact page, detailing how to reach out to me.
- `_includes/default.njk`: Default layout for all pages.
- `_includes/header.njk`: Header layout, including the site navigation.
- `_includes/footer.njk`: Footer layout, containing copyright information and footer navigation.
- `_data/projects.json`: JSON file containing project data dynamically rendered on the homepage.

## Steps to Deploy Your Website

Start by visiting the [Eleventy](https://www.11ty.dev/) documentation to explore the framework and understand how it works.

### 1. Setting Up the Project

Before deploying, you'll need to initialize a new Node.js project and install Eleventy. Use the following commands:

```bash
npm init -y
npm install @11ty/eleventy --save-dev
