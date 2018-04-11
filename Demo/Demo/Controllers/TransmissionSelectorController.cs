using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Controllers
{
    [Route("api/transmissionSelector")]
    public class TransmissionSelectorController : Controller
    {
        private ApplicationContext db;

        public TransmissionSelectorController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Transmission> Get()
        {
            IEnumerable<Transmission> data = db.Transmissions.ToList();
            return data;
        }
    }
}