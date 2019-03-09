import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  selectedRadioButtonValue:string = "All";

  @Input()
  All:number;

  @Input()
  Male:number;

  @Input()
  Female:number;


  @Output()
  onRadioButtonChange:EventEmitter<string> = new EventEmitter<string>();


  
  constructor() { }

  ngOnInit() {
  }

  callRadioButtonChange()
  {
    this.onRadioButtonChange.emit(this.selectedRadioButtonValue)
  }

}
