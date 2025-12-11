const menu = document.getElementById("menu");
const trigger = document.getElementById("menu-trigger");

// Abrir / fechar menu
trigger.addEventListener("click", () => {
    const aberto = menu.dataset.aberto === "true";
    menu.dataset.aberto = !aberto;
});

// ---- MÚSICA NO HOVER ---- //

const musiquinha1 = document.getElementById('musiquinha1');
musiquinha1.volume = 0.03; // 30% do volume

// Quando o mouse entra no elemento
trigger.addEventListener('mouseover', () => {
    musiquinha1.currentTime = 0; // Reinicia
    musiquinha1.play();          // Toca
});

// Quando o mouse sai do elemento
trigger.addEventListener('mouseout', () => {
    musiquinha1.pause();         // Pausa
});