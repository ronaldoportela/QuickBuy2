import { Component, OnInit } from '@angular/core';
import { ProdutoServico } from '../servicos/produto/produto.servico';
import { Produto } from '../model/produto';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls:['./produto.component.css']
})

export class ProdutoComponent implements OnInit {

    public produto: Produto;
    public arquivoSelecionado: File;
    public ativar_spinner: boolean;
    public mensagem: string;

    constructor(private produtoServico: ProdutoServico) {

    }

    ngOnInit(): void {
        this.produto = new Produto();
    }

    public Cadastrar() {
        this.ativarEspera();
        this.produtoServico.cadastrar(this.produto)
            .subscribe(
                produtoJson => {
                    console.log(produtoJson);
                    this.desativarEspera();
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
    
}
