import { CinematicSystem } from '../systems/CinematicSystem.js';
export class BootScene extends Phaser.Scene{constructor(){super('BootScene');}create(){CinematicSystem.fadeIn(this);this.scene.start('MainMenuScene');}}
