const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 20px 60px rgba(246, 168, 50, 0.12)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});