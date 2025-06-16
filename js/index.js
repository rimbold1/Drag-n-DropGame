import { Application, Container, Sprite } from 'pixi.js';
import { Column } from './columnClass.js';
import { gameTextures, emotionsTextures } from './textures.js';
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
	const blockContainer = new Container();
	const leftSideContainer = new Container();
	const blocks = new Container();

	app.stage.addChild(gameContainer);
	gameContainer.addChild(background, leftSideContainer, columnContainer);

	columnContainer.x = gameContainer.width*0.55;
	columnContainer.y = 500;
	columnContainer.scale.x = 0.85;
	columnContainer.scale.y = 0.85;

	leftSideContainer.addChild(header, downloadButton);

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


	const levelMap = [
		[3, 3, 2, 2, 2, 1, 1, 4, 4, 4, 2, 2, 2, 5, 5, 5],
		[4, 4, 1, 1, 4, 5, 5, 5, 3, 3, 2, 5, 5, 3, 3, 3],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 1, 2, 4, 4, 2, 3, 3, 2, 1, 1, 2, 2, 5, 5, 3],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[4, 4, 2, 2, 4, 1, 1, 1, 4, 4, 4, 1, 5, 5, 5, 3],
		[1, 1, 2, 4, 4, 3, 1, 1, 5, 5, 2, 3, 3, 3, 5, 3]
	];

	let xPos = 0;

	for (let i = 0; i < levelMap.length; i++) {
		let column = new Column();
		column.x += xPos;
		xPos += 90;
		columnContainer.addChild(column);
		for (let j = 0; j < levelMap[i].length; j++) {
			
		}
	}



	// columnContainer.addChild(blockContainer);
	
})();
