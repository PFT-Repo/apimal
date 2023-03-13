import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catapi-card',
  templateUrl: './catapi-card.component.html',
  styleUrls: ['./catapi-card.component.scss']
})
export class CatapiCardComponent{
@Input() src:string = ''
constructor(){
  setTimeout(() => {
     this.setImg();
  }, 2000);
 
}
setImg(){
  let img = <HTMLImageElement> document.getElementById("cat-img")  
  img.src="https://cataas.com/"+this.src.slice(1);
  console.log(img.src);
  
}
}
