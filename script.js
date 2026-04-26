window.addEventListener("load", () => {

  document.querySelector(".title").style.opacity = "1";
  document.querySelector(".title").style.transform = "translateY(0)";

  document.querySelector(".desc").style.opacity = "1";
  document.querySelector(".desc").style.transform = "translateY(0)";

  document.querySelector(".shoe").style.opacity = "1";
  document.querySelector(".shoe").style.transform = "translateX(0)";

  // ANIMASI SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".trend-big, .trend-small, .banner").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

});

document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".category-item");
    const products = document.querySelectorAll(".product-card");
    const arrowBtns = document.querySelectorAll(".arrow-btn");

    // animasi kategori muncul satu per satu
    categories.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = "0.6s ease";

        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 200);
    });

    // animasi product card
    products.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.7s ease";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 800 + index * 200);
    });

    // hover arrow button
    arrowBtns.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.1)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });

    // animasi saat scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".product-card, .category-item").forEach(el => {
        observer.observe(el);
    });
});


window.addEventListener("load", function(){
    const shoe = document.querySelector(".hero-shoe");
    const title = document.querySelector(".hero-title");

    shoe.style.opacity = "0";
    shoe.style.transform = "translate(-50%, -40%) scale(0.8)";
    shoe.style.transition = "1s ease";

    title.style.opacity = "0";
    title.style.transition = "1s ease";

    setTimeout(() => {
        shoe.style.opacity = "1";
        shoe.style.transform = "translate(-50%, -50%) scale(1)";
        title.style.opacity = "1";
    }, 300);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageInput = document.querySelector("textarea");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields first!");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email!");
            return;
        }

        alert("Message sent successfully!");

        form.reset();
    });
});

const searchBox = document.getElementById("searchBox");
const searchIcon = document.getElementById("searchIcon");

if (searchBox && searchIcon) {
    searchIcon.addEventListener("click", function () {
        searchBox.classList.toggle("active");
    });
}