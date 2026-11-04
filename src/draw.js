function drawScene(gl, programInfo, buffers, gameObjects) {
  gl.clearColor(0.1, 0.1, 0.1, 1.0);
  gl.clearDepth(1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Boucle de rendu pour les objets du jeu
  if (gameObjects && gameObjects.length > 0) {
    gameObjects.forEach(obj => {
      if (obj && typeof obj.draw === 'function') {
        obj.draw(gl);
      }
    });
  }
}
