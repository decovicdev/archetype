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
            'unusual-card-lg': "url('../public/block-left.svg')",
            'unusual-card-sm': "url('../public/blocks_right.svg')",
            'fullscreencover': "url('../public/fullpagecover.png')"
          },      
    },  
    
    plugins: [

    ],
}