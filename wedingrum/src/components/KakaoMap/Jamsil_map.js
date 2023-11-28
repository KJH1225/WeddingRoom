/* global kakao */
import React, { useEffect, useState } from 'react';

const { kakao } = window;

const Jamsil_m = () => {
    const [map, setmap] = useState(null);

    // 지도 생성
    useEffect(() => {
        setTimeout(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.51604437000841, 127.09955995067392),
            level: 3
        };

        const kakaoMap = new kakao.maps.Map(container, options);
        setmap(kakaoMap);
        }, 1000); // 1초 후 로딩
    }, []);
    
    // 마커 표시
    useEffect(() => {
        if (map) {
            let markerPosition = new kakao.maps.LatLng(37.51604437000841, 127.09955995067392);
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(map);
        }
    }, [map]);

    return (
        <>
            {/* 맵 크기 */}
            <div id="map"style={{
                width: '100%', height: '100%'
                }}>
            </div>
        </>
    );
};

export default Jamsil_m;