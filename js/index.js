import { Application, Container, Sprite } from 'pixi.js';
import { Column } from './columnClass.js';
import { gameTextures } from './textures.js';
import { Block } from './blockClass.js';

// Asynchronous IIFE
(async () => {
	// Create a PixiJS application.
	const app = new Application();

	// Intialize the application.
	await app.init({ background: '#ffffff', resizeTo: window });

	// Then adding the application's canvas to the DOM body.
	document.body.appendChild(app.canvas);

	const background = new Sprite(gameTextures[1]); // бекграунд.
	const header = new Sprite(gameTextures[3]); // надпис Try to solve this.
	const downloadButton = new Sprite(gameTextures[4]); // Кнопка download now.
	const gameContainer = new Container();
	const columnContainer = new Container();
	const leftSideContainer = new Container();

	leftSideContainer.addChild(header, downloadButton);
	app.stage.addChild(gameContainer);
	gameContainer.addChild(background, columnContainer, leftSideContainer);

	columnContainer.x = gameContainer.width*0.55;
	columnContainer.y = 500;
	columnContainer.scale.x = 0.85;
	columnContainer.scale.y = 0.85;

	header.anchor.set(0.5);
	header.x = 490;
	header.y = gameContainer.height * 0.3;

	downloadButton.anchor.set(0.5);
	downloadButton.x = 490;
	downloadButton.y = gameContainer.height * 0.45;
	downloadButton.eventMode = "static";
	downloadButton.cursor = "pointer";

	downloadButton.on("pointerdown", () => {
		alert("Sprite clicked!");
	});

	downloadButton.on("pointerover", () => {
		downloadButton.scale = 1.1;
	});

	downloadButton.on("pointerout", () => {
		downloadButton.scale = 1;
	});

	let xPos = 30;
	const columnArray = []; // Array with columns for blocks.
	for (let i = 0; i < 7; i++) {
		const columnElement = new Column();
		columnElement.x = xPos;
		columnArray.push(columnElement);
		xPos += 85;
		columnContainer.addChild(columnElement);
	}
	console.log(columnArray);
	
// Animate the rotation
	
})();
