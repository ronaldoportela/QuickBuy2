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
    }

    public removerProduto(produto: Produto) {}
}
