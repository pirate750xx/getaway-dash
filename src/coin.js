class Coin {
  constructor(gl, index) {
    this.gl = gl;
    this.position = [((index % 3) - 1) * 0.6, 1.5 + (index * 1.5), 0.0];
    this.collected = false;
    this.initBuffers();
  }

  initBuffers() {
    const gl = this.gl;
    this.positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

    const positions = [
      -0.1,  0.1, 0.0,
       0.1,  0.1, 0.0,
       0.1, -0.1, 0.0,
      -0.1, -0.1, 0.0,
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  }

  draw(gl) {
    // Dessin de la pièce
  }
}
