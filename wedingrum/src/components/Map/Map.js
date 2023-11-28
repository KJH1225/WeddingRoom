import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../Map/Map.scss'; 

const MapComponent = (props) => {
  //객체로 넘겨줘서 {position: [37.5115, 127.0821], markerPopup: "잠실입니다"} 이런식으로 사용하기 
  const position = [37.5115, 127.0821];



  return (
    <div className="map-container"> {/* 추가된 부분 */}
      <MapContainer center={position} zoom={130} className="MapContainer">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
          잠실의 위치입니다. <br /> 수정 가능합니다.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
