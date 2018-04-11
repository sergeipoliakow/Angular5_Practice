using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Controllers
{
    [Route("api/suspensionSelector")]
    public class SuspensionSelectorController : Controller
    {
        private ApplicationContext db;

        public SuspensionSelectorController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Suspension> Get()
        {
            IEnumerable<Suspension> data = db.Suspensions.ToList();
            return data;
        }
    }
}