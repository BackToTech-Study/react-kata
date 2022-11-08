import { useEffect, useState } from 'react';
import Station from '../../models/Station';

export function SwissTransport() {
  const [transport, setTransport] = useState<Station>();

  useEffect(() => {
    fetch(
      `http://transport.opendata.ch/v1/stationboard?station=Lausanne&limit=10`
    )
      .then((res) => res.json())
      .then((data) => setTransport(data));
  }, []);

  return (
    <>
      <h3>SwissTransport</h3>
      <p>{transport?.station.name}</p>
    </>
  );
}
export default SwissTransport;
