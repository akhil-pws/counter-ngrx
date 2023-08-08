import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
// counter:number =0;
counter$!: Observable<{ counter: number }>;
constructor(private store:Store<{count:counterState}>){

}
  ngOnInit(): void {
  //  this.store.select('counter').subscribe((data)=>{
  //   this.counter =data.counter
  //  })

  this.counter$=this.store.select('count')
  }
}
