import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string  = 'Angular Crud';

  msg = '';

  empleados = [
    {nombre: 'Daniel', puesto: 'Desarrollador'},
    {nombre: 'Aguntin', puesto: 'Analista'},
    {nombre: 'Paula', puesto: 'Tester'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  agregarEmpleado():void{
    this.empleados.push(this.model);
    this.msg = 'campo agregado';
  }
  eliminarEmpleado(i):void{

  }
  myValue;
  editarEmpleado(i):void{
    this.hideUpdate = false;
    this.model2.nombre = this.empleados[i].nombre;
    this.model2.puesto = this.empleados[i].puesto;
    this.myValue = i;
  }
  actualizarEmpleado():void{
    let i = this.myValue;
    for(let j = 0; j < this.empleados.length; j++){
      if(i == j) {
        this.empleados[i] = this.model2;
        this.msg = 'campo actualizado';
        this.model2 = {};
      }
    }

  }

  closeAlert(){
    this.msg = '';
  }
}
