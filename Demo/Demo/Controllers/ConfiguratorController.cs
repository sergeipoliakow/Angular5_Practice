using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Demo.Models;
using Demo.Models.ViewModels;

namespace Demo.Controllers
{
    [Route("api/configurator")]
    public class ConfiguratorController : Controller
    {
        private ApplicationContext db;

        public ConfiguratorController( ApplicationContext context)
        {
            db = context;
            if (!db.Brands.Any())
            {
                db.Brands.Add(new Brand { Name = "BMW", Country = Country.Germany });
                db.Brands.Add(new Brand { Name = "Aston Martin", Country = Country.UK }); db.SaveChanges();
                db.SaveChanges();
            }

            if (!db.Engines.Any())
            {
                db.Engines.Add(new Engine { Name = "B48B20", Brand = (from a in db.Brands where a.Name.Equals("BMW") select a).FirstOrDefault(), Power = 184, Type = EngineType.Petrol, Cost = 200000 });
                db.Engines.Add(new Engine { Name = "B58B30", Brand = (from a in db.Brands where a.Name.Equals("BMW") select a).FirstOrDefault(), Power = 340, Type = EngineType.Petrol, Cost = 220000 });
                db.Engines.Add(new Engine { Name = "B57D30", Brand = (from a in db.Brands where a.Name.Equals("BMW") select a).FirstOrDefault(), Power = 400, Type = EngineType.Diesel, Cost = 215000 });
                db.Engines.Add(new Engine { Name = "AM11", Brand = (from a in db.Brands where a.Name.Equals("Aston Martin") select a).FirstOrDefault(), Power = 565, Type = EngineType.Petrol, Cost = 190000 });
                db.Engines.Add(new Engine { Name = "AM29", Brand = (from a in db.Brands where a.Name.Equals("Aston Martin") select a).FirstOrDefault(), Power = 568, Type = EngineType.Petrol, Cost = 210000 });
                db.SaveChanges();
            }

            if (!db.Models.Any())
            {
                db.Models.Add(new Model { Name = "5", Brand = (from a in db.Brands where a.Name.Equals("BMW") select a).FirstOrDefault(), BaseCost = 1200000 });
                db.Models.Add(new Model { Name = "Vanquish", Brand = (from a in db.Brands where a.Name.Equals("Aston Martin") select a).FirstOrDefault(), BaseCost = 2000000 });
                db.SaveChanges();
            }

            if (!db.EngineOfModels.Any())
            {
                db.EngineOfModels.Add(new EngineOfModel { Engine = (from a in db.Engines where a.Name.Equals("B48B20") select a).FirstOrDefault(), Model = (from a in db.Models where a.Name.Equals("5") && a.Brand.Name.Equals("BMW") select a).FirstOrDefault() });
                db.EngineOfModels.Add(new EngineOfModel { Engine = (from a in db.Engines where a.Name.Equals("B58B30") select a).FirstOrDefault(), Model = (from a in db.Models where a.Name.Equals("5") && a.Brand.Name.Equals("BMW") select a).FirstOrDefault() });
                db.EngineOfModels.Add(new EngineOfModel { Engine = (from a in db.Engines where a.Name.Equals("B57D30") select a).FirstOrDefault(), Model = (from a in db.Models where a.Name.Equals("5") && a.Brand.Name.Equals("BMW") select a).FirstOrDefault() });
                db.EngineOfModels.Add(new EngineOfModel { Engine = (from a in db.Engines where a.Name.Equals("AM11") select a).FirstOrDefault(), Model = (from a in db.Models where a.Name.Equals("Vanquish") && a.Brand.Name.Equals("Aston Martin") select a).FirstOrDefault() });
                db.EngineOfModels.Add(new EngineOfModel { Engine = (from a in db.Engines where a.Name.Equals("AM29") select a).FirstOrDefault(), Model = (from a in db.Models where a.Name.Equals("Vanquish") && a.Brand.Name.Equals("Aston Martin") select a).FirstOrDefault() });
                db.SaveChanges();
            }

            if (!db.Transmissions.Any())
            {
                db.Transmissions.Add(new Transmission { Name = "6-ти ступенчатая МКПП", Cost = 100000 });
                db.Transmissions.Add(new Transmission { Name = "5-ти ступенчатая МКПП", Cost = 70000 });
                db.Transmissions.Add(new Transmission { Name = "6-ти ступенчатая АКПП", Cost = 150000 });
                db.Transmissions.Add(new Transmission { Name = "5-ти ступенчатая АКПП", Cost = 120000 });
                db.Transmissions.Add(new Transmission { Name = "Вариатор", Cost = 110000 });
                db.SaveChanges();
            }

            if (!db.Suspensions.Any())
            {
                db.Suspensions.Add(new Suspension { Name = "Спорт", Cost = 150000 });
                db.Suspensions.Add(new Suspension { Name = "Комфорт", Cost = 120000 });
                db.Suspensions.Add(new Suspension { Name = "Регулируемая", Cost = 170000 });
                db.Suspensions.Add(new Suspension { Name = "Адаптивная", Cost = 200000 });
                db.SaveChanges();
            }

            if (!db.Options.Any())
            {
                db.Options.Add(new Option { Name = "Охранный комплекс", Caption = "Надежная защита вашего автомобиля от угона", Cost = 50000});
                db.Options.Add(new Option { Name = "Камера заднего вида", Caption = "Дополнительный обзор ", Cost = 20000 });
                db.Options.Add(new Option { Name = "Подогрев передних сидений", Caption = "Зимой с комфортом", Cost = 10000 });
                db.Options.Add(new Option { Name = "Подогрев задних сидений", Caption = "Зимой с комфортом", Cost = 12000 });
                db.SaveChanges();
            }

        }

        [HttpPost]
        public IActionResult Post([FromBody] CarViewModel car)
        {
            if (ModelState.IsValid)
            {
                Car buf = new Car()
                {
                    ModelId = car.ModelId,
                    EngineId = car.EngineId,
                    TransmissionId = car.TransmissionId,
                    SuspensionId = car.SuspensionId,
                    Color = car.Color,
                    Cost = car.Cost,
                };
                db.Cars.Add(buf);
                db.SaveChanges();
                return Ok(car);
            }
            return BadRequest(car);
        }

    }
}