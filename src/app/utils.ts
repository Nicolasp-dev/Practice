import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export const log = (data: any) => {
  console.log(data);
};

@Injectable()
export abstract class Unsub implements OnDestroy {
  unsubscribe$ = new Subject<void>();

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
