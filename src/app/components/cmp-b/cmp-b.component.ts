import { PracticeService } from './../../services/practice/practice.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.scss'],
})
export class CmpBComponent {
  message$!: Observable<string>;
  behaviorSubject$!: Observable<string>;

  constructor(private practiceService: PracticeService) {}

  ngOnInit(): void {
    this.message$ = this.practiceService.message$;

    this.behaviorSubject$ = this.practiceService.messageBhv$;
  }
}
