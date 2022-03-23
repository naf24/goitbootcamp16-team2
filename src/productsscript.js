(() => {
      const refs = {
        openModalBtn: document.querySelector("[data-modalprod1-open]"),
        closeModalBtn: document.querySelector("[data-modalprod1-close]"),
        modal: document.querySelector("[data-modalprod1]"),
      };
    
      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);
    
      function toggleModal() {
        document.body.classList.toggle("data-modalprod1");
        refs.modal.classList.toggle("is-hidden");
      }
    })();

    (() => {
          const refs = {
            openModalBtn: document.querySelector("[data-modalprod2-open]"),
            closeModalBtn: document.querySelector("[data-modalprod2-close]"),
            modal: document.querySelector("[data-modalprod2]"),
          };
        
          refs.openModalBtn.addEventListener("click", toggleModal);
          refs.closeModalBtn.addEventListener("click", toggleModal);
        
          function toggleModal() {
            document.body.classList.toggle("data-modalprod2");
            refs.modal.classList.toggle("is-hidden");
          }
        })();

        (() => {
              const refs = {
                openModalBtn: document.querySelector("[data-modalprod3-open]"),
                closeModalBtn: document.querySelector("[data-modalprod3-close]"),
                modal: document.querySelector("[data-modalprod3]"),
              };
            
              refs.openModalBtn.addEventListener("click", toggleModal);
              refs.closeModalBtn.addEventListener("click", toggleModal);
            
              function toggleModal() {
                document.body.classList.toggle("data-modalprod3");
                refs.modal.classList.toggle("is-hidden");
              }
            })();