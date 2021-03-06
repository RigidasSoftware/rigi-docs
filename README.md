# Rigidas Documentation
The Rigidas Software applications documentation.

## Installation
Clone this repository and install the dependencies.

```
npm install
```

Then, to run the application use `npm run dev` **or** `npm start`.

Navigate to [http://localhost:3000](http://localhost:3000) to view the running application.

## Publish Website
The documentation uses **GitHub Pages** for hosting, in order to generate the static HTML for GitHub Pages, use the following command:

```
npm run generate
npm run deploy
```

The generated HTML will be outputted into the `/dist` directory and deployed to GitHub.

## License
[MIT License](LICENSE)
