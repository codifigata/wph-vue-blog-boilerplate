# WordPress Headless: Vue Blog

This is a simple boilerplate to give you a quick start with WordPress REST API.

Use it as you like, make it the starting point to an awesome and stylish blog, or if you prefer just use it for quickly prototyping.

**Quick note:** this boilerplate is not meant to be used on production environment as is, because it's not SEO friendly.

## Features

- Home page with most recent posts
- Single post page with basic data
- Basic routing
- Specific layout for: homepage, generic page, post
- Basic styling for post already applied
- Clear folder structure
- Automatic Dark / Light mode based on OS settings with possibility to manully toggle
- Responsive

## Technologies used

- Vite.js
- Vue.js 3.2+
- Vue router 4+
- WordPress REST API
- TailwindCSS v3+

## Run Locally

Clone the project

```bash
  git clone https://github.com/codifigata/wph-vue-blog-boilerplate.git
```

Go to the project directory

```bash
  cd wph-vue-blog-boilerplate
```

Install dependencies

```bash
  npm install
```

Edit SITE_URL and SITE_NAME constants in src/common/config.js file

```bash
  # Replace "https://www.example.com" with your own domain.
  export const SITE_URL = "https://www.example.com";

  # Replace "Example" with your own Blog name, this will be used on Header and Footer components.
  export const SITE_NAME = "Example";
```

Start the server

```bash
  npm run dev
```

## React.js version available

[<img alt="WordPress Headless: React Blog" width="80px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />](https://github.com/codifigata/wph-react-blog-boilerplate)

## Author

- [@fcampusdev](https://github.com/fcampus)

### Known bugs

- Complex HTML elements such as iFrames and Social Embeds are not rendered correctly and require debugging / workaround
- Direct links inside posts are displayed as is and not handled by this boilerplate
