import { Component } from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  interval,
  take,
  takeUntil,
  takeWhile,
} from 'rxjs';
import { User } from 'src/app/models/user.model';
import { JsonPlaceholderService } from 'src/app/services/practice/json-placeholder.service';
import { Unsub, log } from 'src/app/utils';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent extends Unsub {
  users$!: Observable<User[]>;
  users!: User[];
  usersSub!: Subscription;
  dataSubscription: Subscription | undefined;

  data$ = interval(1000);
  take$ = interval(1000);
  takeWhile$ = interval(1000);
  takeUntil$ = interval(1000);

  constructor(private jsonPlaceholder: JsonPlaceholderService) {
    super();
  }

  ngOnInit(): void {
    this.usersSub = this.jsonPlaceholder.classicPattern().subscribe({
      next: (users) => {
        this.users = users;
      },
    });

    this.dataSubscription = this.data$.subscribe((data) =>
      console.log('subscription', data)
    );
    this.take$.pipe(take(1)).subscribe((data) => console.log('take', data));
    this.takeWhile$
      .pipe(takeWhile((val) => val <= 5))
      .subscribe((data) => console.log('takeWhile', data));

    this.takeUntil$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => console.log('takeUntil', data));
  }

  onUnsubscribe() {
    this.usersSub.unsubscribe();
  }

  override ngOnDestroy() {
    this.dataSubscription?.unsubscribe();

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
