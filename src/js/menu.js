const menu = document.getElementById("menu");
const trigger = document.getElementById("menu-trigger");

// Abrir/fechar menu
trigger.addEventListener("click", () => {
    const aberto = menu.dataset.aberto === "true";
    menu.dataset.aberto = !aberto;
});