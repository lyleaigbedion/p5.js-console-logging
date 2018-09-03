function setup() {
	
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	
	
	// out puts the mouse position in human readable terms
	console.log("mouseX: " + mouseX + ", mouseY: " + mouseY);

	// background drawn here to keep the screen refreshed 
	//when mouse mouse and the ellipse follows
	background(0);
  	// Draw a circle at the mouse
  	fill(255);
  	ellipse(mouseX, mouseY, 20, 20);

  


}