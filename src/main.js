var game_start = false;
var game_over = false;
var finish = false;

var objects = [];

function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl');

  if (!gl) {
    alert('Unable to initialize WebGL.');
    return;
  }

  const player = new Player(gl);
  const police = new Police(gl);
  const track = new Track(gl);
  const ground = new Ground(gl);
  const wall = new Wall(gl);
  const key = new KeyHandler();

  objects.push(player);
  objects.push(police);
  objects.push(track);
  objects.push(ground);
  objects.push(wall);

  for(let i = 0; i < 5; i++) {
    objects.push(new Obstacle(gl, i));
    objects.push(new Coin(gl, i));
    objects.push(new Boost(gl, i));
    objects.push(new Barrier(gl, i));
  }

  objects.push(new FinishLine(gl));

  let then = 0;

  function render(now) {
    now *= 0.001;  // conversion en secondes
    const deltaTime = now - then;
    then = now;

    if(game_start && !game_over && !finish) {
      update_score();
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clearDepth(1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      ForKeyPress(objects, key);

      for(let i = 0; i < objects.length; i++) {
        objects[i].draw(gl);
      }
    }

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

window.onload = main;
