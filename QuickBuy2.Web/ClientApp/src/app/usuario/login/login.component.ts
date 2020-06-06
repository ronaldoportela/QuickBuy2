import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit {
    
    public usuario: Usuario;
    public returnUrl: string;
    public mensagem: string;

    constructor(
        private router: Router,
        private activedRoute: ActivatedRoute,
        private usuarioServico: UsuarioServico
    ) {}

    ngOnInit(): void {
        this.returnUrl = this.activedRoute.snapshot.queryParams['returnUrl'];
        this.usuario = new Usuario();
    }


    entrar(): void {
        console.log('chegou no entrar');
        //if (this.usuario.email === 'ronaldo@teste.com' && this.usuario.senha === '123') {
        //    sessionStorage.setItem('usuario-autenticado', '1');
        //    this.router.navigate([this.returnUrl]);
        //}

        this.usuarioServico.verificarUsuario(this.usuario)
            .subscribe(
                data => {
                    var usuarioRetorno: Usuario;
                    usuarioRetorno = data;
                    sessionStorage.setItem('usuario-autenticado', '1');
                    sessionStorage.setItem('email-usuario', usuarioRetorno.email);

                    if (this.returnUrl == null) {
                        this.router.navigate(['/']);
                    } else {
                        this.router.navigate([this.returnUrl]);

                    }

                },
                erro => {
                    this.mensagem = erro.error;
                }
            );
    }

}
