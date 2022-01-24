import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza Quantity';
  count: number = 0;
  counter(num: string,type: String){


    this.count=parseInt(num);

    if (this.count > 0){
      type=='plus'?this.count++:this.count--
    }
    
    else{
      type=='plus'?this.count++:this.count=0
      
    } 
    
    
  }
  
}
