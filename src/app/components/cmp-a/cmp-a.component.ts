import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { log } from 'src/app/utils';
import { PracticeService } from './../../services/practice/practice.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.scss'],
})
export class CmpAComponent {
  form = new FormGroup({
    message: new FormControl(''),
  });

  constructor(private practiceService: PracticeService) {}

  onSubmit() {
    const data = this.form.controls['message'].value;
    if (!data) return;
    this.practiceService.sendMessageAsSubject(data);
  }
}
