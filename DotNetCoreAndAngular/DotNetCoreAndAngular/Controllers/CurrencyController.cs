using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DotNetCoreAndAngular.Models;
using System.Net;


namespace DotNetCoreAndAngular.Controllers
{
    [Route("api/currencies")]
    public class CurrencyController : Controller
    {
        ApplicationContext db;

        public CurrencyController(ApplicationContext context)
        {
            db = context;
            if (!db.Currencies.Any())
            {
                db.Currencies.Add(new Currency { Name = "Рубль", Caption = "₽", Rate = 1 });
                db.Currencies.Add(new Currency { Name = "Доллар", Caption = "$", Rate = 57.9 });
                db.Currencies.Add(new Currency { Name = "Евро", Caption = "€", Rate = 70.89 });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Currency> Get()
        {
            return db.Currencies.ToList();
        }

        [HttpGet("{id}")]
        public Currency Get(int id)
        {
            Currency currency = db.Currencies.FirstOrDefault(x => x.Id == id);
            return currency;
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Currency currency)
        {
            if (ModelState.IsValid)
            {
                db.Update(currency);
                db.SaveChanges();
                return Ok(currency);
            }
            return BadRequest(ModelState);
        }
    }
}