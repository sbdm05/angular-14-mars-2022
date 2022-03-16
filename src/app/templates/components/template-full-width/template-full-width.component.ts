import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {

  @Input() title!: string;

  constructor() {
    console.log(this.title, "dans le constructor")
  }

  ngOnChanges(){
    console.log(this.title, "dans ngOnChanges")
  }
  
  ngOnInit(): void {
    console.log(this.title, "dans le ngOnInit")
  }


}
