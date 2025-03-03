import { Container, Sprite } from "pixi.js";
import { gameTextures } from "./textures";

export class Block extends Container{
    constructor() {
        super()

        const columndTexture = gameTextures[2];
        const containerSprite = new Sprite(columndTexture);
        containerSprite.anchor.set(0.5);

        this.addChild(containerSprite);
    }
}