import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {

  @Input() public init!: Order
  // 1 - Déclaration de la prop de type FormGroup
  public form!: FormGroup

  public states = Object.values(StateOrder);

  // injecter le service FormBuilder
  constructor(
    private fb : FormBuilder
  ) {
    console.log(this.init);
  }

  ngOnInit(): void {
    console.log(this.init);
    // ici vous allez obtenir un objet complet avec .value
    // autant les faire matcher avec votre objet en bdd
    this.form = this.fb.group({
      tjmHt : [this.init.tjmHt],
      nbJours : [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      comment: [this.init.comment],
      id: [this.init.id],
    })
  }


  // ici déclarer onSubmit()
  // afficher l'objet dans la console.
  onSubmit(){
    console.log(this.form.value)
  }

}
