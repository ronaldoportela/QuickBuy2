using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy2.Dominio.Contratos;
using QuickBuy2.Dominio.Entidades;

namespace QuickBuy2.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRespositorio _produtoRespositorio;

        public ProdutoController(IProdutoRespositorio produtoRespositorio)
        {
            _produtoRespositorio = produtoRespositorio;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
               return Ok(_produtoRespositorio.ObterTodos());
            }
            catch (Exception ex)
            {
               return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Produto produto)
        {
            try
            {
                _produtoRespositorio.Adicionar(produto);
                return Ok(produto);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

    }
}