let height = document.getElementById("height");
let width = document.getElementById("width");
calc = () => {
    let h = window.innerHeight;
    let w = window.innerWidth;
    height.innerText = h;
    width.innerText = w;
};
window.onload = calc ;
window.onresize = calc ;