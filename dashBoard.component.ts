import {Component,OnInit} from '@angular/core';
import {LoggerService} from '../service/logger.service';

@Component({
selector:'app-dashBoard',
templateUrl:'./dashBoard.component.html'
})
export class DashBoardComponent implements OnInit {
    products=[];
    urltext:string;
    shouldShowselecteurl:boolean=false;
    
    constructor(){        
        console.log("this is constructor");
        this.products=[
            {name:"Iphone",price:"100000",url:"https://www.w3schools.com/images/picture.jpg"},
             {name:"Iphone1",price:"1000001",url:"https://www.w3schools.com/images/picture.jpg"},
             {name:"Iphone2",price:"1000002",url:"https://www.w3schools.com/images/picture.jpg"},
             {name:"Iphone3",price:"1000003",url:"https://www.w3schools.com/images/picture.jpg"}
          ];
          
    }
   ngOnInit(){
       console.log("This is ngOnInit");
   } 
    SelectProduct(name1:string){
        for(var num=0;num<=this.products.length;num++){
            if(this.products[num].name === name1){        
                this.urltext=this.products[num].url;        
                this.shouldShowselecteurl=true;
            }
        }       
    }
}

new DashBoardComponent();


