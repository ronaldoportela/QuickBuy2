﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
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
        //configurado no startup.cs
        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _hostingEnvironment;

        public ProdutoController(
            IProdutoRespositorio produtoRespositorio,
            IHttpContextAccessor httpContextAccessor,
            IHostingEnvironment hostingEnvironment

            )
        {
            _produtoRespositorio = produtoRespositorio;
            _httpContextAccessor = httpContextAccessor;
            _hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
               return Json(_produtoRespositorio.ObterTodos());
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
                produto.Validate();
                if (!produto.EhValido)
                {
                    return BadRequest(produto.ObterMensagensValidacao());
                }

                if (produto.Id > 0)
                {
                    _produtoRespositorio.Atualizar(produto);
                }
                else
                {
                    _produtoRespositorio.Adicionar(produto);

                }
                //tava  151 aos 7:20
                //return ("api/produto", produto);
                return Ok(produto);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
        
        [HttpPost("Deletar")]
        public IActionResult Deletar([FromBody] Produto produto) 
        {
            try
            {
                _produtoRespositorio.Remover(produto);
                return Json(_produtoRespositorio.ObterTodos());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("EnviarArquivo")]
        public IActionResult EnviarArquivo()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
                var nomeArquivo = formFile.FileName;
                var extensao = nomeArquivo.Split(".").Last();
                string novoNomeArquivo = GerarNovoNomeArquivo(nomeArquivo, extensao);

                var pastaArquivos = _hostingEnvironment.WebRootPath + "\\arquivos\\";
                var nomeCompleto = pastaArquivos + novoNomeArquivo;

                using (var streamArquivo = new FileStream(nomeCompleto, FileMode.Create))
                {
                    formFile.CopyTo(streamArquivo);
                }

                return Json(novoNomeArquivo);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }

        private static string GerarNovoNomeArquivo(string nomeArquivo, string extensao)
        {
            var arrayNomeCompacto = Path.GetFileNameWithoutExtension(nomeArquivo).Take(10).ToArray();
            var novoNomeArquivo = new string(arrayNomeCompacto).Replace(" ", "-");

            novoNomeArquivo = $"{novoNomeArquivo}_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}{DateTime.Now.Hour}{DateTime.Now.Minute}{DateTime.Now.Second}.{extensao}";
            return novoNomeArquivo;
        }
    }
}