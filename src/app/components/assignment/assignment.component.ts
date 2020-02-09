import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  details: string = "Password is tuna";
  isClicked: boolean = false;
  clicks = [];
  counter: number = 0; 

  constructor() { }

  ngOnInit() {
  }

  showDetails() {
    this.isClicked= !this.isClicked;
    this.counter = this.counter + 1; 
    this.clicks.push(this.counter);
    return this.details;
  }

}
