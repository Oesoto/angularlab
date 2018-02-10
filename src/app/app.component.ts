import { Component, OnInit } from '@angular/core';
//ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.
import {HttpClient} from '@angular/common/http';
//HttpClient es traido de HttpClientModule


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //Toda la lógica la defino dentro de esta clase
  title = 'Escribe un nombre y mira a que género pertenece y con que probabilidad';
  baseURL = 'https://api.genderize.io/?name=';
  respuestaAPI:any; //Puedo recibir cualquier tipo de datos
  //Variable conectada al input de la vista
  nombrePersona:String;

  //Inyectar la dependencia. Cada atributo en el constructor es una inyección de dependencia
  constructor (private http: HttpClient){

  }

  ngOnInit():void{
    console.log(this.respuestaAPI);
    // Make the HTTP request:
    // this.respuestaAPI = this.http.get('https://api.genderize.io/?name=peter');

    //Arrow function
    // this.http.get('https://api.genderize.io/?name=peter').subscribe((data)=> {
    //   this.respuestaAPI = data;
    //   console.log(this.respuestaAPI);
    // });
  }

  buscarPersona() {
    let URLCompleta = this.baseURL + this.nombrePersona;
    this.http.get(URLCompleta).subscribe((data) => {
      this.respuestaAPI = data;
      console.log(this.respuestaAPI);
    });
  } 

}

