import { Component, OnInit } from '@angular/core';
import { ProdutoServico } from '../../servicos/produto/produto.servico';
import { Produto } from '../../model/produto';

@Component({
    selector: "app-loja",
    templateUrl: './loja.pesquisa.component.html',
    styleUrls:['./loja.pesquisa.component.css']

})

export class LojaPesquisaComponent implements OnInit {
    public produtos: Produto[];

    constructor(private produtoSevico: ProdutoServico) {
        this.produtoSevico.obterTodos()
            .subscribe(
                produtos => {
                    this.produtos = produtos;
                },
                e => {
                    console.log(e.error);
                }
            )
    }

    ngOnInit(): void {
        
    }
}
