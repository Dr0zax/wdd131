const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 845;
canvas.height = 480;

class Dvd {
    constructor(x, y, radius) {
        this.x = x | Math.floor(Math.random() * (canvas.width));
        this.y = y | Math.floor(Math.random() * (canvas.height));
        this.radius = radius | 25;
        this.color = this.chooseRandColor();

        this.velX = 5;
        this.velY = 5;
    }

    draw() {
        ctx.beginPath();
        ctx.fillRect(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    chooseRandColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    update() {
        if (this.x <= this.radius || this.x >= canvas.width - this.radius) {
            this.velX = -this.velX;
            this.color = this.chooseRandColor()
        }

        if (this.y <= this.radius || this.y >= canvas.height - this.radius) {
            this.velY = -this.velY;
            this.color = this.chooseRandColor()
        }

        this.x += this.velX;
        this.y += this.velY;
        this.draw();
    }
}

function init() {
    bouncer = new Dvd();
    window.requestAnimationFrame(draw);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bouncer.update();
    window.requestAnimationFrame(draw);
}

init()