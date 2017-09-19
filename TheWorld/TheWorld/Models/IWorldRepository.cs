﻿using System.Collections.Generic;
using System.Threading.Tasks;

namespace TheWorld.Models
{
    public interface IWorldRepository
    {
        IEnumerable<Trip> GetAllTrips();
        //Trip GetTripByName(string tripName, string username);
        Trip GetTripByName(string tripName);
        void AddTrip(Trip trip);
        //void AddStop(string tripName, string username, Stop newStop);
        void AddStop(string tripName, Stop newStop);
        Task<bool> SaveChangesAsync();
        //object GetTripsByUsername(string name);
    }
}