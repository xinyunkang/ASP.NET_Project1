﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TheWorld.Models;
using TheWorld.ViewModels;
using TheWorld.Services;

namespace TheWorld.Controllers.Api
{
    [Route("api/trips")]
    //[Authorize]
    public class TripsController : Controller
    {
        private ILogger<TripsController> _logger;
        private ILoggerFactory _factory;
        private IWorldRepository _repository;

        public TripsController(IWorldRepository repository, ILogger<TripsController> logger, ILoggerFactory factory)
        {
            _repository = repository;
            _logger = logger;
            _factory = factory;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            try
            {
                //var results = _repository.GetTripsByUsername(User.Identity.Name);

                //return Ok(Mapper.Map<IEnumerable<TripViewModel>>(results));
                return Ok(_repository.GetAllTrips());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get All Trips: {ex}");
               _factory.AddProvider(new MyLoggerProvider());

                return BadRequest("Error occurred");
            }
        }


        [HttpPost("")]
        public IActionResult Post([FromBody]TripViewModel theTrip)
        {
            if (ModelState.IsValid)
            {

                return Created($"api/trips/{theTrip.Name}", theTrip);
            }
            return BadRequest(ModelState);
        }

        //[HttpPost("")]
        //public async Task<IActionResult> Post([FromBody]TripViewModel theTrip)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        // Save to the Database
        //        var newTrip = Mapper.Map<Trip>(theTrip);

        //        newTrip.UserName = User.Identity.Name;

        //        _repository.AddTrip(newTrip);

        //        if (await _repository.SaveChangesAsync())
        //        {
        //            return Created($"api/trips/{theTrip.Name}", Mapper.Map<TripViewModel>(newTrip));
        //        }
        //    }

        //    return BadRequest("Failed to save the trip");
        //}
    }
}
