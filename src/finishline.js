class FinishLine {
  constructor(gl) {
    this.gl = gl;
    this.position = [0.0, 15.0, 0.0];
    this.initBuffers();
  }

  initBuffers() {
    const gl = this.gl;
    this.positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

    const positions = [
      -1.0,  0.2, 0.0,
       1.0,  0.2, 0.0,
       1.0, -0.2, 0.0,
      -1.0, -0.2, 0.0,
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  }

  draw(gl) {
    // Dessin de la ligne d'arrivée
  }
}
