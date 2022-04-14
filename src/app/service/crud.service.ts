import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  API: string = 'http://localhost/api/employee/';

  constructor(private client_http: HttpClient) {}

  AgregarEmpleado(dataEmployee: Employee): Observable<any> {
    return this.client_http.post(this.API, dataEmployee);
  }

  ObtenerListaEmpleado() {
    return this.client_http.get(this.API);
  }

  BorrarEmpleado(id: any): Observable<any> {
    return this.client_http.delete(this.API + id);
  }

  ObtenerEmpleado(id: any): Observable<any> {
    return this.client_http.get(this.API + id + '/edit');
  }
}
