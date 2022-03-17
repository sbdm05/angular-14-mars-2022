import { Directive, HostBinding, Input } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';

// décorateur
@Directive({
  selector: '[appState]'
})
export class StateDirective {

  @Input() appState!: StateOrder;
  @HostBinding('class') tdClassName!: string;

  constructor() {
    //console.log('directive')
    //console.log(this.test)
  }

  ngOnChanges(){
    console.log(this.appState)
    this.tdClassName = `state-${this.appState.toLowerCase()}`
  }


  ngOnInit(){
    // exécute une seule fois
    //console.log(this.test) // on obtient la valeur
  }


}
