import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
//compress photos larger than 1000
  IMAGES = [
    { image: "./assets/paintings/purple_dream.jpg", alText: "Purple Flower", price:50.00,
    site: "https://www.etsy.com/listing/1097539761/purple-flower-spotted-flower-big-plant?click_key=f66821cbd1c69e47046d584d74b5ab6aec18fb80%3A1097539761&click_sum=8c7b05f7&ref=shop_home_active_2&frs=1" },
    { image: "./assets/paintings/boho_leaf.jpg", alText: "Leaf Fossil", price:40,
      site: "https://www.etsy.com/listing/1097740051/leaf-fossil-boho-style-abstract-forest?click_key=5bf37b7dac858a2c65c0602d726fec093e70a2c4%3A1097740051&click_sum=4fa6f44e&ref=shop_home_active_3&frs=1" },
    { image: "./assets/paintings/cheese.jpg", alText: "Cheese Plant", price:45,
      site: "https://www.etsy.com/listing/1086460936/big-plant-succulent-swiss-cheese-forest?click_key=01bae5531495af46299356aeb111aae12490c181%3A1086460936&click_sum=69d869b0&ref=shop_home_active_4&frs=1" },
    { image: "./assets/paintings/ladybug.jpg", alText: "Lady Bug", price:45,
      site: "https://www.etsy.com/listing/1083799314/ladybug-on-a-leaf-in-meadow-abstract?click_key=0473c4e56b06862357cf6eefff122d76ff6d135a%3A1083799314&click_sum=9e0c12f0&ref=shop_home_active_5&frs=1" },
    { image: "./assets/paintings/beachball.jpg", alText: "Beach Ball", price:40,
      site: "https://www.etsy.com/listing/1024282714/beachball-in-the-sand-on-the-beach-wall?click_key=62a4a2d6dd149100fea7dccd2caf2144a87925ad%3A1024282714&click_sum=5375c40b&ref=shop_home_active_6&frs=1" },
    { image: "./assets/paintings/pumpkin.jpg", alText: "Pumpkin", price:45,
      site: "https://www.etsy.com/listing/1100394755/pumpkin-patch-halloween-fall-autumn?click_key=23cb0f9ce4e75a127bf943e1dfe81df98cf0419d%3A1100394755&click_sum=d0049942&ref=shop_home_active_7&frs=1" },
    { image: "./assets/paintings/sad_note.jpg", alText: "Sad Note", price:45, 
      site: "https://www.etsy.com/listing/1083817714/emo-note-crying-rain-monotone-abstract?click_key=0a39e2cb9bb64d36502c38710725925edccb82dd%3A1083817714&click_sum=2f3817c3&ref=shop_home_active_8&frs=1" },
    { image: "./assets/paintings/rain_rocks.jpg", alText: "Rain Rocks", price:45, 
      site: "https://www.etsy.com/listing/1097747909/rain-on-rocks-monotone-abstract-original?click_key=42a6026d723fc22db757eb510f8c24ab8935ec1e%3A1097747909&click_sum=b56ad820&ref=shop_home_active_9&frs=1" },
    { image: "./assets/paintings/seashells.jpg", alText: "Sea Shells", price:40, 
      site: "https://www.etsy.com/listing/1017867844/seashells-ocean-wall-art-abstract?click_key=ede8ef5c4ca5c60a81154e9dc405cce712124bba%3A1017867844&click_sum=c30b2d7c&ref=shop_home_active_10&frs=1" },
    { image: "./assets/paintings/orange.jpg", alText: "Orange", price:40, 
      site: "https://www.etsy.com/listing/1083811992/orange-slice-close-up-with-seed-abstract?click_key=d99aa114cc7c8e23b719d4d3824ceb306b69415a%3A1083811992&click_sum=7abef239&ref=shop_home_active_11&frs=1" },
    { image: "./assets/paintings/sun.jpg", alText: "Sun Ray", price:40,
      site: "https://www.etsy.com/listing/1083809808/sun-rays-shining-abstract-original?click_key=0478855ca16fa63469a8938b7515c5654d353ed5%3A1083809808&click_sum=c047a8bd&ref=shop_home_active_12&frs=1" },
    { image: "./assets/paintings/boho_sunset.jpg", alText: "Boho Sunset", price:40, 
      site: "https://www.etsy.com/listing/1083805122/sun-over-hills-boho-style-abstract?click_key=485c209a728c647c2691e88cad6e3ac161804fb0%3A1083805122&click_sum=1a0e7107&ref=shop_home_active_13&frs=1" },
    { image: "./assets/paintings/red_apple.jpg", alText: "Candy Apple", price:35,
      site: "https://www.etsy.com/listing/449345344/apple-halloween-apple-apple-fall-dipped?click_key=c6d3ee5437334a7bb4ebacd54754fc4c36ade998%3A449345344&click_sum=5e9587e4&ref=shop_home_active_14&frs=1" },
    { image: "./assets/paintings/green_apple.jpg", alText: "Green Apple", price:35,
      site: "https://www.etsy.com/listing/462825563/caramel-dipped-apple-candy-apple?click_key=31c2927ec7febf297ae9e2f3e2d834a8df343b01%3A462825563&click_sum=b1d1abbd&ref=shop_home_active_15&frs=1" },
    { image: "./assets/paintings/beach_crab.jpg", alText: "Beach Crab", price:45,
      site: "https://www.etsy.com/listing/603264389/crab-on-a-beach-abstract-painting-wall?click_key=524778cee650d2a6ee1d4d5eead896cca9b08d06%3A603264389&click_sum=064d7ff9&ref=shop_home_active_16&frs=1" },
    { image: "./assets/paintings/lion.jpg", alText: "Lion", price:40,
      site: "https://www.etsy.com/listing/1058868571/leo-zodiac-painting-abstract-lion?click_key=6e6774ef57013d8eab886a26b027d1a4b997c26d%3A1058868571&click_sum=bded73d3&ref=shop_home_active_17&frs=1" },
    { image: "./assets/paintings/fireworks.jpg", alText: "Fireworks", price:45,
      site: "https://www.etsy.com/listing/1044908066/fireworks-in-the-night-sky-abstract?click_key=feb59c056051a491169a7a9f7923f9072a0b8e16%3A1044908066&click_sum=d1b10ace&ref=shop_home_active_18&frs=1" },
    { image: "./assets/paintings/starfish.jpg", alText: "Star Fish", price:40,
      site: "https://www.etsy.com/listing/1022757776/starfish-in-the-ocean-wall-art-canvas?click_key=083f66023b3495cdd3fa9a3c123e0197c01655f0%3A1022757776&click_sum=4cbbe7d6&ref=shop_home_active_19&frs=1" },
    { image: "./assets/paintings/cancer.jpg", alText: "Cancer", price:40,
      site: "https://www.etsy.com/listing/1058856321/cancer-zodiac-sign-crab-sign-abstract?click_key=73ef9115e7a0a848e03a9e29c5ab950c4d169542%3A1058856321&click_sum=687c76c9&ref=shop_home_active_20&frs=1" },
    { image: "./assets/paintings/orange_swirl.jpg", alText: "Orange Swirl", price:45,
      site: "https://www.etsy.com/listing/599628718/orange-swirl-abstract-painting-wall-art?click_key=6c3e89fcba0bce7bc2a87258a6085699f9cb098d%3A599628718&click_sum=7a3e634f&ref=shop_home_active_21&frs=1" },
    { image: "./assets/paintings/empty_vessel.jpg", alText: "Pouring Water", price:45,
      site: "https://www.etsy.com/listing/469264522/pouring-water-calming-modern-art?click_key=8a1bc00652a57d507de44eadbf918f2f57eb58bc%3A469264522&click_sum=cb518e5f&ref=shop_home_active_22&frs=1" },
    { image: "./assets/paintings/dock.jpg", alText: "Boat Dock", price:40,
      site: "https://www.etsy.com/listing/1097727171/boat-in-ocean-with-dock-abstract?click_key=5d4d90982ad25d8bcc9cc6eb009f86ee100391e9%3A1097727171&click_sum=17e82296&ref=shop_home_active_23&frs=1" },
    { image: "./assets/paintings/humming_bird.jpg", alText: "Hummingbird", price:30,
      site: "https://www.etsy.com/listing/1097724955/small-hummingbird-with-flowers-abstract?click_key=5cfe17882d825c8c73364b735e343b4a8524957e%3A1097724955&click_sum=8e2dffdc&ref=shop_home_active_24" },
    { image: "./assets/paintings/window.jpg", alText: "Window", price:45,
      site: "https://www.etsy.com/listing/1097590295/window-outside-view-abstract-original?click_key=e45a2f3547675753a0964edf7f09a794d691f044%3A1097590295&click_sum=9d811b76&ref=shop_home_active_25&frs=1" },
    { image: "./assets/paintings/coffee.jpg", alText: "Coffee", price:35,
      site: "https://www.etsy.com/listing/1083648736/coffee-pouring-creamer-morning-abstract?click_key=3d043601328b82bb50057087680b8797d49f374d%3A1083648736&click_sum=bf6f0f22&ref=shop_home_active_26&frs=1" },
    { image: "./assets/paintings/butterfly.jpg", alText: "Butterfly", price:45,
      site: "https://www.etsy.com/listing/1097549183/butterfly-flying-abstract-original?click_key=1a87196b97d5929383f3e884c46c662570478c6a%3A1097549183&click_sum=4d28269c&ref=shop_home_active_27&frs=1" },
    { image: "./assets/paintings/face.jpg", alText: "Curly Face", price:45,
      site: "https://www.etsy.com/listing/734583553/curly-hair-woman-shoulder-and-neck?click_key=a91e4740f1fb413b69a6e8dd968f45b2aabfef94%3A734583553&click_sum=6089be5a&ref=shop_home_active_28&frs=1" },
    { image: "./assets/paintings/blue_wave.jpg", alText: "Blue Wave", price:45,
      site: "https://www.etsy.com/listing/567249875/winter-in-paint-abstract-original?click_key=b877bb095def6b53395af40489fe3565de3bebab%3A567249875&click_sum=b5148715&ref=shop_home_active_29&frs=1" },
    { image: "./assets/paintings/icicles.jpg", alText: "Icicles", price:45,
      site: "https://www.etsy.com/listing/567249635/icicles-dripping-down-abstract-original?click_key=6bab6817e832bbc75eef8fb3f90fd0f333c44ad5%3A567249635&click_sum=6481ffe5&ref=shop_home_active_30&frs=1" },
    { image: "./assets/paintings/aztec.jpg", alText: "Aztec", price:35,
      site: "https://www.etsy.com/listing/583582212/aztec-symbols-ancient-abstract-painting?click_key=aa3f16426fa80c01e137769750f6c1862211b98b%3A583582212&click_sum=18a7b85c&ref=shop_home_active_31&frs=1" },
    { image: "./assets/paintings/purple_rocks.jpg", alText: "Purple Rocks", price:50,
      site: "https://www.etsy.com/listing/567718085/purple-colored-pebbles-abstract-original?click_key=dd59157a6b16459486b6ccd9f3cb2e8c3c1dca2e%3A567718085&click_sum=8c932583&ref=shop_home_active_32&frs=1" },
    { image: "./assets/paintings/green_rocks.jpg", alText: "Green Rocks", price:35,
      site: "https://www.etsy.com/listing/545233441/colorful-rocks-abstract-original?click_key=7d33af430832418f7b26c02dd682e2ca158a7812%3A545233441&click_sum=c879fc94&ref=shop_home_active_33&frs=1" },
    { image: "./assets/paintings/purple_flowers.jpg", alText: "Purple Flowers", price:45,
      site: "https://www.etsy.com/listing/465888387/purple-flowers-abstract-original?click_key=f58528324fe3e49de2e7ef3ce4f757716733036d%3A465888387&click_sum=4aa10b8e&ref=shop_home_active_34&frs=1" },
    { image: "./assets/paintings/flowers.jpg", alText: "Flowers", price:35,
      site: "https://www.etsy.com/listing/462823183/flowers-falling-pattern-painting-modern?click_key=4698674451cef1974b507cf9f9517ebd3d0649d6%3A462823183&click_sum=509d6fff&ref=shop_home_active_35&frs=1" },
    { image: "./assets/paintings/apple.jpg", alText: "Apple", price: 45.00,
      site: "https://www.etsy.com/listing/464276976/apple-teacher-new-york-city-modern-art?click_key=e2574286d99e60b9bace56ca8bbc78b84ca847e4%3A464276976&click_sum=6da8ab90&ref=shop_home_active_39&frs=1"},
    { image: "./assets/paintings/cami.jpg", alText: "Camouflage", price:50,
      site: "https://www.etsy.com/listing/449345838/camouflage-fall-foliage-modern-art?click_key=4ec93102cd3f0242b9046f62ea08f6db7bac7c8d%3A449345838&click_sum=db010949&ref=shop_home_active_37&frs=1" },

    
  ]
  
  constructor() { }

  getAll(): any {
    return this.IMAGES;
  }

  listLen(): any {
    return this.IMAGES.length;
  }
}
