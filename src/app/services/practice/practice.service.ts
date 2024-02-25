import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PracticeService {
  private messageSubject = new Subject<string>();
  message$ = this.messageSubject.asObservable();

  private messageBehavior = new BehaviorSubject<string>('First Value');
  messageBhv$ = this.messageBehavior.asObservable();

  sendMessageAsSubject(message: string) {
    this.messageSubject.next(message);
    this.messageBehavior.next(message);
  }
}
