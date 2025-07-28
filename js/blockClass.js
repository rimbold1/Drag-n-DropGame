import { AnimatedSprite, Container, Sprite } from "pixi.js";
import { blockTextures, startEmotionsTextures, auraTextures, violetAmazedAnim, blinkingAnimTextures } from "./textures";

export class Block extends Container{
    constructor(texture, emotionStatic, aura, animation) {
        super()

        this.id = texture;

        this.eventMode = 'none';
        this.blockSprite = new Sprite(blockTextures[texture]); // Block color
        this.blockSprite.anchor.set(0.5);

        this.startEmotionSprite = new Sprite(startEmotionsTextures[emotionStatic]); // Static emotion face
        this.startEmotionSprite.anchor.set(0.5);

        this.auraSprite = new Sprite(auraTextures[aura]);
        this.auraSprite.anchor.set(0.5);
        this.auraSprite.visible = false;

        this.emotionAnimation = new AnimatedSprite(blinkingAnimTextures[animation]); //animation
        this.emotionAnimation.anchor.set(0.5);
        this.emotionAnimation.animationSpeed = 0.5;
        this.emotionAnimation.visible = false;
        this.emotionAnimation.loop = false;

        this.addChild(this.auraSprite);
        this.addChild(this.blockSprite);
        this.addChild(this.startEmotionSprite);
        this.addChild(this.emotionAnimation);
    }
}