document.addEventListener("DOMContentLoaded", function () {

    const openHeartButton =
        document.getElementById("open-heart");

    const surpriseButton =
        document.getElementById("surprise-button");

    const giftBox =
        document.getElementById("gift-box");

    const messageSection =
        document.getElementById("message");

    const surpriseSection =
        document.getElementById("surprise");

    const gallerySection =
        document.getElementById("gallery");

    const finalSection =
        document.getElementById("final");

    const parentMessage =
        document.getElementById("parent-message");

    const music =
        document.getElementById("background-music");

    const musicButton =
        document.getElementById("music-btn");


    /* =========================
       PARENT MESSAGE
    ========================= */

    const message = `
Words can never truly express how grateful I am to have you in my life.

Thank you for every sacrifice, every lesson, every smile, every moment of support, and for always being there for me.

Whatever I become in life, a part of it will always be because of you.

You are my strength, my inspiration, and my home.

I love you both more than words can say. ❤️
`;


    /* =========================
       OPEN MY HEART
    ========================= */

    openHeartButton.addEventListener(
        "click",
        function () {

            messageSection.classList.remove(
                "hidden"
            );

            parentMessage.textContent =
                message;

            messageSection.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


    /* =========================
       ONE MORE SURPRISE
    ========================= */

    surpriseButton.addEventListener(
        "click",
        function () {

            surpriseSection.classList.remove(
                "hidden"
            );

            surpriseSection.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


    /* =========================
       OPEN GIFT BOX
    ========================= */

    giftBox.addEventListener(
        "click",
        function () {

            giftBox.classList.add("opened");

            setTimeout(function () {

                gallerySection.classList.remove(
                    "hidden"
                );

                finalSection.classList.remove(
                    "hidden"
                );

                gallerySection.scrollIntoView({
                    behavior: "smooth"
                });

            }, 700);

        }
    );


    /* =========================
       MUSIC
    ========================= */

    musicButton.addEventListener(
        "click",
        function () {

            if (music.paused) {

                music.play()
                    .then(function () {

                        musicButton.textContent =
                            "⏸️ Pause Music";

                    })
                    .catch(function (error) {

                        console.error(
                            "Music error:",
                            error
                        );

                        alert(
                            "The music could not be played. " +
                            "Please check parents-song.mp3."
                        );

                    });

            } else {

                music.pause();

                musicButton.textContent =
                    "🎵 Play Music";

            }

        }
    );


});
