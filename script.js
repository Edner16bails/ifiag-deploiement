// Script JavaScript pour le projet IFIAG
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn');
  const message = document.getElementById('message');

  btn.addEventListener('click', function() {
    message.textContent = 'Projet IFIAG déployé avec succès sur Netlify !';
  });

  console.log('Script chargé avec succès.');
});

// Modification depuis la branche iffiag-exp
console.log('Branche iffiag-exp active.');
