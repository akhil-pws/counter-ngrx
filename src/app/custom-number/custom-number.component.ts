import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { customData } from '../state/counter.actions';

@Component({
  selector: 'app-custom-number',
  templateUrl: './custom-number.component.html',
  styleUrls: ['./custom-number.component.scss']
})
export class CustomNumberComponent {
  inputValue:number=0;
  constructor(private store :Store<{counter :counterState}>){

  }
  submit(){
    this.store.dispatch(customData({value :this.inputValue}))
  }
}
