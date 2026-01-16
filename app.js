document.addEventListener("DOMContentLoaded", () => {
    const modals = [
        {
            button: "btnPendidikan",
            modal: "educationModal",
            close: ".close"
        },
        {
            button: "btnKeahlian",
            modal: "skillModal",
            close: ".close-skill"
        },
        {
            button: "btnPengalaman",
            modal: "experienceModal",
            close: ".close-experience"
        },
        {
            button: "aboutBtn",
            modal: "aboutModal",
            close: ".close-about"
        }
    ];

    modals.forEach(item => {
        const btn = document.getElementById(item.button);
        const modal = document.getElementById(item.modal);
        const closeBtn = modal.querySelector(item.close);

        if (!btn) return;

        btn.addEventListener("click", () => {
            modal.classList.add("active");
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    });
});
