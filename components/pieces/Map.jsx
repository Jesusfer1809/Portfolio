import React, { memo, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import L from "leaflet";

const ACCESS_TOKEN =
  "ZpsFozeiwml3DAwdA0ToGKoCCCOLG4HrhdSSzPK6g2V53LuoH5fwqrk2o4kKF6H3";

function Map() {
  const center = [-11.997555, -77.100616];

  const [map, setMap] = useState(null);

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
      whenCreated={(map) => setMap(map)}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={`https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${process.env.NEXT_PUBLIC_LEAFLET_KEY}`}
      />
      <Marker position={center}>
        <Popup>
          Hey! I'm here <br />
          Just at an email of distance.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default memo(Map);
