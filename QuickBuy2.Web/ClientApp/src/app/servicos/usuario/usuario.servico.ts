import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../model/usuario";


@Injectable({
    providedIn: "root"
})
export class UsuarioServico {

    private baseUrl: string;
    constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public verificarUsuario(usuario: Usuario): Observable<Usuario> {
        const headers = new HttpHeaders().set('content-type', 'application/json');

        var body = {
            email: usuario.email,
            senha: usuario.senha
        }

        return this.http.post<Usuario>(this.baseUrl + 'api/usuario/VerificarUsuario', body, { headers });

    }

}
