class PointLightSource {
    constructor(posX, posY, radius, intensity, direction, ropeLength, ropeAngle) {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.intensity = intensity;
        this.direction = direction;
        this.ropeLength = ropeLength;
        this.ropeAngle = ropeAngle;
        this.arrow = new Arrow(posX, posY, direction, intensity);
    }

    draw() {
        // Arrow
        this.arrow.update(this.posX, this.posY, 270, 127);
        this.arrow.draw('#CC5050');

        // Line
        ctx.beginPath();
        ctx.strokeStyle = '#FFFFFF';
        ctx.moveTo(FIX_POINT_X, FIX_POINT_Y);
        ctx.lineTo(this.posX, this.posY);
        ctx.stroke();

        // Circle
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, PI2);
        ctx.closePath();

        // Inner Area
        let brightness = Math.floor(rangeConversion(this.intensity, 0, 100, 0, 255));
        ctx.fillStyle = `rgb(${brightness},${brightness},${brightness})`;
        ctx.fill();
        
        // Outline
        ctx.strokeStyle = '#888888';
        ctx.lineWidth = 3;
        ctx.stroke();
    }
}
