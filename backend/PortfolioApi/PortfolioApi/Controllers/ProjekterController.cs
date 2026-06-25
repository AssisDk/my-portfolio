using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;
using PortfolioApi.Models;

namespace PortfolioApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProjekterController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProjekterController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Projekt>>> GetProjekter()
    {
        return await _context.Projekter.ToListAsync();
    }
}