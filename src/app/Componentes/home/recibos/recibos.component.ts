import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recibos',
  templateUrl: './recibos.component.html',
  styleUrls: ['./recibos.component.css']
})
export class RecibosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


  }

  guardar(): void{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingrese los Datos Correctamente!',
    });
  }

}
