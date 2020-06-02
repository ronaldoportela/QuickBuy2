import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    public usuario: Usuario;
    public returnUrl: string;

    constructor(
        private router: Router,
        private activedRoute: ActivatedRoute 
    ) {}

    ngOnInit(): void {
        this.returnUrl = this.activedRoute.snapshot.queryParams['returnUrl'];
        this.usuario = new Usuario();
    }


    entrar(): void {
        console.log('chegou no entrar');
        if (this.usuario.email === 'ronaldo@teste.com' && this.usuario.senha === '123') {
            sessionStorage.setItem('usuario-autenticado', '1');
            this.router.navigate([this.returnUrl]);
        }
    }

}
