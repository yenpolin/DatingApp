using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ValuesController(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;

        }

        // GET api/values
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetValues()
        {
            var valueslist = await _context.Values.ToListAsync();

            return Ok(valueslist);
        }

        // GET api/values/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetValues(int id)
        {
            var thevalue = await _context.Values.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(thevalue);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post(Value value)
        {
            await _context.Values.AddAsync(value);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

/*
        // Put api/values/5
        [AllowAnonymous]
        [HttpPut]
        public async Task<IActionResult> Update(int id, string name)
        {
            var valueToUpdate = await _context.Values.FindAsync(id);

            _mapper.Map(name, valueToUpdate.Name);
            await _context.SaveChangesAsync();

            return StatusCode(201);
        }*/
    }
}
