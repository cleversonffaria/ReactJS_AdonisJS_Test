import React, { useState, useEffect } from "react";

export default function App() {
  const [location, setLocation] = useState({});
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePosition);
    
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);
  function handlePosition({ coords }) {
    console.log(coords);
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }
  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude:{location.longitude}
    </>
  );
}
