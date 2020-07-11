import { Produto } from "../../model/produto";

export class LojaCarrinhoCompras {
    
    public produtos: Produto[] = [];

    public adicionar(produto: Produto) {
        //localstorage a informação fica até o usuário apagar do navegador
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (!produtoLocalStorage) {
            this.produtos.push(produto);
            localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));

        } else {
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos.push(produto);
            localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));

        }
    }

    public obterProdutos(): Produto[] {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage) {
            return JSON.parse(produtoLocalStorage);
        }
        return this.produtos; // testar se pode retornar new Produto[]
    }

    public removerProduto(produto: Produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage) {
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos = this.produtos.filter(p => p.id != produto.id);
            localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
        }
    }

    public atualizar(produtos: Produto[]) {
        localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos));
    }

    public temItensCarrinhoCompras(): boolean {
        var itens = this.obterProdutos();

        //if (itens) {
        //    return true;
        //} else {
        //    return false;
        //}

        return (itens.length > 0);
    }

    public limparCarrinhoCompras() {
        localStorage.setItem("produtoLocalStorage", "");
    }
}
