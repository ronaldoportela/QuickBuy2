using Microsoft.AspNetCore.Mvc;
using QuickBuy2.Dominio.Contratos;
using QuickBuy2.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy2.Web.Controllers
{
    public class PedidoController : Controller
    {
        private readonly IPedidoRepositorio _pedidoRepositorio;

        public PedidoController(IPedidoRepositorio pedidoRepositorio) {
            this._pedidoRepositorio = pedidoRepositorio;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Pedido pedido)
        {
            try
            {
                _pedidoRepositorio.Adicionar(pedido);
                return Ok(pedido.Id);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }

    }
}
