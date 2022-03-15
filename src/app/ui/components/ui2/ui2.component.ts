import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.scss']
})
export class Ui2Component implements OnInit {

 public open : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  // créer une méthode pour alterner entre true/false
  public toggle(): void {
    this.open = !this.open
    console.log(this.open);
  }

}
