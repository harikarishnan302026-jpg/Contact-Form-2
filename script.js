// =====================================
// AOS Initialization
// =====================================
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}
// =====================================
// Animated Counter
// =====================================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});


// =====================================
// Contact Form
// =====================================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = form.querySelector("button");

        button.disabled = true;

        button.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Sending...
        `;

        setTimeout(() => {

            button.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                Submitted Successfully
            `;

            button.style.background =
                "linear-gradient(135deg,#16a34a,#22c55e)";

            setTimeout(() => {

                alert("🎉 Thank you!");

                form.reset();

                button.disabled = false;

                button.innerHTML = `
                    <i class="fa-solid fa-paper-plane"></i>
                    Book My FREE Consultation
                `;

                button.style.background =
                    "linear-gradient(135deg,#2563eb,#06b6d4)";

            }, 1200);

        }, 1800);

    });

}

// =====================================
// Input Focus Animation
// =====================================

const inputs = document.querySelectorAll("input, textarea, select");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.style.transform = "translateY(-3px)";

    });

    input.addEventListener("blur", () => {

        input.parentElement.style.transform = "translateY(0px)";

    });

});


// =====================================
// Info Card Hover Animation
// =====================================

const cards = document.querySelectorAll(".info-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
            "0 12px 25px rgba(255,255,255,.08)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});


// =====================================
// Smooth Button Hover
// =====================================

const btn = document.querySelector("button");

if (btn) {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-5px) scale(1.02)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0px) scale(1)";
    });

}

// =====================================
// Page Load Animation
// =====================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// =====================================
// Floating Background Effect
// =====================================

document.addEventListener("mousemove", (e) => {

    const circles = document.querySelectorAll(".bg-circle");

    circles.forEach((circle, index) => {

        const speed = (index + 1) * 0.02;

        const x = (window.innerWidth / 2 - e.pageX) * speed;
        const y = (window.innerHeight / 2 - e.pageY) * speed;

        circle.style.transform = `translate(${x}px, ${y}px)`;

    });

});