using QuickBuy2.Dominio.Contratos;
using QuickBuy2.Dominio.Entidades;
using QuickBuy2.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy2.Repositorio.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(QuickBuyContexto contexto) : base(contexto)
        {
        }
    }
}
