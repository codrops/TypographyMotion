// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Gets the mouse position
const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    posx = e.clientX;
    posy = e.clientY;
    return { x : posx, y : posy }
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