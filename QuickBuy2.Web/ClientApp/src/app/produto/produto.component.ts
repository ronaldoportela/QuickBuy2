import { Component } from '@angular/core';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html'
})

export class ProdutoComponent {


    public obterNome(): string {
        return "Produto-Component funcionando";
    }
}
