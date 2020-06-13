import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../model/produto";

@Injectable({
    providedIn: 'root'
})

export class ProdutoServico implements OnInit {


    private _baseUrl: string;
    public produtos: Produto[];

    get header(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json');
    }

    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') baseUrl: string
    ) {
        this._baseUrl = baseUrl;
    }

    ngOnInit(): void {
        this.produtos = [];
    }

    public cadastrar(produto: Produto): Observable<Produto> {

       return this.http.post<Produto>(this._baseUrl + 'api/produto/cadastrar', JSON.stringify(produto), { headers: this.header });
    }

    public salvar(produto: Produto): Observable<Produto> {

        return this.http.post<Produto>(this._baseUrl + 'api/produto/salvar', JSON.stringify(produto), { headers: this.header });
    }

    public deletar(produto: Produto): Observable<Produto> {

        return this.http.post<Produto>(this._baseUrl + 'api/produto/deletar', JSON.stringify(produto), { headers: this.header });
    }

    public obterTodos(): Observable<Produto[]> {

        return this.http.get<Produto[]>(this._baseUrl + 'api/produto/');
    }

    public obterProduto(produtoId: number): Observable<Produto> {

        return this.http.get<Produto>(this._baseUrl + 'api/produto/');
    }

    public enviarArquivo(arquivoSelecionado: File): Observable<string>{
        const formData: FormData = new FormData();
        formData.append("arquivoEnviado", arquivoSelecionado, arquivoSelecionado.name);

        return this.http.post<string>(this._baseUrl + 'api/produto/enviarArquivo', formData);
    }

}

