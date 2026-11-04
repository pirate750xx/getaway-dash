class Camera {
  constructor() {
    this.position = [0.0, 0.0, 2.0];
    this.target = [0.0, 0.0, 0.0];
  }

  update(playerPosition) {
    // Suit la position du joueur avec la caméra
    this.position[0] = playerPosition[0];
    this.position[1] = playerPosition[1] - 1.0;
  }
}
