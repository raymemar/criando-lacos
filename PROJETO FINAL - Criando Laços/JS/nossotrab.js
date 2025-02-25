document.addEventListener("DOMContentLoaded", function() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Detalhes do Evento</h2>
            <p>Mais informações sobre este evento estarão disponíveis em breve.</p>
        </div>
    `;
    document.body.appendChild(modal);

    const modalContent = document.querySelector(".modal-content");
    const closeModal = document.querySelector(".close");
    const infoButtons = document.querySelectorAll(".info-btn");

    infoButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
