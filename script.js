function startClock() {
    setInterval(() => {
        let now = new Date();
        document.getElementById("clock").innerHTML =
            "⏰ " + now.toLocaleTimeString();
    }, 1000);
}

function toggleDesc(card) {
    let desc = card.querySelector(".desc");
    card.classList.toggle("active");

    if (desc.style.display === "block") {
        desc.style.display = "none";
    } else {
        desc.style.display = "block";
    }
}

function kirimForm(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let favorit = document.getElementById("favorit").value;

    document.getElementById("output").innerHTML =
        `Terima kasih <b>${nama}</b>, kamu menyukai kucing <b>${favorit}</b> 🐱`;
}
