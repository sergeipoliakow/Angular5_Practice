using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Models
{
    public enum Color { Black,Red,Blue,Green,Gray}
    public class Car
    {
        public int Id { get; set; }

        public int ModelId { get; set; }
        public Model Model { get; set; }

        public int EngineId { get; set; }
        public Engine Engine { get; set; }

        public int TransmissionId { get; set; }
        public Transmission Transmission { get; set; }

        public int SuspensionId { get; set; }
        public Suspension Suspension { get; set; }

        public Color Color { get; set; }

        public float Cost { get; set; }

        public List<OptionsOfCar> GetOptionsOfCars { get; set; }
    }
}
