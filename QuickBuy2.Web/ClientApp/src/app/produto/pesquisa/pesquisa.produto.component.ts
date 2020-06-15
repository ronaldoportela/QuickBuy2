import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import { ProdutoServico } from '../../servicos/produto/produto.servico';


@Component({
    selector: 'pesquisa-produto',
    templateUrl: './pesquisa.produto.component.html',
    styleUrls: ['./pesquisa.produto.component.css']
})


export class PesquisaProdutoComponent implements OnInit {

    public produtos: Produto[];

    ngOnInit(): void {
        
    }

    constructor(private produtoServico: ProdutoServico) {
        this.produtoServico.obterTodos()
            .subscribe(
                produtos => {
                    this.produtos = produtos;
                },
                e => {
                    console.log(e.error);
                }
            )
    }

}
