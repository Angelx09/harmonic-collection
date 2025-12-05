    const player = document.getElementById("player");
    const box = document.querySelector(".box");
    const scoreEl = document.querySelector(".score-count");
    let score = 0;
    let jumping = false;

    function jump() {
      if (jumping) return;
      jumping = true;
      player.classList.add("jump");
      setTimeout(() => {
        player.classList.remove("jump");
        jumping = false;
      }, 600);
    }

    function spawnSheep() {
      const sheep = document.createElement("div");
      sheep.classList.add("sheep1");
      box.appendChild(sheep);
      let pos = box.offsetWidth;
      sheep.style.left = pos + "px";

      function move() {
        pos -= 2; 
        sheep.style.left = pos + "px";

        const playerRect = player.getBoundingClientRect();
        const sheepRect = sheep.getBoundingClientRect();

        if (
          playerRect.left < sheepRect.right &&
          playerRect.right > sheepRect.left &&
          playerRect.top < sheepRect.bottom &&
          playerRect.bottom > sheepRect.top
        ) {
          score++;
          scoreEl.textContent = "Count: " + score;
          sheep.remove();
          return;
        }

        if (pos + sheep.offsetWidth > 0) {
          requestAnimationFrame(move);
        } else {
          sheep.remove();
        }
      }

      move();
    }

   
    setInterval(spawnSheep, 2000);

