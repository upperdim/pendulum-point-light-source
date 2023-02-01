function createSurfaceBalls(ballRadius = DEFAULT_CIRCLE_RADIUS) {
    numOfBalls = CANVAS_WIDTH / (ballRadius * 2);
    sidePadding = (CANVAS_WIDTH % ballRadius) / 2;
    
    let balls = []
    let posY = CANVAS_HEIGHT - (CANVAS_HEIGHT * SURFACE_SCREEN_PERCENT / 100);
    let posX = sidePadding + ballRadius;
    for (let i = 0; i < numOfBalls; ++i) {
        balls.push(new SurfaceBall(posX, posY, ballRadius, 0));
        posX += 2 * ballRadius;
    }

    return balls;
}

function drawCeiling() {
    // Horizontal line
    ctx.beginPath();
    ctx.strokeStyle = '#FFFFFF';
    ctx.moveTo(0, CEILING_Y);
    ctx.lineTo(CANVAS_WIDTH, CEILING_Y);
    
    // Middle Half-circle
    ctx.arc(FIX_POINT_X, FIX_POINT_Y, DEFAULT_CIRCLE_RADIUS, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function paintCanvas(colorString) {
	ctx.beginPath();
	ctx.fillStyle = colorString;
	ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	ctx.closePath();
	ctx.fill();
}

function clearScreen() {
    paintCanvas(BACKGROUND_COLOR);
}
