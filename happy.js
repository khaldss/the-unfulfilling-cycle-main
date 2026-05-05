const textOverlay = document.getElementById("textOverlay");
const hoverZones = document.querySelectorAll(".hover-zone");
const cards = document.querySelectorAll(".mini-card");
const textContent = document.getElementById("textContent");

hoverZones.forEach(zone => {
  zone.addEventListener("mouseenter", () => {
    const targetId = zone.dataset.card;

    cards.forEach(card => {
      card.style.display = "none";
    });

    document.getElementById(targetId).style.display = "block";
    textContent.classList.add("hide-text");
  });
});

textOverlay.addEventListener("mouseleave", () => {
  cards.forEach(card => {
    card.style.display = "none";
  });

  textContent.classList.remove("hide-text");
});