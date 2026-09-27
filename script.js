```javascript
/* =====================================================
   GET HTML ELEMENTS
===================================================== */

const welcomeSection = document.getElementById("welcome");

const mainContent = document.getElementById("main-content");

const messageSection = document.getElementById("message-section");

const gallerySection = document.getElementById("gallery-section");

const finalSection = document.getElementById("final-section");

const openHeartButton = document.getElementById("open-heart-btn");

const surpriseButton = document.getElementById("surprise-btn");

const messageText = document.getElementById("message-text");

const musicControl = document.getElementById("music-control");

const musicButton = document.getElementById("music-btn");

const backgroundMusic = document.getElementById("background-music");

const heartsContainer = document.getElementById("hearts-container");


/* =====================================================
   PARENT MESSAGE
===================================================== */

const parentMessage = `Words can never truly express how grateful I am to have you in my life.

Thank you for every sacrifice, every lesson, every smile, every moment of support, and for always being there for me.

Whatever I become in life, a part of it will always be because of you.

You are my strength, my inspiration, and my home.

I love you both more than words can say. ❤️`;


/* =====================================================
   TYPEWRITER EFFECT
===================================================== */

function typeMessage(text, element, speed = 30) {

    element.textContent = "";

    let index = 0;

    function typeCharacter() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(typeCharacter, speed);

        }

    }

    typeCharacter();
}


/* =====================================================
   OPEN MY HEART BUTTON
===================================================== */

openHeartButton.addEventListener("click", function () {

    // Hide welcome screen
    welcomeSection.style.transition = "opacity 1s ease";

    welcomeSection.style.opacity = "0";

    // Wait for fade-out
    setTimeout(function () {

        welcomeSection.classList.add("hidden");

        // Show main content
        mainContent.classList.remove("hidden");

        // Start message typing
        typeMessage(parentMessage, messageText, 25);

        // Scroll to message
        messageSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 1000);

});


/* =====================================================
   ONE MORE SURPRISE BUTTON
===================================================== */

surpriseButton.addEventListener("click", function () {

    // Reveal gallery
    gallerySection.classList.remove("hidden");

    // Reveal final section
    finalSection.classList.remove("hidden");

    // Show music controls
    musicControl.classList.remove("hidden");

    // Try to start music
    backgroundMusic.play()
        .then(function () {

            musicButton.textContent = "⏸️";

        })
        .catch(function () {

            /*
               If the browser blocks playback,
               the user can press the music button.
            */

            musicButton.textContent = "▶️";

        });


    // Scroll to gallery
    setTimeout(function () {

        gallerySection.scrollIntoView({
            behavior: "smooth"
        });

    }, 200);


    // Start floating hearts
    startFloatingHearts();

});


/* =====================================================
   PLAY / PAUSE MUSIC
===================================================== */

musicButton.addEventListener("click", function () {

    if (backgroundMusic.paused) {

        backgroundMusic.play()
            .then(function () {

                musicButton.textContent = "⏸️";

            })
            .catch(function () {

                alert(
                    "Please check that parents-song.mp3 exists inside the music folder."
                );

            });

    } else {

        backgroundMusic.pause();

        musicButton.textContent = "▶️";

    }

});


/* =====================================================
   FLOATING HEARTS
===================================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.textContent = "♥";

    // Random horizontal position
    heart.style.left =
        Math.random() * 100 + "%";

    // Random size
    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    // Random animation duration
    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);


    // Remove heart after animation
    setTimeout(function () {

        heart.remove();

    }, 9000);

}


/* =====================================================
   START HEART ANIMATION
===================================================== */

let heartInterval = null;

function startFloatingHearts() {

    // Prevent creating multiple intervals
    if (heartInterval !== null) {
        return;
    }

    // Create hearts continuously
    heartInterval = setInterval(function () {

        createHeart();

    }, 700);

}


/* =====================================================
   INTERSECTION OBSERVER
   Makes gallery cards animate when visible
===================================================== */

const photoCards =
    document.querySelectorAll(".photo-card");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.animationPlayState =
                    "running";

            }

        });

    },

    {
        threshold: 0.15
    }

);


photoCards.forEach(function (card) {

    card.style.animationPlayState = "paused";

    observer.observe(card);

});


/* =====================================================
   PREVENT EMPTY IMAGE SPACE
   Add a simple fallback if an image is missing
===================================================== */

const images =
    document.querySelectorAll(".photo-card img");


images.forEach(function (image) {

    image.addEventListener("error", function () {

        image.alt = "Photo could not be loaded";

        image.style.background =
            "linear-gradient(135deg, #f8ddd8, #fff4ef)";

    });

});
```
