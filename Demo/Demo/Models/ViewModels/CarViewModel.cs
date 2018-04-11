using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Models.ViewModels
{
    public class CarViewModel
    {
            public int Id { get; set; }

            public int ModelId { get; set; }

            public int EngineId { get; set; }

            public int TransmissionId { get; set; }

            public int SuspensionId { get; set; }

            public Color Color { get; set; }

            public float Cost { get; set; }

    }
}
