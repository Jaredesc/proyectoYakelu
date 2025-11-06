document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave básico
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Validación simple del formulario
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nombre = form.elements['nombre'].value.trim();
      const email = form.elements['email'].value.trim();
      const mensaje = form.elements['mensaje'].value.trim();

      if (!nombre || !email || !mensaje) {
        status.textContent = 'Por favor completa todos los campos.';
        status.style.color = '#b00020';
        return;
      }
      if (!email.includes('@')) {
        status.textContent = 'Ingresa un email válido.';
        status.style.color = '#b00020';
        return;
      }

      // Placeholder: aquí después se integra Railway (fetch POST)
      status.textContent = '¡Mensaje enviado (demo)! Integraremos Railway en la siguiente iteración.';
      status.style.color = '#1b873f';
      form.reset();
    });
  }
});
