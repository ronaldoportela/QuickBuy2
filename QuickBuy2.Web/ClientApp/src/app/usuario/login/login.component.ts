import { Component } from '@angular/core';
import { Usuario } from '../../model/usuario';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent {
    public usuario: Usuario;

    constructor() {
        this.usuario = new Usuario();
    }


    entrar(): void {
        alert('clicou no botão');
    }

}
