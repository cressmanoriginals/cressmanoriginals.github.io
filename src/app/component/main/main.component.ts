import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

interface Picture {
  image?: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  pictures: Picture[] = [];
//create a list for photos
//create a list to match etsy link to photo number in list
  //apple(2) search 1st index of links list for etsy link
//if a row has less pictures than the 3 rows add 
  //the new picture there
//create a way an overlay is attached to each pic automatically
  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.pictures = this.imageService.getAll();
    console.log(this.pictures);
  }

}
