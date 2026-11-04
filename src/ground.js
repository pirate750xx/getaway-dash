class Ground {
  constructor(gl) {
    this.gl = gl;
    this.initBuffers();
  }

  initBuffers() {
    const gl = this.gl;
    this.positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

    const positions = [
      -2.0,  2.0, 0.0,
       2.0,  2.0, 0.0,
       2.0, -2.0, 0.0,
      -2.0, -2.0, 0.0,
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  }

  draw(gl) {
    // Logique de dessin du sol
  }
}
