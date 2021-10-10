(function toggleMenu() {
  const $btnMenu = document.querySelector(".menu-btn");
  const $menu = document.querySelector(".menu");
  document.addEventListener("click", (e) => {
    if (
      e.target === $btnMenu || //button
      e.target.matches(".menu-btn *") || //svg
      e.target.matches(".menu a") // link
    ) {
      $menu.classList.toggle("is-active");
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
    }
  });
})();
// ------- contact form with FormSubimit.co--------------//

(function enviarFormulario() {
  const $form = document.querySelector(".contact-form");
  const $loader = document.querySelector(".contact-form-loader");
  const $response = document.querySelector(".contact-form-response");
  document.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/carlangas10001@gmail.com", {
        method: "POST",
        body: new FormData($form),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          window.location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          let message =
            err.statusText || "Ocurrió un error al enviar el formulario :c";
          $response.innerHTML = `Error ${err.status}: ${message}`;
          window.location.hash = "#gracias";
        })
        .finally(() => {
          $loader.classList.add("none");
          setTimeout(() => {
            window.location.hash = "#closed";
          }, 3000);
        });
    }
  });
})();
