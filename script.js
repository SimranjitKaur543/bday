const gift = document.getElementById("giftBox");
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");
const closeBtn = document.getElementById("closeLetter");
const petalsContainer = document.querySelector(".petals");

music.loop = true;

let petalsInterval; // to control petals

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    document.body.appendChild(petal);

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.width = (8 + Math.random() * 12) + "px";
    petal.style.height = petal.style.width;

    petal.style.animationDuration = (4 + Math.random() * 4) + "s";

    setTimeout(() => {
        petal.remove();
    }, 8000);
}

gift.addEventListener("click", function () {

    gift.classList.add("open");
    letter.classList.remove("hidden");

    music.play();

    // start petals only once
    if (!petalsInterval) {
        petalsInterval = setInterval(createPetal, 120);
    }
});

if (closeBtn) {
    closeBtn.addEventListener("click", function () {

        gift.classList.remove("open");
        letter.classList.add("hidden");

        music.pause();
        music.currentTime = 0;

        // stop petals
        clearInterval(petalsInterval);
        petalsInterval = null;

        // remove existing petals
        document.querySelectorAll(".petal").forEach(p => p.remove());
    });
}