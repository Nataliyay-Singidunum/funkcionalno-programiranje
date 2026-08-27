const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64 * 16;  // 1024
canvas.height = 64 * 9;  // 573

// collision setup
const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: "./public/img/backgroundLevel1.png"
})

const player = new Player({
    collisionBlocks,
    imageSrc: "./public/img/king/idle.png",
    frameRate: 11
});
const keys = {
    w : {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

// animation loop
function animate() {
    window.requestAnimationFrame(animate);

    backgroundLevel1.draw();
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw();
    })

    player.velocity.x = 0;
    if(keys.d.pressed) {
        player.velocity.x = 4;
    } else if(keys.a.pressed) {
        player.velocity.x = -4;
    }

    player.draw();
    player.update();
}
animate();

