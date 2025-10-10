// next.config.js
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'k72.ca',
                pathname: '/images/**',
            },
        ],
    },
};
