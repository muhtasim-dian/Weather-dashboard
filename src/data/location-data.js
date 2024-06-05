const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  { location: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
  { location: "Delhi", latitude: 28.6139, longitude: 77.2088 },
  { location: "São Paulo", latitude: -23.5505, longitude: -46.6333 },
  { location: "Buenos Aires", latitude: -34.858, longitude: -56.1793 },
  { location: "Mexico City", latitude: 19.4326, longitude: -99.1332 },
  { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { location: "Lagos", latitude: 6.4531, longitude: 3.3915 },
  { location: "Moscow", latitude: 55.7558, longitude: 37.6173 },
  { location: "Seoul", latitude: 37.5665, longitude: 126.978 },
  { location: "Jakarta", latitude: -6.1774, longitude: 106.8283 },
  { location: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
  { location: "New York City", latitude: 40.7128, longitude: -74.0059 },
  { location: "Chicago", latitude: 41.8818, longitude: -87.6231 },
  { location: "Houston", latitude: 29.7604, longitude: -95.3698 },
  { location: "Phoenix", latitude: 33.4483, longitude: -112.0762 },
  { location: "London", latitude: 51.505, longitude: -0.09 },
  { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { location: "Berlin", latitude: 52.52, longitude: 13.405 },
  { location: "Madrid", latitude: 40.4167, longitude: -3.7037 },
  { location: "Rome", latitude: 41.9028, longitude: 12.4963 },
  { location: "Sydney", latitude: -33.8688, longitude: 151.2093 }, // Australia
  { location: "Beijing", latitude: 39.9042, longitude: 116.4074 }, // China
  { location: "Bangkok", latitude: 13.7563, longitude: 100.4931 }, // Thailand
  { location: "Singapore", latitude: 1.352, longitude: 103.8198 }, // Singapore
  { location: "Dubai", latitude: 25.2764, longitude: 55.3173 }, // United Arab Emirates
  { location: "Istanbul", latitude: 41.0082, longitude: 28.9784 }, // Turkey
  { location: "Buenos Aires", latitude: -34.858, longitude: -56.1793 }, // Argentina (already included, removed)
  { location: "Rio de Janeiro", latitude: -22.9085, longitude: -43.1964 }, // Brazil
  { location: "Toronto", latitude: 43.6534, longitude: -79.3839 }, // Canada
  { location: "Atlanta", latitude: 33.759, longitude: -84.388 }, // United States
  { location: "Miami", latitude: 25.7617, longitude: -80.1887 }, // United States
  { location: "Washington D.C.", latitude: 38.8901, longitude: -77.0364 }, // United States
  { location: "Amsterdam", latitude: 52.37, longitude: 4.89 }, // Netherlands
  { location: "Barcelona", latitude: 41.3883, longitude: 2.1686 }, // Spain
  { location: "Milan", latitude: 45.4667, longitude: 9.1903 }, // Italy
  { location: "Vienna", latitude: 48.2082, longitude: 16.3723 }, // Austria
  { location: "Prague", latitude: 50.088, longitude: 14.4207 }, // Czech Republic
  { location: "Stockholm", latitude: 59.3345, longitude: 18.0815 }, // Sweden
  { location: "Copenhagen", latitude: 55.676, longitude: 12.5683 }, // Denmark
  { location: "Oslo", latitude: 59.913, longitude: 10.7522 }, // Norway
  { location: "Helsinki", latitude: 60.1699, longitude: 24.9353 }, // Finland
  { location: "Warsaw", latitude: 52.237, longitude: 21.0175 }, // Poland
  { location: "Budapest", latitude: 47.4979, longitude: 19.0402 }, // Hungary

  { location: "Saint Petersburg", latitude: 59.9375, longitude: 30.3141 }, // Russia
  { location: "Johannesburg", latitude: -26.2041, longitude: 28.049 }, // South Africa

  { location: "Nairobi", latitude: -1.2902, longitude: 36.8219 },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
