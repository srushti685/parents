/* =========================================
   GET HTML ELEMENTS
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

const musicBtn =
    document.getElementById("music-btn");

const heartsContainer =
    document.getElementById("hearts-container");


/* =========================================
   PARENT MESSAGE
========================================= */

const parentMessage = `
Dear Mom and Dad,

Words can never truly express how grateful I am to have you in my life.

Thank you for every sacrifice, every lesson, every smile, every moment of support, and for always being there for me.

Whatever I become in life, a part of it will always be because of you.

You are my strength, my inspiration, and my home.

I love you both more than words can say. ❤️
`;


/* =========================================
   OPEN MY HEART BUTTON
========================================= */

openHeartBtn.addEventListener(
    "click",
    function () {

        /*
           Hide welcome screen
        */

        welcome.classList.add("hidden");


        /*
           Show main content
        */

        mainContent.classList.remove("hidden");


        /*
           Start typewriter message
        */

        typeMessage();


        /*
           Scroll smoothly to message
        */

        document
            .getElementById("message-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================
   TYPEWRITER EFFECT
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
   ONE MORE SURPRISE BUTTON
========================================= */

surpriseBtn.addEventListener(
    "click",
    function () {


        /*
           Show photo gallery
        */

        gallerySection.classList.remove(
            "hidden"
        );


        /*
           Show final message
        */

        finalSection.classList.remove(
            "hidden"
        );


        /*
           Scroll to photo gallery
        */

        gallerySection.scrollIntoView({

            behavior: "smooth"

        });


        /*
           Try to start music.

           The user has just clicked a button,
           so the browser normally allows
           audio playback here.
        */

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
                        "Automatic music playback was blocked:",
                        error
                    );

                    /*
                       If autoplay is blocked,
                       the user can use the
                       Play Music button.
                    */

                    musicBtn.textContent =
                        "🎵 Play Music";

                }
            );

    }
);


/* =========================================
   PLAY / PAUSE MUSIC
========================================= */

musicBtn.addEventListener(
    "click",
    function () {


        /*
           If music is currently paused,
           play it.
        */

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
                            "Please check that " +
                            "parents-song.mp3 exists " +
                            "inside the music folder."
                        );

                    }
                );

        }


        /*
           Otherwise pause music.
        */

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


    /*
       Add class from CSS
    */

    heart.className =
        "floating-heart";


    /*
       Heart symbol
    */

    heart.textContent =
        "❤️";


    /*
       Random horizontal position
    */

    heart.style.left =
        Math.random() * 100 + "%";


    /*
       Random animation speed
    */

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";


    /*
       Add heart to page
    */

    heartsContainer.appendChild(
        heart
    );


    /*
       Remove heart after animation
    */

    setTimeout(
        function () {

            heart.remove();

        },
        8000
    );

}


/*
   Create a new heart every second
*/

setInterval(
    createHeart,
    1000
);
