const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-list a");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

// Adiciona um evento de clique para cada item da lista
navItems.forEach(item => {
  item.addEventListener("click", () => {
    // Fecha o menu ao clicar em um item da lista
    nav.classList.remove("active");
  });
});
