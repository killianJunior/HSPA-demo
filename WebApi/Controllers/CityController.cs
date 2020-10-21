using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
//using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        public CityController()
        {
        }

        [HttpGet("")]
        public IEnumerable<string> Getstrings()
        {
            return new string[] { "Uyo", "Ikot-Ekpene", "Eket", "Ibeno" };
        }

       
    }
}