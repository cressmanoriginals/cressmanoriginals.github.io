import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
//compress photos larger than 1000
  IMAGES = [
    { image: "./assets/paintings/apple.jpg" },
    { image: "./assets/paintings/aztec.jpg" },
    { image: "./assets/paintings/beachball.jpg" },
    { image: "./assets/paintings/blue_wave.jpg" },
    { image: "./assets/paintings/butterfly.jpg" },
    { image: "./assets/paintings/cancer.jpg" },
    { image: "./assets/paintings/cheese.jpg" },
    { image: "./assets/paintings/coffee.jpg" },
    { image: "./assets/paintings/crab_on_beach.jpg" },
    { image: "./assets/paintings/dragonfly.jpg" },
    { image: "./assets/paintings/empty_vessel.jpg" },
    { image: "./assets/paintings/face.jpg" },
    { image: "./assets/paintings/fireworks.jpg" },
    { image: "./assets/paintings/flowers.jpg" },
    { image: "./assets/paintings/germs.jpg" },
    { image: "./assets/paintings/green_apple.jpg" },
    { image: "./assets/paintings/humming_bird.jpg" },
    { image: "./assets/paintings/icicles.jpg" },
    { image: "./assets/paintings/ladybug.jpg" },
    { image: "./assets/paintings/leaf_fossil.jpg" },
    { image: "./assets/paintings/lion.jpg" },
    { image: "./assets/paintings/orange.jpg" },
    { image: "./assets/paintings/orange_swirl.jpg" },
    { image: "./assets/paintings/pumpkin.jpg" },
    { image: "./assets/paintings/purple_dream.jpg" },
    { image: "./assets/paintings/rain_rocks.jpg" },
    { image: "./assets/paintings/red_apple.jpg" },
    { image: "./assets/paintings/sad_note.jpg" },
    { image: "./assets/paintings/seashells.jpg" },
    { image: "./assets/paintings/starfish.jpg" },
    { image: "./assets/paintings/sun.jpg" },
    { image: "./assets/paintings/sunset.jpg" },
    { image: "./assets/paintings/window.jpg" },
  ]
  constructor() { }

  getAll(): any {
    return this.IMAGES;
  }
}
