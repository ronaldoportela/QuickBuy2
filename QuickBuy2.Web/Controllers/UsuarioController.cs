using Microsoft.AspNetCore.Mvc;
using QuickBuy2.Dominio.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy2.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        [HttpPost]
        public ActionResult Post()
        {
            try
            {

                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }


        [HttpPost("VerificarUsuario")]
        public ActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                if(usuario.Email == "ronaldo@teste.com" &&  usuario.Senha == "123")
                {
                    usuario.Id = 1;
                    return Ok(usuario);

                }
                return BadRequest("Usuário ou senha inválido");

            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }


    }
}
