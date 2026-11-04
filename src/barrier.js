class Barrier {
  constructor(gl, index) {
    this.gl = gl;
    this.position = [((index % 2) === 0 ? -1.0 : 1.0), 4.0 + (index * 3.0), 0.0];
    this.initBuffers();
  }

  initBuffers() {
    const gl = this.gl;
    this.positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

    const positions = [
      -0.3,  0.1, 0.0,
       0.3,  0.1, 0.0,
       0.3, -0.1, 0.0,
      -0.3, -0.1, 0.0,
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  }

  draw(gl) {
    // Dessin de la barrière
  }
}
