import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  atIndex(index: number): number {
    if (index <= 0) {
      return 0;
    } else if (index == 1) {
      return 2;
    } else if (index % 2 == 0) {
      return index ** 2 - 1;
    } else {
      return index ** 2 + 1;
    }
  }
}
