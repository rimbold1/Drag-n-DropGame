import { Container, Sprite } from "pixi.js";
import { gameTextures } from "./textures";

export class Column extends Container{
    constructor() {
        super()
 
        const columnTexture = gameTextures[2];
        const containerSprite = new Sprite(columnTexture);
        containerSprite.anchor.set(0.5);

        this.blocks = [];
 
        this.addChild(containerSprite);
    }
    disactivateBlocks() {
        this.blocks.forEach((block) => {
            block.emotionAnimation.visible = false;
            block.auraSprite.visible = false;
            console.log('WORKED')
        });
    }
}