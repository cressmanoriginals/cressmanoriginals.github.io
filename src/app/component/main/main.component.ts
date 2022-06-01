import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

interface Picture {
  image: string;
  alText: string;
  price: number;
  site: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  pictures: Picture[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.pictures = this.imageService.getAll();
  }
//counts list of images and divides into three even columns
  firstAmount() {
    var num = Math.floor(this.pictures.length/ 3);
    this.secondAmount(num);
    return Number(num);
  }

  secondAmount(num: any) {
    num = num * 2;
    return Number(num);
  }

  

}
