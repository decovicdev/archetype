module.exports = {  
    content: [    
        "./pages/**/*.{js,ts,jsx,tsx}",    
        "./components/**/*.{js,ts,jsx,tsx}",  
    ],  
    theme: {    
        extend: {
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.5s ease-out'
            },

            colors: {
                'regal-blue': '#0021c5'
            }
        },  
        backgroundImage: {
            'fullscreencover': "url('../public/fullpagecover copy.webp')"
        }
    },  
    
    plugins: [
    ],
}