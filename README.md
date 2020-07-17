# Middleman Tailwind Template

A [Middleman](https://middlemanapp.com) template that includes [Tailwind CSS](https://tailwindcss.com/) and [Tailwind UI](https://tailwindui.com/) pre-installed and configured. Note that

This template is based on the [Default Middleman Project Template](https://github.com/middleman/middleman-templates-default), and includes [`middleman-livereload`](https://github.com/middleman/middleman-livereload).

Note that you must have a valid Tailwind UI License in order to have access to, and use, the Tailwind UI components. This template only includes the bare minimum configuration necessary in order to use the components.

## Usage
```
middleman init MY_PROJECT_FOLDER -T snappy316/middleman-tailwind-template
cd MY_PROJECT_FOLDER
yarn install
```

Then boot up the Middleman server as normal: `middleman server`

The default index page ([`source/index.html.erb`](source/index.html.erb)) comes from the [Tailwind CSS Playground](https://github.com/tailwindcss/playground/blob/master/public/index.html).
