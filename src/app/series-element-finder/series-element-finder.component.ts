import { Component } from '@angular/core';

import { SeriesService } from './series.service';

@Component({
  selector: 'app-series-element-finder',
  templateUrl: './series-element-finder.component.html',
  styleUrls: ['./series-element-finder.component.css'],
})
export class SeriesElementFinderComponent {
  constructor (private series: SeriesService) {}

  index: number = 1;

  seriesValue?: number;

  calculate() {
    this.seriesValue = this.series.atIndex(this.index);
  }
}
