using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy2.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Crítica : Não foi informado o nome do produto");

            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("Crítica : Não foi informado a descrição do produto");

        }
    }
}
