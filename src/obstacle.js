class Obstacle {
  constructor(gl, index) {
    this.gl = gl;
    this.position = [((index % 3) - 1) * 0.8, 2.0 + (index * 2.0), 0.0];
    this.initBuffers();
  }

  initBuffers() {
    const gl = this.gl;
    this.positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

    const positions = [
      -0.2,  0.2, 0.0,
       0.2,  0.2, 0.0,
       0.2, -0.2, 0.0,
      -0.2, -0.2, 0.0,
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  }

  draw(gl) {
    // Dessin de l'obstacle
  }
}
