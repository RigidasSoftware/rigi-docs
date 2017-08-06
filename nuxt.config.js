module.exports = {
    head: {
        titleTemplate: '%s - Documentation',
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/js/uikit.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/js/uikit-icons.min.js' },
        ],
        link: [
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/css/uikit.min.css' }
        ]
    },
    css: [
        '~assets/css/custom.css'
    ],
    generate: {
        dir: 'docs'
    }
}