using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using QuickBuy2.Dominio.Entidades;
using QuickBuy2.Dominio.ObjetoDeValor;
using QuickBuy2.Repositorio.Config;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy2.Repositorio.Contexto
{
    public class QuickBuyContexto : DbContext
    {
        public DbSet<Usuario> usuarios { get; set; }
        public DbSet<Produto> produtos { get; set; }
        public DbSet<Pedido> pedidos { get; set; }
        public DbSet<ItemPedido> itensPedido { get; set; }
        public DbSet<FormaPagamento> formasPagamento { get; set; }

        public QuickBuyContexto(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());

            base.OnModelCreating(modelBuilder);
        }



    }
}
