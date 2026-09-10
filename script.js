// Fecha objetivo: 21 de noviembre de 2026 a las 13:00
// Asegúrate de ajustar la zona horaria si es necesario.
// JavaScript trabaja con UTC si no especificas zona; aquí asumimos hora local.
const targetDate = new Date('2026-11-21T13:00:00'); // 21 de noviembre de 2026 13:00

function updateCountdown() {
  const now = new Date();
  const diffMs = targetDate - now;

  if (diffMs <= 0) {
    // Ya llegó o pasó
    document.getElementById('days').textContent = 0;
    document.getElementById('hours').textContent = 0;
    document.getElementById('minutes').textContent = 0;
    document.getElementById('seconds').textContent = 0;
    clearInterval(timer);
    return;
  }

  // Convertir milisegundos a días, horas, minutos y segundos
  const diffSec = Math.floor(diffMs / 1000);
  const days = Math.floor(diffSec / (3600 * 24));
  const hours = Math.floor((diffSec % (3600 * 24)) / 3600);
  const minutes = Math.floor((diffSec % 3600) / 60);
  const seconds = diffSec % 60;

  // Mostrar en la página
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Inicializar y actualizar cada segundo
updateCountdown();
const timer = setInterval(updateCountdown, 1000);