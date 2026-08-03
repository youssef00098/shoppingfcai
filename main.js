let btn = document.getElementById("show");
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
}
if(btn){
    btn.onclick = function () {
        document.body.classList.toggle("dark-mode");
        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault(); 

        let user = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let pass = document.getElementById("password").value;
        let confirmPass = document.getElementById("confirmPassword").value;

        document.querySelectorAll(".error-msg").forEach(span => span.innerText = "");
        let isValid = true;

        if (user.length < 3) {
            document.getElementById("userError").innerText = "Username must be at least 3 characters.";
            isValid = false;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Please enter a valid email address.";
            isValid = false;
        }

        if (pass.length < 8) {
            document.getElementById("passError").innerText = "Password must be at least 8 characters.";
            isValid = false;
        }

        if (pass !== confirmPass) {
            document.getElementById("confirmError").innerText = "Passwords do not match!";
            isValid = false;
        }

        if (isValid) {
            alert("Account created successfully!");
            window.location.href = "index.html"; 
        }
    });
}

function changeimage(img){
    document.getElementById("mainimage").src = img.src;
}

function addtocart(){
    alert("product added to cart!");
}

function searchProduct() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;

    const query = searchInput.value.trim().toLowerCase();
    const productCards = document.querySelectorAll(".product-card");

    if (productCards.length > 0) {
        productCards.forEach((card) => {
            const cardText = card.innerText.toLowerCase();
            card.style.display = cardText.includes(query) ? "" : "none";
        });
        return;
    }

    const imageItems = document.querySelectorAll("#img li");
    if (imageItems.length > 0) {
        imageItems.forEach((item) => {
            const itemText = item.innerText.toLowerCase();
            item.style.display = itemText.includes(query) ? "" : "none";
        });
    }
}

