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
            }
        },  
        backgroundImage: {
            'hero-background': "url('../public/hero-background.png')",
            'unusual-card-lg': "url('../public/blockleft.svg')",
            'unusual-card-sm': "url('../public/blockright.svg')",
            'fullscreencover': "url('../public/fullpagecover.png')"
        }
    },  
    
    plugins: [
    ],
}