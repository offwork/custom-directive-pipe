import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TextHighlightDirective } from './custom-directives/attribute-directive/text-highlight.directive';

import { CustomForDirective } from './custom-directives/structural-directive/custom-structural.directive';

import { OrderByPipe } from './custom-pipes/order-by.pipe';

@NgModule({
  declarations: [
    CustomForDirective,
    TextHighlightDirective,
    OrderByPipe,
    AppComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
