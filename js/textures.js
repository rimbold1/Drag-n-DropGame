import { Assets } from "pixi.js";

export const gameTextures = { // DIFFERENT GAME TEXTURES
    
     1: await Assets.load('assets/background.png'),
     2: await Assets.load('assets/container.png'),
     3: await Assets.load('assets/Try to solve this_text_00000.png'),
     4: await Assets.load('assets/button_2.png'),
     5: await Assets.load('assets/container_blue.png'),
     6: await Assets.load('assets/container_green.png'),
     7: await Assets.load('assets/container_red.png'),
     8: await Assets.load('assets/container_violet_orange.png'),
     9: await Assets.load('assets/container_violet.png')
     
};


export const blockTextures = { // COLOR BLOCK TEXTURES

     1: await Assets.load('assets/Jelly_blue.png'), // Blue
     2: await Assets.load('assets/Jelly_orange.png'), // Orange
     3: await Assets.load('assets/Jelly_green.png'), // Green
     4: await Assets.load('assets/Jelly_red.png'), // Red
     5: await Assets.load('assets/Jelly_violet.png') // Violet
     
};

export const auraTextures = { //SHINE AURA TEXTURES

     1: await Assets.load('assets/Jelly_blue_shine.png'), // blue shine
     2: await Assets.load('assets/Jelly_orange_shine.png'), // orange shine
     3: await Assets.load('assets/Jelly_green_shine.png'), // green shine
     4: await Assets.load('assets/Jelly_red_shine.png'), // red shine
     5: await Assets.load('assets/Jelly_violet_shine.png') // violet shine

};

export const startEmotionsTextures = {

     1: await Assets.load('assets/smile_blue.png'), // smile blue
     2: await Assets.load('assets/happy_orange.png'), // happy orange
     3: await Assets.load('assets/sad_green.png'), // sad green 
     4: await Assets.load('assets/happy_red.png'), // heppy red
     5: await Assets.load('assets/smile-violet.png') // amazed_violet
};

export const pointerTextures = { // POINTER TEXTURES
     1: await Assets.load('assets/hand_end.png'),
     2: await Assets.load('assets/hand_game.png')
};

export const blueAmazedAnim = [ // Blue amazed animation
     await Assets.load('assets/amazed_blue/amazed_00.png'),
     await Assets.load('assets/amazed_blue/amazed_01.png'),
     await Assets.load('assets/amazed_blue/amazed_02.png'),
     await Assets.load('assets/amazed_blue/amazed_03.png'),
     await Assets.load('assets/amazed_blue/amazed_04.png'),
     await Assets.load('assets/amazed_blue/amazed_05.png'),
     await Assets.load('assets/amazed_blue/amazed_06.png'),
     await Assets.load('assets/amazed_blue/amazed_07.png'),
     await Assets.load('assets/amazed_blue/amazed_08.png')
];

export const violetAmazedAnim = [
     await Assets.load('assets/amazed-violet/amazed_00.png'),
     await Assets.load('assets/amazed-violet/amazed_01.png'),
     await Assets.load('assets/amazed-violet/amazed_02.png'),
     await Assets.load('assets/amazed-violet/amazed_03.png'),
     await Assets.load('assets/amazed-violet/amazed_04.png'),
     await Assets.load('assets/amazed-violet/amazed_05.png'),
     await Assets.load('assets/amazed-violet/amazed_06.png')
];

export const blinkingAnimTextures = {

     1: [      
          await Assets.load('assets/blinking-smile-blue/blinking-smile_00.png'),    
          await Assets.load('assets/blinking-smile-blue/blinking-smile_01.png'),
          await Assets.load('assets/blinking-smile-blue/blinking-smile_02.png'),
          await Assets.load('assets/blinking-smile-blue/blinking-smile_03.png'),
          await Assets.load('assets/blinking-smile-blue/blinking-smile_04.png'),
          await Assets.load('assets/blinking-smile-blue/blinking-smile_05.png'),
          await Assets.load('assets/blinking-smile-blue/blinking-smile_06.png'),
          await Assets.load('assets/blinking-smile-blue/blinking-smile_07.png')
     ],
     2: [      
          await Assets.load('assets/blinking-happy-orange/blinking-happy_00.png'),    
          await Assets.load('assets/blinking-happy-orange/blinking-happy_01.png'),
          await Assets.load('assets/blinking-happy-orange/blinking-happy_02.png'),
          await Assets.load('assets/blinking-happy-orange/blinking-happy_03.png'),
          await Assets.load('assets/blinking-happy-orange/blinking-happy_04.png'),
          await Assets.load('assets/blinking-happy-orange/blinking-happy_05.png'),
          await Assets.load('assets/blinking-happy-orange/blinking-happy_06.png')
     ],
     3: [ 
          await Assets.load('assets/blinking-sad-green/blinking-sad_00.png'),    
          await Assets.load('assets/blinking-sad-green/blinking-sad_01.png'),
          await Assets.load('assets/blinking-sad-green/blinking-sad_02.png'),
          await Assets.load('assets/blinking-sad-green/blinking-sad_03.png'),
          await Assets.load('assets/blinking-sad-green/blinking-sad_04.png'),
          await Assets.load('assets/blinking-sad-green/blinking-sad_05.png'),
          await Assets.load('assets/blinking-sad-green/blinking-sad_06.png')
     ],
     4: [
          await Assets.load('assets/blinking-happy-red/blinking-happy_00.png'),    
          await Assets.load('assets/blinking-happy-red/blinking-happy_01.png'),
          await Assets.load('assets/blinking-happy-red/blinking-happy_02.png'),
          await Assets.load('assets/blinking-happy-red/blinking-happy_03.png'),
          await Assets.load('assets/blinking-happy-red/blinking-happy_04.png'),
          await Assets.load('assets/blinking-happy-red/blinking-happy_05.png'),
          await Assets.load('assets/blinking-happy-red/blinking-happy_06.png')
     ],
     5: [
          await Assets.load('assets/blinking-smile-violet/blinking-smile_00.png'),
          await Assets.load('assets/blinking-smile-violet/blinking-smile_01.png'),
          await Assets.load('assets/blinking-smile-violet/blinking-smile_02.png'),
          await Assets.load('assets/blinking-smile-violet/blinking-smile_03.png'),
          await Assets.load('assets/blinking-smile-violet/blinking-smile_04.png'),
          await Assets.load('assets/blinking-smile-violet/blinking-smile_05.png'),
          await Assets.load('assets/blinking-smile-violet/blinking-smile_06.png')
     ]
};

export const blinkingSmileViolet = [
     await Assets.load('assets/blinking-smile-violet/blinking-smile_00.png'),
     await Assets.load('assets/blinking-smile-violet/blinking-smile_01.png'),
     await Assets.load('assets/blinking-smile-violet/blinking-smile_02.png'),
     await Assets.load('assets/blinking-smile-violet/blinking-smile_03.png'),
     await Assets.load('assets/blinking-smile-violet/blinking-smile_04.png'),
     await Assets.load('assets/blinking-smile-violet/blinking-smile_05.png'),
     await Assets.load('assets/blinking-smile-violet/blinking-smile_06.png')
];