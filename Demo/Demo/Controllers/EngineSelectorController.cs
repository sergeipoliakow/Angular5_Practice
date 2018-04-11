using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Controllers
{
    [Route("api/engineSelector")]
    public class EngineSelectorController : Controller
    {
        private ApplicationContext db;

        public EngineSelectorController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet("{id}")]
        public IEnumerable<Engine> Get(int id)
        {
            IEnumerable<Engine> engines = (from a in db.EngineOfModels where a.ModelId == id select a.Engine).ToList();
            return engines;
        }
    }
}