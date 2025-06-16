import { Container, Sprite } from "pixi.js";
import { emotionsTextures } from "./textures";

export class Block extends Container{
    constructor(texture) {
        super()

        const containerSprite = new Sprite(emotionsTextures[texture]);
        containerSprite.anchor.set(0.5);

        this.addChild(containerSprite);
    }
}