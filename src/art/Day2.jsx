import React from "react";
import Sketch from "react-p5";

const canvasWidth = 500;
const canvasHeight = 500;
let points = [];

export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

		// p5.mouseX = canvasWidth / 2;
		// p5.mouseY = canvasHeight / 2;
        p5.background(30);
        let density = 50;
        let space = canvasWidth / density;

        for(let x = 0; x < canvasWidth; x+=space){
            for(let y = 0; y < canvasHeight; y+=space){
                let p = p5.createVector(x,y);
                points.push(p);
            }
        }
    }

    function draw(p5){
        p5.noStroke()
        p5.fill(255)
    

    for(let i = 0; i < points.length; i++){

        //add a vector to each point based on the angle
        let angle = p5.map(p5.noise(points[i].x, points[i].y), 0,1,0,720);
        points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));

        p5.ellipse(points[i].x, points[i].y, 5)
    }
}


    return <Sketch setup={setup} draw={draw} className="" />;
}