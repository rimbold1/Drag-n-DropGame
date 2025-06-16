import { Container, Sprite } from "pixi.js";
import { gameTextures } from "./textures";

export class Column extends Container{
    constructor() {
        super()
 
        const columnTexture = gameTextures[2];
        const containerSprite = new Sprite(columnTexture);
        containerSprite.anchor.set(0.5);
 
        this.addChild(containerSprite);
    }
}