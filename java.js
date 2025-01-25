// Obtener elementos del DOM
const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');
const modalSi = document.getElementById('modal-si');
const modalNo = document.getElementById('modal-no');
const closeButtons = document.querySelectorAll('.close');
const confettiContainer = document.getElementById('confetti');

// Mostrar confeti
function showConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
}

// Mostrar modal "Sí" con mensaje dinámico
btnSi.addEventListener('click', () => {
    modalSi.classList.remove('hidden');
    message.textContent = '¡Sabía que me perdonarías! ❤️'; // Cambiar texto dinámico
    showConfetti();
});

// Movimiento evasivo del botón "No"
btnNo.addEventListener('mouseover', () => {
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    const newLeft = Math.random() * (containerRect.width - btnRect.width);
    const newTop = Math.random() * (containerRect.height - btnRect.height);

    btnNo.style.left = `${newLeft}px`;
    btnNo.style.top = `${newTop}px`;
});

// Cerrar modales
closeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalSi.classList.add('hidden');
        modalNo.classList.add('hidden');
    });
});
