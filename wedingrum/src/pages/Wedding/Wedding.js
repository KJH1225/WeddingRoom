import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Wedding.scss';
import MapWithRealtimeLocation from '../../components/Map/Map'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {NavLink, useParams} from 'react-router-dom';


function Wedding() {

  let weddings = {}
  console.log("weddings: ", weddings);

  let {id} = useParams();
  console.log("category: ",id);
  switch (id) {
    case "1":
      weddings={
        name: "아펠가모 잠실",
        point_en: "The Banquet",
        point: "잠실점",
        point_main: "화려함과 모던함이 공존하는 호텔형 웨딩홀",
        point_text: "넓고 여유로운 공간 구성 속 고급스러운 감각이 돋보이는 아펠가모의 첫 번째 웨딩 플레이스\n신랑신부 두 사람을 향해 아낌없이 쏟아지는 축복을 만끽할 수 있는 버진로드와\n무대가 잊을 수 없는 순간을 선사합니다.",
        information_p: "예식간격 : 1시간 30분\n예식시간 : 11:00 · 12:30 · 14:00 · 15:30 · 17:00 · 18:30\n수용인원 : 웨딩홀 160석 · 피로연장 500석\n주차시설 : 200대",
        
        back_img: "/image/wedding/jamsil/back.jpg",

        information_img: "/image/wedding/jamsil/information.jpg",

        SwiperSlide1: "/image/wedding/jamsil/AP_JS_bb001.7b068930.jpg",
        SwiperSlide2: "/image/wedding/jamsil/AP_JS_bb002.0113c817.jpg",
        SwiperSlide3: "/image/wedding/jamsil/AP_JS_bb003.a1263775.jpg",
        SwiperSlide4: "/image/wedding/jamsil/AP_JS_bb004.29b86daa.jpg",
        SwiperSlide5: "/image/wedding/jamsil/AP_JS_wh001.99580704.jpg",
        SwiperSlide6: "/image/wedding/jamsil/AP_JS_wh004.0ee99786.jpg",
        SwiperSlide7: "/image/wedding/jamsil/js_ot02.7738ba14.jpg",
        SwiperSlide8: "/image/wedding/jamsil/js_ot03.fa84884a.jpg",
        SwiperSlide9: "/image/wedding/jamsil/js_ot04.c1418334.jpg",
        sub_tit: "Gallery of\nJamsil Hall",

        footer_img: "/image/wedding/jamsil/jamfooter.jpg",
        footer_text_01: "서울특별시 송파구 올림픽로 35길 137 (신천동), 한국광고문화회관 2층",
        footer_text_02: "02 2144 0230",
        footer_text_03: "Blue 간선 : 301, 302, 303, 320, 341, 351, 360, 362, N13\nRed 광역 : 116, 119, 1001, 1007, 1009, 1112, 1115-6, 1117, 1650, 9403, M2316\nGreen 지선 : 2311, 2412, 2415, 3216, 3217, 3313, 3314, 3315, 3317, 3318, 3411, 3412, 3413, 3414, 4318, 4319\nWhite 시외 : 16, 30-1, 30-3, 30-5, 32, 70, 101, 116, 119, 2000-2\n",
        footer_text_03_01: "※ 잠실역 사거리에서 하차 후, 잠실대교 남단 교차로에서 우회전 한국광고문화회관 2층",
        footer_text_04: "방향으로 나와 잠실대교 방면 200m 직진 후 삼거리에서 우회전 한국광고문화회관 2층 (도보 5분)",
        footer_text_04_01: "잠실역 7번출구(2호선, 8호선)",
        footer_text_05_01: "- 청담대로 진입 후 (동부간선도로 방면) 직진 {'>'} 천호대교, 잠실대교(우측방향) {'>'} 잠실대교 진입 후 (잠실대교 남단) {'>'} 잠실나루역 방향 (좌회전) {'>'} 한국광고문화회관 \n",
        footer_text_05_span01: "용인 및 과천방향",
        footer_text_05_02: "- 올림픽대로&강변북로 직진 {'>'} 잠실대교 진입 후 송파대로 이동 {'>'} 잠실대교 남단 잠실나루역 방향 (좌회전) {'>'} 한국광고문화회관\n",
        footer_text_05_span02: "강동, 강북 방면",
        footer_text_05_03: "- 강변북로&올림픽대로 (잠실대교방면) {'>'} 잠실대교 남단 잠실나루역 방향 (좌회전) {'>'} 한국광고문화회관\n",
        footer_text_05_span03: "강서 방향",
      }
      break;
    case "2":
      weddings={
        name: "아펠가모 반포",
        point_en: "The Classic",
        point: "반포점",
        point_main: "경건함이 느껴지는 낭만웨딩",
        point_text: "단독홀로 구성되어 프라이빗한 예식에 적합한 아펠가모 반포점은\n편안하지만 예식의 경건함을 잃지 않는 고풍스런 인테리어가 돋보입니다.\n전국으로 이어지는 교통의 요충지로서 어디서든 편리하게 이용하실 수 있어 사랑 받는 웨딩홀입니다.",
        information_p: "예식간격 : 1시간 30분\n예식시간 : 11:00 · 12:30 · 14:00 · 15:30 · 17:00 · 18:30\n수용인원 : 웨딩홀 168석 · 피로연장 550석\n주차시설 : 250대",
        
        back_img: "/image/wedding/banpo/Banback.jpg",

        information_img: "/image/wedding/banpo/baninfor.jpg",

        SwiperSlide1: "/image/wedding/banpo/BP01.jpg",
        SwiperSlide2: "/image/wedding/banpo/BP02.jpg",
        SwiperSlide3: "/image/wedding/banpo/BP03.jpg",
        SwiperSlide4: "/image/wedding/banpo/BP04.jpg",
        SwiperSlide5: "/image/wedding/banpo/BP05.jpg",
        SwiperSlide6: "/image/wedding/banpo/BP06.jpg",
        SwiperSlide7: "/image/wedding/banpo/BP07.jpg",
        SwiperSlide8: "/image/wedding/banpo/BP08.jpg",
        SwiperSlide9: "/image/wedding/banpo/BP09.jpg",
        sub_tit: "Gallery of\nBanpo Hall",
        
        footer_img: "/image/wedding/banpo/banfooter.jpg",
        footer_text_01: "서울특별시 서초구 반포대로 235 (반포동), 반포 효성빌딩 LL층 (지하2층)",
        footer_text_02: "02 3431 0230",
        footer_text_03: "Blue 간선 : 405, 740 / Green 지선 : 5413 / 공항버스 : 6703",
        footer_text_03_01: "※ 서울 지방 조달청역 하차, 반포 효성빌딩 LL층 (지하2층)",
        footer_text_04: "방향으로 나와 서래공원 방면 신호등 건넌 후 첫번째 건물 (반포 효성빌딩) LL층 (지하2층)",
        footer_text_04_01: "고속터미널역 5번 출구(3호선, 7호선, 9호선)",
        footer_text_05_01: "",
        footer_text_05_span01: "",
        footer_text_05_02: "",
        footer_text_05_span02: "",
        footer_text_05_03: "",
        footer_text_05_span03:""
      }
      break;
    case "3":
      weddings={
        name: "아펠가모 평택",
        point_en: "The Classic",
        point: "평택점",
        point_main: "도심 속 품격 있는 웨딩 퍼포먼스",
        point_text: "이 곳에서 결혼한 이들의 곳간에는 쌀 떨어질 일이 없다고 전해질 만큼 풍수지리적 명당으로 손꼽히는 종로.\n이 곳에 자리한 아펠가모 광화문점은 웅장하고 세련된 채플형 웨딩홀과\n한옥을 그대로 옮겨 놓은 듯한 폐백실의 조화가 도심 속 품격 있는 웨딩 퍼포먼스를 선사합니다.",
        information_p: "예식간격 : 1시간 30분\n예식시간 : 11:00 · 12:30 · 14:00 · 15:30 · 17:00 · 18:30\n수용인원 : 웨딩홀 180석 · 피로연장 500석\n주차시설 : 400대",
        
        back_img: "/image/wedding/pyeongtaek/Pyeongback.jpg",
        
        information_img: "/image/wedding/pyeongtaek/pyeonginfor.jpg",
        
        SwiperSlide1: "/image/wedding/pyeongtaek/pt01.jpg",
        SwiperSlide2: "/image/wedding/pyeongtaek/pt02.jpg",
        SwiperSlide3: "/image/wedding/pyeongtaek/pt03.jpg",
        SwiperSlide4: "/image/wedding/pyeongtaek/pt04.jpg",
        SwiperSlide5: "/image/wedding/pyeongtaek/pt05.jpg",
        SwiperSlide6: "/image/wedding/pyeongtaek/pt06.jpg",
        SwiperSlide7: "/image/wedding/pyeongtaek/pt07.jpg",
        SwiperSlide8: "/image/wedding/pyeongtaek/pt08.jpg",
        SwiperSlide9: "/image/wedding/pyeongtaek/pt09.jpg",
        sub_tit: "Gallery of\nPyeongtaek",
        
        footer_img: "/image/wedding/pyeongtaek/pyeongfooter.jpg",
        footer_text_01: "경기도 평택시 장안웃길 56 KR 국제대학교웨딩컨벤션 (지하2층)",
        footer_text_02: "02 730 0230",
        footer_text_03: "Blue 간선 : 103, 109, 150, 171, 272, 401, 402(심야), 406, 408, 606, 607, 700, 704, 706, 707, 708\nGreen 지선 : 1020, 1711, 7016, 7018, 7022, 7212, 7025\n마을버스 : 종로 09, 종로 11",
        footer_text_03_01: "※ 세종문화회관, KT광화문지사, 경복궁 정류장 하차 더 케이 트윈타워 LL층",
        footer_text_04: "방향으로 나와 경복궁 방면으로 직진 후 대한민국 역사박물관에서 우회전후, 사거리에서 좌측 대각선 첫 번째 건물",
        footer_text_04_01: "광화문역 2번 출구 (5호선)",
        footer_text_05_01: "",
        footer_text_05_span01: "",
        footer_text_05_02: "",
        footer_text_05_span02: "",
        footer_text_05_03: "",
        footer_text_05_span03:""
      }
      break;
      case "4":
      weddings={
        name: "아펠가모 선릉",
        point_en: "The Urban",
        point: "선릉점",
        point_main: "도심 속에서 즐기는 스타일리시한 어반 웨딩",
        point_text: "테헤란로에서 펼쳐지는 아펠가모의 네 번째 웨딩 플레이스.\n모던하면서도 화려한 네오클래식 무드가 세련된 신랑신부의 취향을 만족시켜줄 것입니다.\n도심 속에서 즐기는 트랜디한 어반 웨딩, 색다른 도심형 채플 웨딩을 즐겨보세요.",
        information_p: "예식간격 : 1시간 30분\n예식시간 : 11:00 · 12:30 · 14:00 · 15:30 · 17:00 · 18:30\n수용인원 : 웨딩홀 180석 · 피로연장 470석\n주차시설 : 350대",
        
        back_img: "/image/wedding/seolleung/Seonback.jpg",
        
        information_img: "/image/wedding/seolleung/seoninfor.jpg",
        
        SwiperSlide1: "/image/wedding/seolleung/Sl01.jpg",
        SwiperSlide2: "/image/wedding/seolleung/Sl02.jpg",
        SwiperSlide3: "/image/wedding/seolleung/Sl03.jpg",
        SwiperSlide4: "/image/wedding/seolleung/Sl04.jpg",
        SwiperSlide5: "/image/wedding/seolleung/Sl05.jpg",
        SwiperSlide6: "/image/wedding/seolleung/Sl06.jpg",
        SwiperSlide7: "/image/wedding/seolleung/Sl07.jpg",
        SwiperSlide8: "/image/wedding/seolleung/Sl08.jpg",
        SwiperSlide9: "/image/wedding/seolleung/Sl09.jpg",
        sub_tit: "Gallery of\nSeolleung Hall",
        
        footer_img: "/image/wedding/seolleung/seonfooter.jpg",
        footer_text_01: "서울특별시 강남구 테헤란로 322 한신인터밸리24빌딩, 4층",
        footer_text_02: "02 2183 0230",
        footer_text_03: "Blue 간선 : N13, N61, 146, 341, 360, 740 / Red 광역 : 1100, 1700, 2000, 2000-1, 7007, 8001, 9303\n",
        footer_text_03_01: "※ 선릉역 방향 이동 두꺼비 빌딩 지나 30M 직진 한신인터밸리24 빌딩, 4층",
        footer_text_04: "로 나와, IBK기업은행을 지나 50M 직진 맥도날드 옆 한신인터밸리24 빌딩, 4층",
        footer_text_04_01: "선릉역(2호선, 분당선) 4번 출구",
        footer_text_05_01: "",
        footer_text_05_span01: "",
        footer_text_05_02: "",
        footer_text_05_span02: "",
        footer_text_05_03: "",
        footer_text_05_span03:""
      }
      break;
    case "5":
      weddings={
        name: "아펠가모 공덕",
        point_en: "The Romantik",
        point: "공덕점",
        point_main: "현대적인 감각으로 재해석 된 로마네스크 스타일",
        point_text: "경기와 서울 전역을 잇는 새로운 교통의 요충지, 공덕에서 중세 성당을 옮겨 놓은 듯 경건하면서도 로맨틱한 분위기가 펼쳐집니다.\n굳건한 믿음을 상징하는 석조 기둥과 드라마틱한 아치 디테일이 자아내는 기품 있는 예식을 경험하세요.",
        information_p: "예식간격 : 1시간 30분\n예식시간 : 11:00 · 12:30 · 14:00 · 15:30 · 17:00 · 18:30\n수용인원 : 웨딩홀 200석 · 피로연장 500석\n주차시설 : 550대",
        
        back_img: "/image/wedding/gongdeog/Gongback.jpg",

        information_img: "/image/wedding/gongdeog/gonginfor.jpg",
        
        SwiperSlide1: "/image/wedding/gongdeog/GD01.jpg",
        SwiperSlide2: "/image/wedding/gongdeog/GD02.jpg",
        SwiperSlide3: "/image/wedding/gongdeog/GD03.jpg",
        SwiperSlide4: "/image/wedding/gongdeog/GD04.jpg",
        SwiperSlide5: "/image/wedding/gongdeog/GD05.jpg",
        SwiperSlide6: "/image/wedding/gongdeog/GD06.jpg",
        SwiperSlide7: "/image/wedding/gongdeog/GD07.jpg",
        SwiperSlide8: "/image/wedding/gongdeog/GD08.jpg",
        SwiperSlide9: "/image/wedding/gongdeog/GD09.jpg",
        sub_tit: "Gallery of\nLa Robe Hall",
        
        footer_img: "/image/wedding/gongdeog/gongfooter.jpg",
        footer_text_01: "서울 마포구 마포대로 92 효성해링턴스퀘어 B동 7층",
        footer_text_02: "02-2197-0230",
        footer_text_03: "Blue 간선 : 160, 260, 600 / Green 지선 : 7013A, 7013B, 7611\n마을버스 : 마포01, 마포02, 마포10 / 일반버스 : 1002 / 공항버스 : 6015, 6021",
        footer_text_03_01: "",
        footer_text_04: "라로브홀 - 공덕역 7번 출구 방향으로 나와 우측 골목 직진, 효성해링턴스퀘어 B동 7층(도보 2분)\n마리에홀 - 공덕역 10번 출구 (경의 중앙선, 공항철도) 방향으로 나와 유턴 후, 전방 우측 효성해링턴 스퀘어 B동 7층 (도보 30초)",
        footer_text_04_01: "",
        footer_text_05_01: "마포대로 진입 후 공덕오거리 방향 1km 직진 > 경찰공제회(독막길 입구) 건물 우회전 > 교차로 직진 > 150m 직진 후 공덕역 10번 출구 앞 좌회전 > 건물 입구",
        footer_text_05_span01: "마포대교 진입 시(강동, 강서)",
        footer_text_05_02: "대흥역(서강대 앞) 방면 진입 > 공덕오거리 방향 직진 > 공덕오거리 교차로 직진 > S-OIL 건물 끼고 우회전 > 첫 번째 교차로 좌회전 > 공덕역 10번 출구 앞 건물 입구",
        footer_text_05_span02: "신촌 방향 진입 시",
        footer_text_05_03: "아현 교차로에서 마포대로 진입(공덕오거리 방향) > 공덕오거리 지나 바로 P 턴 > 공덕오거리 교차로 직진 > S-OIL 건물 끼고 우회전 > 첫 번째 교차로 좌회전 > 공덕역 10번 출구 앞 건물 입구",
        footer_text_05_span03:"아현 교차로-애오개역 방향 진입 시"
      }
      break;
    default:
      break;
  }


  return (
    <div className="wedding_container">     
      <div class="contents">
        <div class="contents_header">
          <div class="back-image" 
            style={{
            backgroundImage: `url(${weddings.back_img})`
            }}>
            <div class="big_tit">
              <h3>WEDDING</h3>
              <h1>{weddings.name}</h1>
            </div>
          </div>
          
        </div>
        
        <div class="main">
          <nav>
            <ul>
              <li><NavLink to='/wedding/1' class="active">아펠가모 잠실</NavLink></li>
              <li><NavLink to='/wedding/2'>아펠가모 반포</NavLink></li>
              <li><NavLink to='/wedding/3'>아펠가모 평택</NavLink></li>
              <li><NavLink to='/wedding/4'>아펠가모 선릉</NavLink></li>
              <li><NavLink to='/wedding/5'>아펠가모 공덕</NavLink></li>
            </ul>
          </nav>
  
          <div class="inner">
            <div class="center_first">
              <h1>
                <span>{weddings.point_en}</span>
                {weddings.point}
              </h1>
            </div>
  
            <div class="center_seccond">
              <h3>{weddings.point_main}</h3>
              <p class="pdt20">{weddings.point_text}</p>
            </div>
    
            <div class="center_third"
              style={{
                backgroundImage: `url(${weddings.information_img})`,
                }}
              >
              <div id="nemo">
                <div class="information">
                  <h2>Information</h2>
                  <p>{weddings.information_p}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="center_fourth">
            <div class="slidebox">
              <div class="slide">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide><img src={weddings.SwiperSlide1}/></SwiperSlide>
                  <SwiperSlide><img src={weddings.SwiperSlide2}/></SwiperSlide>
                  <SwiperSlide><img src={weddings.SwiperSlide3}/></SwiperSlide>
                  <SwiperSlide><img src={weddings.SwiperSlide4}/></SwiperSlide>
                  <SwiperSlide><img src={weddings.SwiperSlide5}/></SwiperSlide>
                  <SwiperSlide><img src={weddings.SwiperSlide6}/></SwiperSlide>
                  <SwiperSlide><img src={weddings.SwiperSlide7}/></SwiperSlide>
                  <SwiperSlide><img src={weddings.SwiperSlide8}/></SwiperSlide>
                  <SwiperSlide><img src={weddings.SwiperSlide9}/></SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* <div class="l_arrow" role='button' aria-label='Previous slide'>{'<'}</div>
            <div class="r_arrow" role='button' aria-label='Next slide'>{'>'}</div> */}
            <div class="gallery">
              <div class="sub_tit">
                <h2>{weddings.sub_tit}</h2>
                <div class="gallery_btn">
                  <a class="btn_boline">All</a>
                  <a class="btn_boline">Wedding Hall</a>
                  <a class="btn_boline">Bridal Room</a>
                  <a class="btn_boline">Courtesy Room</a>
                  <a class="btn_boline">Banquet & Buffet</a>
                  <a class="btn_boline">Others</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="foooter backimg03"
          style={{
            backgroundImage: `url(${weddings.footer_img})`
            }}
          >
          <div class="backblack">
            <div class="foooter_txt">
              <div class="tit">
                <h1>Location</h1>
              </div>
              <div class="txt">
                <p class="txt_01">{weddings.footer_text_01}</p>
                <p class="txt_02">{weddings.footer_text_02}</p>
                <p class="txt_03">{weddings.footer_text_03}
                  <span class="txt_s01">{weddings.footer_text_03_01}</span>
                </p>
                <p class="txt_04">
                  <span class="txt_s01 pdt00">{weddings.footer_text_04_01}</span>
                  {weddings.footer_text_04}
                </p>
                {weddings.footer_text_05_01 ?
                    <p class="txt_05">
                      <span class="txt_s01 pdt00">{weddings.footer_text_05_span01}</span>
                      {weddings.footer_text_05_01}
                      <span class="txt_s01">{weddings.footer_text_05_span02}</span>
                      {weddings.footer_text_05_02}
                      <span class="txt_s01">{weddings.footer_text_05_span03}</span>
                      {weddings.footer_text_05_03}
                    </p>
                  :
                    <></>
                }
              </div>
            </div>
          </div>
          <div class="map_area">
            <div class="map">
            <MapWithRealtimeLocation/>
            </div>
            <div class="map_btn">
              <a href="/" class="btn_down">약도 다운로드</a>
              <a href="/" class="btn_down">지도 크게보기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wedding;