const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 845;
canvas.height = 480;

class Dvd {
    constructor(width = 50) {
        this.width = width;
        this.x = Math.floor(Math.random() * (canvas.width - (this.width/2)));
        this.y = Math.floor(Math.random() * (canvas.height - (this.width/2)));
        this.color = this.chooseRandColor();
        this.velX = 500;
        this.velY = 500;
    }

    draw() {
        ctx.beginPath();
        ctx.fillRect(this.x - (this.width/2), this.y - (this.width/2), this.width, this.width);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    chooseRandColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    update(secondsPassed) {
        if (this.x <= (this.width/2) || this.x >= canvas.width - (this.width/2)) {
            this.velX = -this.velX;
            this.color = this.chooseRandColor()
        }

        if (this.y <= (this.width/2) || this.y >= canvas.height - (this.width/2)) {
            this.velY = -this.velY;
            this.color = this.chooseRandColor()
        }

        this.x += (this.velX * secondsPassed);
        this.y += (this.velY * secondsPassed);
        this.draw();
    }
}

let bouncer;
let oldTimeStamp = 0;

function draw(timeStamp) {
    const secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bouncer.update(secondsPassed);
    window.requestAnimationFrame(draw);
}

function init() {
    bouncer = new Dvd(50);
    window.requestAnimationFrame(draw);
}

init();
