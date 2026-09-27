/* =====================================================
   PLAY MUSIC
===================================================== */

surpriseButton.addEventListener("click", function () {

    // Show gallery
    gallerySection.classList.remove("hidden");

    // Show final section
    finalSection.classList.remove("hidden");

    // Show music button
    musicControl.classList.remove("hidden");

    // Try to play music
    backgroundMusic.play()
        .then(function () {

            console.log("SUCCESS: Music is playing!");

            musicButton.textContent = "⏸️";

        })
        .catch(function (error) {

            console.error("MUSIC ERROR:", error.name);
            console.error("MUSIC MESSAGE:", error.message);

            alert(
                "Music could not play.\n\nError: " +
                error.name +
                "\n\nPlease check the Console."
            );

            musicButton.textContent = "▶️";
        });

    // Scroll to gallery
    gallerySection.scrollIntoView({
        behavior: "smooth"
    });

    // Start hearts
    startFloatingHearts();

});
