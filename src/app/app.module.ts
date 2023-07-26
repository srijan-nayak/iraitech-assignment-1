import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SeriesElementFinderComponent } from './series-element-finder/series-element-finder.component';

@NgModule({
  declarations: [AppComponent, SeriesElementFinderComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
