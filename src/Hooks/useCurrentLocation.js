import { useState, useEffect } from 'react';

const useCurrentLocation = () => {

  // Store Location in state
  const [location, setLocation] = useState();

  // Success handler for geolocation `getCurrentPosition` method
  const geoSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({
      latitude,
      longitude
    })
  }

  // Error handler for gelocation `getCurrentPosition` method
  const geoError = (error) => {
    setLocation({
      latitude: 33.86751,
      longitude: -117.99812
    });
  }

  // If geolocation is undefined, handleError + set default coordinates
  useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) {
      setLocation({
        latitude: 33.86751,
        longitude: -117.99812
      });
    }

    // Call Geolocation API
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }, []);

  return { location };
}

export default useCurrentLocation;