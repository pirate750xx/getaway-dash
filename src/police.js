class Police {
  constructor(gl) {
    this.gl = gl;
    this.position = [0.0, -1.2, 0.0];
    this.speed = 0.03;
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
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    
    const colors = [
      0.0, 0.0, 1.0, 1.0, // Bleu pour la police
      0.0, 0.0, 1.0, 1.0,
      0.0, 0.0, 1.0, 1.0,
      0.0, 0.0, 1.0, 1.0,
    ];
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  }
}
