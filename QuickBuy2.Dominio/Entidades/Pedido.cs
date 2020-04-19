using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy2.Dominio.Entidades
{
    public class Pedido
    {
        public int Id { get; set; }
        public DateTime DataPedido { get; set; }
        public int UsuarioId { get; set; }

        /// <summary>
        /// o pedido deve ter pelo menos 1 itemPedido
        /// ou vários itensPedidos
        /// </summary>
        public ICollection<ItemPedido> ItensPedidos { get; set; }

    }
}
