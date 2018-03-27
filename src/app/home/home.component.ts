import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnText: string = "Add Item";
  goalText = "";
  goals = [];
  error: string = "Cant type anymore";
  limit: string = "1234567891011121314153333333333333333333333"; //setting up the limit of the input

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    if(this.goalText != ""){
    this.goals.push(this.goalText); //So whatever text we type in, goes into the goals array
    this.goalText = '';
    this.itemCount = this.goals.length;
    }else{
      alert("Empty the field");
    }
  }



  alertRemoval(i){
    if(confirm("Are you sure you want to remove this activity?")){
      this.goals.splice(i,1);
      this.itemCount = this.goals.length;
    }
  }

}
