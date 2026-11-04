class Player {
  constructor(gl) {
    this.gl = gl;
    this.score = 0;
    this.position = [0.0, -0.5, 0.0];
    this.speed = 0.05;
    
    // Initialisation des buffers et de la logique du joueur
    this.initBuffers();
  }

  initBuffers() {
    const gl = this.gl;
    this.positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

    const positions = [
      -0.2,  0.2,  0.0,
       0.2,  0.2,  0.0,
       0.2, -0.2,  0.0,
      -0.2, -0.2,  0.0,
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  }

  draw(gl) {
    // Logique de dessin du joueur
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    
    const colors = [
      1.0, 0.0, 0.0, 1.0, // Rouge pour le joueur/voleur
      1.0, 0.0, 0.0, 1.0,
      1.0, 0.0, 0.0, 1.0,
      1.0, 0.0, 0.0, 1.0,
    ];
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  }

  moveLeft() {
    if (this.position[0] > -1.2) {
      this.position[0] -= 0.4;
    }
  }

  moveRight() {
    if (this.position[0] < 1.2) {
      this.position[0] += 0.4;
    }
  }
}
