import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { OutputComponent } from './output/output.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { CustomNumberComponent } from './custom-number/custom-number.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsComponent,
    OutputComponent,
    CustomNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({count :counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
