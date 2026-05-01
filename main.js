document.getElementById("show").onclick = function () {
    document.body.classList.toggle("dark-mode");
};
function changeimage(img){
    document.getElementById("mainimage").src =img.src;
}
function aadtocart(){
    alert("product added to cart!");
}
