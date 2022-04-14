import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  Employee: any;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.ObtenerListaEmpleado().subscribe((response) => {
      console.log(response);
      this.Employee = response;
    });
  }
  borrarRegistro(id: any, iControl: any) {
    console.log(id);
    if (window.confirm('¿Desea borrar el registro?')) {
      this.crudService.BorrarEmpleado(id).subscribe((response) => {
        this.Employee.splice(iControl, 1);
      });
    }
  }
}
