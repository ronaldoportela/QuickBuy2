import { Component, OnInit } from '@angular/core';
import { ProdutoServico } from '../../servicos/produto/produto.servico';
import { Produto } from '../../model/produto';
import { Router } from '@angular/router';

@Component({
    selector: "app-loja",
    templateUrl: './loja.pesquisa.component.html',
    styleUrls:['./loja.pesquisa.component.css']

})

export class LojaPesquisaComponent implements OnInit {
    public produtos: Produto[];

    constructor(
        private produtoSevico: ProdutoServico,
        private router: Router
    ) {
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

    public abrirProduto(produto: Produto) {
        sessionStorage.setItem("produtoDetalhe", JSON.stringify(produto));
        this.router.navigate(['/loja-produto']);
    }

}
