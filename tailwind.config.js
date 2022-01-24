module.exports = {  
    content: [    
        "./pages/**/*.{js,ts,jsx,tsx}",    
        "./components/**/*.{js,ts,jsx,tsx}",  
    ],  
    theme: {    
        extend: {

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