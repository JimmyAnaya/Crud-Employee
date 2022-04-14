import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  idEmployee: any;
  formEditEmployee: FormGroup;
  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    public form: FormBuilder
  ) {
    this.idEmployee = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.idEmployee);

    this.crudService.ObtenerEmpleado(this.idEmployee).subscribe((response) => {
      console.log(response);
      this.formEditEmployee.setValue({
        nombre: response[0]['nombre'],
        correo: response[0]['correo'],
      });
    });

    this.formEditEmployee = this.form.group({
      nombre: [''],
      correo: [''],
    });
  }

  ngOnInit(): void {}
}
