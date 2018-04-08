using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Demo.Models;
using Demo.Models.ViewModels;

namespace Demo.Controllers
{
    [Route("api/modelSelector")]
    public class ModelSelectorController : Controller
    {
        private ApplicationContext db;

        public ModelSelectorController(ApplicationContext context)
        {
            db = context;
        }


        [HttpGet]
        public ModelSelectorViewModel Get()
        {
            ModelSelectorViewModel data = new ModelSelectorViewModel(db.Brands.ToList(), db.Models.ToList());
            return data;
        }

    }
}