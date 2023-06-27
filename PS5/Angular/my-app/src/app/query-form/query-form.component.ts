import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css'],
})
export class QueryFormComponent {
  formGroup: FormGroup;
  @Output() newQuery = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      query: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  submit() {
    if (this.formGroup.valid) {
      this.newQuery.emit(this.formGroup.value.query);
    }
  }
}
