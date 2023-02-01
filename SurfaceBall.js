class SurfaceBall {
    constructor(posX, posY, radius, luminance) {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.luminance = luminance;
        this.arrow = new Arrow(posX, posY, 90, luminance);
    }

    draw() {
        let brightness = rangeConversion(this.luminance, 0, 100, 0, 255);

        // Arrow
        this.arrow.update(this.posX, this.posY, 90, brightness);
        this.arrow.draw();

        // Circle
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radius, 0, PI2);
        ctx.closePath();

        // Inner Area
        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
        ctx.fill();
        
        // Outline
        ctx.strokeStyle = '#888888';
        ctx.lineWidth = SURFACE_BALL_LINE_WIDTH;
        ctx.stroke();
    }

    updateLuminance(pointLightSource) {
        let dist = this.findDistance(this.posX, this.posY, pointLightSource.posX, pointLightSource.posY);
        this.luminance = pointLightSource.intensity / dist ** 2;
    }

    findDistance(x1, y1, x2, y2) {
        let a = x1 - x2;
        let b = y1 - y2;
        let dist = Math.sqrt(a*a + b*b);
        return this.normalizeDistance(dist);
    }

    normalizeDistance(dist) {
        return dist / 160;
    }
}
