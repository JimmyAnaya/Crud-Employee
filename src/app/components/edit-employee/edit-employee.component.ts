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
  formEditEmployee: FormGroup;
  idEmployee: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    public formulario: FormBuilder
  ) {
    this.idEmployee = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.idEmployee);

    this.crudService.ObtenerEmpleado(this.idEmployee).subscribe((res) => {
      console.log(res);
      this.formEditEmployee.setValue({
        nombre: 'hola',
        correo: '1@gmail',
      });
    });

    this.formEditEmployee = this.formulario.group({
      nombre: [''],
      correo: [''],
    });
  }

  ngOnInit(): void {}

  enviarDatos(): any {
    console.log(this.idEmployee);
    console.log(this.formEditEmployee.value);
  }
}
