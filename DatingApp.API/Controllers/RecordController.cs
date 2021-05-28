using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Data;
using DatingApp.API.Models;

namespace DatingApp.API.Controllers
{
    [Route("record")]
    [ApiController]

    
    public class RecordController : ControllerBase
    {
    private readonly DataContext _context;
    public RecordController(DataContext context)
    {
        _context = context;

    }


        [HttpPost]
        public async Task<IActionResult> AddRecord(Record record)
        {
            await _context.Records.AddAsync(record);
            await _context.SaveChangesAsync();
            return Ok("success");
        }
    }
}