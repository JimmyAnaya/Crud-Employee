import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  form_employee: FormGroup;
  constructor(public form: FormBuilder) {
    this.form_employee = this.form.group({
      nombre: [],
    });
  }

  ngOnInit(): void {}
  sendData(): any {
    console.log('Me presionaste');
  }
}
