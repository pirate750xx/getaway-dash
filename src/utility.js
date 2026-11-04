// Fonctions utilitaires pour le jeu Getaway Dash
function checkCollision(obj1, obj2) {
  return (Math.abs(obj1.position[0] - obj2.position[0]) < 0.4 &&
          Math.abs(obj1.position[1] - obj2.position[1]) < 0.4);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
