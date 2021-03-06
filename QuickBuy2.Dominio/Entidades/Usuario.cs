﻿using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy2.Dominio.Entidades
{
   public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }

        public bool EhAdministrador { get; set; }

        /// <summary>
        /// usuário pode ter nemhum ou muitos pedidos
        /// </summary>
        public virtual ICollection<Pedido> Pedidos { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Email))
                AdicionarCritica("Crítica : Email não foi informado");

            if (string.IsNullOrEmpty(Senha))
                AdicionarCritica("Crítica : Senha não foi informada");


        }
    }
}
