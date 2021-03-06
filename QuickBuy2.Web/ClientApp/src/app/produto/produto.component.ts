import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutoServico } from '../servicos/produto/produto.servico';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls:['./produto.component.css']
})

export class ProdutoComponent implements OnInit, OnDestroy {
   
    public produto: Produto;
    public arquivoSelecionado: File;
    public ativar_spinner: boolean;
    public mensagem: string;

    constructor(
        private produtoServico: ProdutoServico,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        var produtoSession = sessionStorage.getItem("produtoSession");
        if (produtoSession) {
            this.produto = JSON.parse(produtoSession);
        }
        else {
            this.produto = new Produto();

        }

    }

    public Cadastrar() {
        this.ativarEspera();
        this.produtoServico.cadastrar(this.produto)
            .subscribe(
                produtoJson => {
                    console.log(produtoJson);
                    this.desativarEspera();
                    this.router.navigate(['/pesquisar-produto']);
                },
                e => {
                    console.log(e.error);
                    this.desativarEspera();
                    this.mensagem = e.error;
                }
            );
    }

    public enviarArquivo(files: FileList) {
        this.arquivoSelecionado = files.item(0);
        this.ativar_spinner = true;
        //alert(this.arquivoSelecionado.name);
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.nomeArquivo = nomeArquivo;
                    console.log(nomeArquivo);
                    this.ativar_spinner = false;
                },
                e => {
                    console.log(e.error);
                    this.ativar_spinner = false;

                });
    }


    public ativarEspera() {
        this.ativar_spinner = true;
    }
    public desativarEspera() {
        this.ativar_spinner = false;
    }

    ngOnDestroy(): void {
        //limpa a session produtoSession caso ela esteja preenchida
        sessionStorage.setItem("produtoSession", "");
    }
    
}
