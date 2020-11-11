// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Gets the mouse position
const getMousePos = e => {
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};

// Preload images
const preloadFonts = (id) => {
    return new Promise((resolve, reject) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};

export { lerp, getMousePos, preloadFonts };
