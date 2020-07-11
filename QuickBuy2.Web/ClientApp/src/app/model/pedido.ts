import { ItemPedido } from "./ItemPedido";

export class Pedido {

    public id: number;
    public dataPedito: Date;
    public usuarioId: number;
    public dataPrevisaoEntrega: Date;
    public cep: string;
    public estado: string;
    public cidade: string;
    public enderecoCompleto: string;
    public numeroEndereco: string;
    public formaPagamentoId: number;

    public itensPedido: ItemPedido[];

    constructor() {
        this.dataPedito = new Date();
        this.itensPedido = [];

    }
}
