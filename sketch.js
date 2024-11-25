function setup() {
    createCanvas(500, 500);
    background(255); 
    noLoop(); 
  
    const swappedRhombuses = [
      [{x: 100, y: 150}, {x: 250, y: 250}, {x: 100, y: 350}, {x: 50, y: 300}],
      [{x: 400, y: 150}, {x: 250, y: 250}, {x: 400, y: 350}, {x: 450, y: 300}],
      [{x: 250, y: 250}, {x: 100, y: 350}, {x: 250, y: 450}, {x: 200, y: 400}],
      [{x: 250, y: 250}, {x: 400, y: 350}, {x: 250, y: 450}, {x: 300, y: 400}],
      [{x: 175, y: 200}, {x: 250, y: 250}, {x: 325, y: 200}, {x: 250, y: 150}],
      [{x: 175, y: 200}, {x: 250, y: 250}, {x: 150, y: 300}, {x: 125, y: 250}],
      [{x: 325, y: 200}, {x: 250, y: 250}, {x: 350, y: 300}, {x: 375, y: 250}],
      [{x: 175, y: 300}, {x: 250, y: 250}, {x: 325, y: 300}, {x: 250, y: 350}],
    ];
  
    const swappedTriangles = [
      [{x: 200, y: 100}, {x: 250, y: 150}, {x: 300, y: 100}],
      [{x: 200, y: 400}, {x: 250, y: 450}, {x: 300, y: 400}],
      [{x: 100, y: 250}, {x: 150, y: 300}, {x: 100, y: 350}],
      [{x: 400, y: 250}, {x: 450, y: 300}, {x: 400, y: 350}],
    ];
  
    swappedRhombuses.forEach(rhombus => drawPolygon(rhombus, 'black'));
    swappedTriangles.forEach(triangle => drawPolygon(triangle, 'black'));
  }
  
  function drawPolygon(points, fillColor) {
    fill(fillColor);
    stroke(0);
    beginShape();
    points.forEach(point => vertex(point.x, point.y));
    endShape(CLOSE);
  }
  
