import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  form_employee: FormGroup;
  constructor(
    public form: FormBuilder,
    private crudService: CrudService,
    private router: Router
  ) {
    this.form_employee = this.form.group({
      nombre: [''],
      correo: [''],
    });
  }

  ngOnInit(): void {}
  sendData(): any {
    console.log('Me presionaste');
    console.log(this.form_employee.value);

    this.crudService.AgregarEmpleado(this.form_employee.value).subscribe();
    this.router.navigateByUrl('/list-employee');
  }
}
