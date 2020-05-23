using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy2.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy2.Repositorio.Config
{
    public class ItemPedidoConfiguration : IEntityTypeConfiguration<ItemPedido>
    {
        public void Configure(EntityTypeBuilder<ItemPedido> builder)
        {
            builder.HasKey(i => i.Id);

            builder
                .Property(i => i.ProdutoId)
                .IsRequired();

            builder
                .Property(i => i.Quantidade)
                .IsRequired();
        }
    }
}
