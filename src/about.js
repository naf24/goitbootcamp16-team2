
    (() => {
    const refs = {
        openModalBtn: document.querySelector("[data-model-open]"),
        closeModalBtn: document.querySelector("[data-model-close]"),
        modal: document.querySelector("[data-model]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
    })();


    (() => {
    const refs = {
        openModalBtn: document.querySelector("[modal-open]"),
        closeModalBtn: document.querySelector("[modal-close]"),
        modal: document.querySelector("[modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
    })();
