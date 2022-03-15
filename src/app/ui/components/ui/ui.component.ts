import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

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
