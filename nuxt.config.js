module.exports = {
    head: {
        titleTemplate: '%s - Documentation',
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/js/uikit.min.js' },
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/js/uikit-icons.min.js' },
        ],
        link: [
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/css/uikit.min.css' },
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico'}
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Documentation for apps created by Rigidas Software.' },
            { name: 'keywords', content: 'rigidas,software,linnworks,applications,apps' },
            { name: 'author', content: 'Rigidas Software Ltd' },
            { name: 'copyright', content: 'Rigidas Software Ltd' },
            { "http-equiv": 'cache-control', content: 'max-age=0' },
            { "http-equiv": 'cache-control', content: 'no-cache' },
            { "http-equiv": 'expires', content: '0' },
            { "http-equiv": 'expires', content: 'Tue, 01 Jan 1980 1:00:00 GMT' },
            { "http-equiv": 'pragma', content: 'no-cache' }
        ]
    },
    css: [
        '~assets/css/custom.css'
    ]
}