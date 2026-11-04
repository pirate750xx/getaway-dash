class KeyHandler {
  constructor() {
    this.keys = {};
    this.initListeners();
  }

  initListeners() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.key] = true;
      if (e.key === 'ArrowLeft' || e.key === 'a') {
        if (typeof objects !== 'undefined' && objects.length > 0) {
          objects[0].moveLeft();
        }
      }
      if (e.key === 'ArrowRight' || e.key === 'd') {
        if (typeof objects !== 'undefined' && objects.length > 0) {
          objects[0].moveRight();
        }
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key] = false;
    });
  }
}

function ForKeyPress(objects, key) {
  // Gestion continue des touches si besoin
}
