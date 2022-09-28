# OSOM Guide
A guide to Organised Services Operating Model (OSOM), published on [osom.guide](https://osom.guide)

# Contributing
The OSOM Guide is a simple site built with [Eleventy](https://www.11ty.dev/).  All content is written in [Markdown](https://www.markdownguide.org/basic-syntax/) format, which is easy to learn.

To suggest contributions, simply fork the repository in Github.com, and submit a [pull request](https://docs.github.com/en/pull-requests).

# Hosting
## Local
Clone the repository:

    git clone https://github.com/jamesaduncan/osom.guide.git

Ensure Node.js is installed, and:

    cd osom.guide.git
    npm install
    npm run develop

Navigate to http://localhost:8080/

## Firebase Hosting
OSOM Guide is configured to deploy to Firebase by default.  You'll need to update configuration & set up GitHub Actions.  More on this soon.

## GitHub Pages
OSOM Guide works with GitHub Pages, with some tweaks.  You'll need to remove default Firebase config.  More on this soon.

# Editing Tools
## Forestry.io
OSOM Guide works with [Forestry.io](https://forestry.io/), but you'll need to re-connect your cloned repository to your Forestry.io account.
