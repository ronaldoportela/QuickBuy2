import { Component } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent {
    public usuario: Usuario;

    constructor(private router: Router) {
        this.usuario = new Usuario();
    }


    entrar(): void {
        console.log('chegou no entrar');
        if (this.usuario.email === 'ronaldo@teste.com' && this.usuario.senha === '123') {
            sessionStorage.setItem('usuario-autenticado', '1');
            this.router.navigate(['/']);
        }
    }

}
