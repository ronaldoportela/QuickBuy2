using QuickBuy2.Dominio.Contratos;
using QuickBuy2.Dominio.Entidades;
using QuickBuy2.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy2.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickBuyContexto contexto) : base(contexto)
        {
        }

        public Usuario Obter(string email, string senha)
        {
            return QuickBuyContexto.usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }

        public Usuario Obter(string email)
        {
            return QuickBuyContexto.usuarios.FirstOrDefault(u => u.Email == email);
        }
    }
}
