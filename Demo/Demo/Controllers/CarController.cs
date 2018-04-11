using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace Demo.Controllers
{
    [Route("api/createdCars")]
    public class CarController : Controller
    {
        private ApplicationContext db;

        public CarController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Car> Get()
        {
            IEnumerable<Car> data = db.Cars.ToList();
            foreach(var d in data)
            {
                db.Entry(d).Reference(x => x.Engine).Load();
                db.Entry(d).Reference(x => x.Model).Load();
                db.Entry(d.Model).Reference(x => x.Brand).Load();
                db.Entry(d).Reference(x => x.Suspension).Load();
                db.Entry(d).Reference(x => x.Transmission).Load();
            }
            foreach (var d in data)
            {
                d.Model.Brand.Models = null;
                d.Model.Cars = null;
                d.Model.EngineOfModels = null;
                d.Transmission.Cars = null;
                d.Suspension.Cars = null;
            }

                return data.ToList(); ;
        }
    }
}