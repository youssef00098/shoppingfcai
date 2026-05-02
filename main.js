const darkModeBtn = document.getElementById("show");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

darkModeBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

function changeimage(img) {
    document.getElementById("mainimage").src = img.src;
}

function aadtocart() {
    alert("product added to cart!");
}
