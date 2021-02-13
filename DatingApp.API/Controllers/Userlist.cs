using System.Threading.Tasks;
using Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserlistController: ControllerBase
    {
         private readonly DataContext _context;
        public UserlistController(DataContext context)
        {
            _context=context;
        }

        
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var userlist= await _context.Users.ToListAsync();

            return Ok(userlist);
        }

    }
}