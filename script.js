const dropdownLink = document.querySelectorAll(".dropdown-content a");
const displayedImage = document.getElementById("displayed-image");
const footerImage = document.getElementById("footer-img");
const boxes = document.querySelectorAll(".content .box1, .content .box2, .content .box3, .content .box4, .content .box5, .content .box6");
const searchIcon = document.getElementById("searchIcon");
const profileInfo = document.querySelectorAll(".profileInfo i");
const searchBoxInput = document.querySelector(".searchbox input");
const searchBoxBtn = document.querySelector(".searchbox button");

document.getElementById("menuToggle").addEventListener("click", function() {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
});

searchIcon.addEventListener('click', function(event){
    profileInfo.forEach(icon => {
        icon.style.display = "none";
    });

    searchBoxInput.style.display = "block"; // makes the input feild visible
    searchBoxBtn.style.display = "block";

    setTimeout(() => {
        searchBoxInput.classList.add("show");
        searchBoxBtn.classList.add("show");
    }, 10); 
});

dropdownLink.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        let images = [];

        if (this.textContent === "Men") {
            displayedImage.style.backgroundImage = "url('assets/men/back.jpg')";
            
            images = [
                "assets/men/s1.jpg",
                "assets/men/s2.jpg",
                "assets/men/s3.png",
                "assets/men/s4.jpg",
                "assets/men/s5.jpg",
                "assets/men/s6.jpg"
            ];
            footerImage.src = "assets/men/footer.jpeg"; 
            console.log("This is a man");
        } else if (this.textContent === "Woman") {
            displayedImage.style.backgroundImage = "url('assets/woman/back.jpg')";
            images = [
                "assets/woman/g1.jpeg",
                "assets/woman/g2.jpeg",
                "assets/woman/g3.jpeg",
                "assets/woman/g4.jpeg",
                "assets/woman/g5.jpeg",
                "assets/woman/g6.jpeg"
            ];
            footerImage.src = "assets/woman/g8.jpg"; 
            console.log("This is a Woman");
        } else if (this.textContent === "Children") {
            displayedImage.style.backgroundImage = "url('assets/men/back.jpg')";
            images = [
                "assets/men/s1.jpg",
                "assets/men/s2.jpg",
                "assets/men/s3.png",
                "assets/men/s4.jpg",
                "assets/men/s5.jpg",
                "assets/men/s6.jpg"
            ];
            footerImage.src = "assets/men/footer.jpeg";
            console.log("This is a Child");
        } else if (this.textContent === "watches") {
            displayedImage.style.backgroundImage = "url('assets/watches/back.jpg')";
            images = [
                "assets/watches/1.jpeg",
                "assets/watches/2.jpeg",
                "assets/watches/3.jpeg",
                "assets/watches/4.jpeg",
                "assets/watches/5.jpeg",
                "assets/watches/6.jpeg"
            ];
            footerImage.src = "assets/watches/8.jpg";
            console.log("This is a watches");
        } else if (this.textContent === "Jewellery") {
            displayedImage.style.backgroundImage = "url('assets/gullary/back.jpg')";
            images = [
                "assets/gullary/1g.jpg",
                "assets/gullary/2g.jpg",
                "assets/gullary/3g.jpg",
                "assets/gullary/4g.jpg",
                "assets/gullary/5g.jpg",
                "assets/gullary/6g.jpg"
            ];
            footerImage.src = "assets/gullary/footer.jpeg";
            console.log("This is a Jewellery");
        } else if (this.textContent === "Bags") {
            displayedImage.style.backgroundImage = "url('assets/bags/back.jpg')";
            images = [
                "assets/bags/b1.jpeg",
                "assets/bags/b2.jpeg",
                "assets/bags/b3.jpeg",
                "assets/bags/b4.jpeg",
                "assets/bags/b5.jpeg",
                "assets/bags/b6.jpeg"
            ];
            footerImage.src = "assets/bags/footer.jpg";
            console.log("This is a Child");
        } else if (this.textContent === "Shoes") {
            displayedImage.style.backgroundImage = "url('assets/shoes/back.jpg')";
            images = [
                "assets/shoes/s1.jpg",
                "assets/shoes/s2.png",
                "assets/shoes/s3.png",
                "assets/shoes/s4.png",
                "assets/shoes/s5.png",
                "assets/shoes/s6.png"
            ];
            footerImage.src = "assets/shoes/footer.png";
            console.log("This is a shoes");
        } else if (this.textContent === "Glasses") {
            displayedImage.style.backgroundImage = "url('assets/glasses/back.jpg')";
            images = [
                "assets/glasses/a1.jpg",
                "assets/glasses/a2.jpg",
                "assets/glasses/a3.jpeg",
                "assets/glasses/a4.jpeg",
                "assets/glasses/a5.jpeg",
                "assets/glasses/a6.jpg"
            ];
            footerImage.src = "assets/glasses/footer.jpg";
            console.log("This is a glasses");
        }


        // Add more categories as needed

        // Update images in each box
        boxes.forEach((box, index) => {
            const imgElement = box.querySelector("img");
            if (imgElement && images[index]) {
                imgElement.src = images[index];
            }
        });
    });
});