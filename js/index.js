import { Application, Container, Sprite, AnimatedSprite } from 'pixi.js';
import { Column } from './columnClass.js';
import { gameTextures, pointerTextures, blueAmazedAnim, violetAmazedAnim, blinkingSmileViolet, blinkingAnimTextures } from './textures.js';
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
	const hand_end = new Sprite(pointerTextures[1]); // спрайт руки (курсор).
	
	
	hand_end.eventMode = 'none';
	// columnContainer.eventMode = 'passive';

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
	
	app.canvas.style.cursor = 'none';
	app.stage.eventMode = 'static';
	app.stage.addChild(hand_end);

	app.stage.on('globalmousemove', (e) => {
		hand_end.position.copyFrom(e.global);
	});
	hand_end.zIndex = 1000;
	// hand_end.anchor.set(0.15);
	hand_end.scale.set(0.2);
	

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
		[],
		[1, 1, 2, 4, 4, 2, 3, 3, 2, 1, 1, 2, 2, 5, 5, 3],
		[],
		[4, 4, 2, 2, 4, 1, 1, 1, 4, 4, 4, 1, 5, 5, 5, 3],
		[1, 1, 2, 4, 4, 3, 1, 1, 5, 5, 2, 3, 3, 3, 5, 3]
	];

	let xPos = 0;
	

	for (let i = 0; i < levelMap.length; i++) {

		let column = new Column();
		column.eventMode = "static";
		column.x = xPos;
		column.cursor = 'pointer';
		xPos += 99;
		columnContainer.addChild(column);
		let blockY = column.height/2 - 60;
		
		for (let j = 0; j < levelMap[i].length; j++) {
			let block = new Block(levelMap[i][j], levelMap[i][j], levelMap[i][j], levelMap[i][j]);
			block.y = blockY;
			column.addChild(block);
			column.blocks.push(block);
			blockY -= 55;
		}

		let counter = 1;
		let clickedStatus = false;
		let lastClickedColumn = null;

		function onColumnClick(event) {
			const clickedColumn = event.currentTarget;

			if (lastClickedColumn === clickedColumn) {
				console.log('clicked the same object');
				clickedColumn.disactivateBlocks();
			} else {
				console.log('clicked a different object');
				lastClickedColumn = clickedColumn;
			}
		}


		column.on('pointerdown', (event) => {

		onColumnClick(event);
			
			if (column.blocks.length <= 0) return;

				const lastBlocksElement = column.blocks[column.blocks.length - 1];
				const targetId = lastBlocksElement.id;

				// Анімація тільки для останнього (як базова)
				lastBlocksElement.emotionAnimation.visible = true;
				lastBlocksElement.emotionAnimation.play();
				lastBlocksElement.auraSprite.visible = true;
				lastBlocksElement.visible = true;
				clickedStatus = true;

				// Анімація інших тільки якщо ID збігається
				for (let i = column.blocks.length - 2; i >= 0; i--) {
					const block = column.blocks[i];
					if (block.id === targetId) {
						block.emotionAnimation.visible = true;
						block.emotionAnimation.play();
						block.auraSprite.visible = true;
					} else {
						break; // перериваємо, якщо зустріли інший ID
					}
				}
		});
	};
})();
