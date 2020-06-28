using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy2.Repositorio.Migrations
{
    public partial class AdicionarColunaAdminUsuario : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "EhAdministrador",
                table: "usuarios",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EhAdministrador",
                table: "usuarios");
        }
    }
}
