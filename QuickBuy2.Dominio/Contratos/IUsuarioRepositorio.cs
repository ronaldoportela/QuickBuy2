using QuickBuy2.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy2.Dominio.Contratos
{
    public interface IUsuarioRepositorio : IBaseRepositorio<Usuario>
    {
        Usuario Obter(string email, string senha);
    }
}
