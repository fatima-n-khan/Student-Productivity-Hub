// ===== counter =====

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);
    const suffix = counter.dataset.suffix;

    let count = 0;
    const speed = target / 100;

    const updateCounter = () => {

        count += speed;

        if (count < target) {

            let displayNumber = Math.floor(count);

            if (target >= 1000) {
                displayNumber = Math.floor(displayNumber / 1000) + "K";
            }

            counter.innerText = displayNumber + suffix;

            requestAnimationFrame(updateCounter);

        } else {

            let finalNumber = target;

            if (target >= 1000) {
                finalNumber = target / 1000 + "K";
            }

            counter.innerText = finalNumber + suffix;
        }

    };

    updateCounter();

});

// ===== SCROLL REVEAL ANIMATION =====

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const delay = entry.target.dataset.delay || 0;

                setTimeout(() => {
                    entry.target.classList.add("active");
                }, delay);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    revealObserver.observe(element);

});

// ===== ACTIVE NAVIGATION =====

const sections = document.querySelectorAll(
    "#home, #features, #dashboard, #how-it-works"
);

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});