document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Capturar valores del formulario
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("services").value;
    const message = document.getElementById("message").value.trim();

    // Expresiones regulares para validaciones
    const emailPattern = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    const namePattern = /^[A-Za-z\s]{3,50}$/;
    const phonePattern =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    // Validaciones
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address (e.g., user@example.com).");
      return;
    }

    if (!name.match(namePattern)) {
      alert(
        "Name must be between 3 and 50 characters and only contain letters."
      );
      return;
    }

    if (!phone.match(phonePattern)) {
      alert("Please enter a valid phone number (e.g., +1 123-456-7890).");
      return;
    }

    if (!service) {
      alert("Please select a service.");
      return;
    }

    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }

    // Guardar en localStorage
    let messages = JSON.parse(localStorage.getItem("epicMessages")) || [];
    messages.push({
      email,
      name,
      phone,
      service,
      message,
      date: new Date().toLocaleString(),
    });
    localStorage.setItem("epicMessages", JSON.stringify(messages));

    // Mostrar alerta de éxito
    alert("Your message has been sent successfully!");

    // Reiniciar el formulario
    form.reset();
  });
});
