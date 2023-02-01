class Arrow {
    #MAX_ARROW_LENGTH = CANVAS_HEIGHT * 15 / 100;

    constructor(posX, posY, direction, magnitudePercentage = 0) {
        this.posX = posX;
        this.posY = posY;
        this.direction = direction;
        this.magnitudePercentage = magnitudePercentage;
    }

    update(posX, posY, direction, brightness) {
        this.posX = posX;
        this.posY = posY;
        this.magnitudePercentage = rangeConversion(brightness, 0, 255, 0, 100);
        this.direction = direction;
    }

    draw(color) {
        // Calculations
        let x1 = this.posX;
        let y1 = this.posY;
        let length = this.#MAX_ARROW_LENGTH * this.magnitudePercentage / 100;
        this.direction = (this.direction + 180) % 360; // TODO: get rid of this botch
        let angle = this.degreesToRadians(this.direction);
        let a = length * Math.cos(angle);
        let b = length * Math.sin(angle);
        let x2 = a + x1;
        let y2 = b + y1;

        // Color
        let strokeColor = '';
        if (color) {
            strokeColor = color;
        } else {
            let brightness = Math.floor(rangeConversion(this.magnitudePercentage, 0, 100, 0, 255));
            strokeColor = `rgba(${brightness},${brightness},${brightness},${(this.magnitudePercentage + 20) / 100})`;
        }
        ctx.strokeStyle = strokeColor;

        // Shape
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(x2, y2);
        ctx.lineTo(x1, y1);
        ctx.stroke();

        // Head
        let headAngle = Math.PI / 6;
        let headLength = 4;
        ctx.beginPath();
        ctx.lineTo(x2, y2);
        ctx.lineTo(x2 - headLength * Math.cos(angle - headAngle), y2 - headLength * Math.sin(angle - headAngle));
        ctx.lineTo(x2 - headLength * Math.cos(angle + headAngle), y2 - headLength * Math.sin(angle + headAngle));
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = strokeColor;
        ctx.fill();
    }

    degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
}
