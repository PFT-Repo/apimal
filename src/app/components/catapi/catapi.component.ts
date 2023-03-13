import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catapi',
  templateUrl: './catapi.component.html',
  styleUrls: ['./catapi.component.scss']
})
export class CatapiComponent implements OnInit {
    images:any[] = []

ngOnInit(): void {
  for (let index = 0; index < 11; index++) {
    fetch("https://cataas.com/cat?limit=10&json=true")
    .then((response) => response.json())
    .then((data) => this.fillData(data.url));
  }
  
  }

  fillData(data:any){
    console.log(data);
    
    this.images.push(data);
  }
}
