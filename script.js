/* =========================================
   GET ELEMENTS
========================================= */

const welcome =
    document.getElementById("welcome");

const mainContent =
    document.getElementById("main-content");

const openHeartBtn =
    document.getElementById("open-heart-btn");

const surpriseBtn =
    document.getElementById("surprise-btn");

const messageText =
    document.getElementById("message-text");

const gallerySection =
    document.getElementById("gallery-section");

const finalSection =
    document.getElementById("final-section");

const music =
    document.getElementById("background-music");

const musicControl =
    document.getElementById("music-control");

const musicBtn =
    document.getElementById("music-btn");


/* =========================================
   MESSAGE
========================================= */

const parentMessage = `

Words can never truly express how grateful I am to have you in my life.

Thank you for every sacrifice, every lesson, every smile, every moment of support, and for always being there for me.

Whatever I become in life, a part of it will always be because of you.

You are my strength, my inspiration, and my home.

I love you both more than words can say. ❤️

`;


/* =========================================
   OPEN MY HEART
========================================= */

openHeartBtn.addEventListener(
    "click",
    function () {

        welcome.classList.add("hidden");

        mainContent.classList.remove("hidden");

        typeMessage();

    }
);


/* =========================================
   TYPEWRITER
========================================= */

function typeMessage() {

    let index = 0;

    messageText.textContent = "";


    function type() {

        if (index < parentMessage.length) {

            messageText.textContent +=
                parentMessage[index];

            index++;

            setTimeout(
                type,
                25
            );

        }

    }


    type();

}


/* =========================================
   ONE MORE SURPRISE
========================================= */

surpriseBtn.addEventListener(
    "click",
    function () {

        gallerySection.classList.remove(
            "hidden"
        );

        finalSection.classList.remove(
            "hidden"
        );

        musicControl.classList.remove(
            "hidden"
        );


        gallerySection.scrollIntoView({

            behavior: "smooth"

        });

    }
);


/* =========================================
   PLAY / PAUSE MUSIC
========================================= */

musicBtn.addEventListener(
    "click",
    function () {


        if (music.paused) {


            music.play()

                .then(
                    function () {

                        musicBtn.textContent =
                            "⏸️ Pause Music";

                    }
                )


                .catch(
                    function (error) {

                        console.log(
                            "Music error:",
                            error
                        );

                        alert(
                            "The song could not be played. " +
                            "Please check the music file."
                        );

                    }
                );


        }


        else {


            music.pause();

            musicBtn.textContent =
                "🎵 Play Music";

        }

    }
);


/* =========================================
   CHECK AUDIO FILE
========================================= */

music.addEventListener(
    "error",
    function () {

        console.log(
            "Audio file could not be loaded."
        );

    }
);


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    heart.textContent =
        "❤️";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    document
        .getElementById("hearts-container")
        .appendChild(heart);


    setTimeout(
        function () {

            heart.remove();

        },
        8000
    );

}


setInterval(
    createHeart,
    1000
);
