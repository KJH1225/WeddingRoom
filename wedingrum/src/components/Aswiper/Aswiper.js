import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Aswiper.scss'

export default function App(){
    return(
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
          <SwiperSlide>
            <div className="img">
              <img src="img/About/as1.jpg"/>
            </div>
            <div className="txt">
              <h4>01</h4>
              <h3>가장 가까이서 완벽하게,<br></br>
              당일 전 스텝 최상의 서비스
              </h3>
              <h2>Excellent Service</h2>
              <p>평생 기억될 중요한 하루, 신랑신부님만을 위해 60여 명의 예식<br></br>
              전문 스텝들 역시 각자의 위치에서 맡은 바 최고의 웨딩 서비스를<br></br>
              펼칩니다.<br></br><br></br>
              도착해서 마치는 순간까지 모든 움직임은 무전으로 공유되며<br></br>
              해프닝과 요청사항에 즉각 대처할 수 있도록 전 스텝이 대기하고<br></br>
              있습니다. 부피가 큰 드레스와 수트 등의 귀중품은 더욱 안전하게<br></br>
              운반될 수 있도록 러기지 트롤리로 필요한 장소까지 신속하게<br></br>
              안내해 드리겠습니다.
              </p>
            </div>            
            </SwiperSlide>
          <SwiperSlide><div className="img">
              <img src="img/About/as2.jpg"/>
            </div>
            <div className="txt">
              <h4>02</h4>
              <h3>신부님을 위한 국내 최초 전용 공간,<br></br>
              신부대기실과 개인 파우더룸
              </h3>
              <h2>Bridal Room with Comfort</h2>
              <p>예식을 앞두고 많은 가족, 지인 등 귀빈들과 인사를 나누는 시간. 신부님이 한층<br></br>
              여유롭고 프라이빗하게 시간을 보낼 수 있도록 대기실 내부엔 국내 최초로 신부님만을<br></br>
              위한 전용 화장실과 개인 파우더룸을 배치하였습니다. 은은하게 존재감을 더하는<br></br>
              샹들리에와 고급스러운 디테일을 더한 인테리어가 웨딩의 주인공인 신부님의 기품<br></br>
              있는 모습과 우아한 자태를 완성해줄 것입니다.
              </p>
            </div> </SwiperSlide>
          <SwiperSlide><div className="img">
              <img src="img/About/as3.jpg"/>
            </div>
            <div className="txt">
              <h4>03</h4>
              <h3>순간을 놓치지 않는 배려,<br></br>
              핑거푸드 & 티 서비스
              </h3>
              <h2>Gourmet Finger Food</h2>
              <p>모든 순간을 빛낼 웨딩의 진정한 주인공이 되길 바라며, 아펠가모 셰프들이 직접 만든<br></br>
              핑거푸드를 신부대기실로 제공해드립니다.<br></br><br></br>
              호두타르트, 그리시니, 마카롱 등의 달콤한 디저트에 곁들인 따뜻한 티 서비스는 보는<br></br>
              즐거움은 물론 골라먹는 재미와 순간을 놓치지 않는 아펠가모만의 섬세한 배려까지<br></br>
              모두 느낄 수 있습니다.
              </p>
            </div> </SwiperSlide>
          <SwiperSlide><div className="img">
              <img src="img/About/as4.jpg"/>
            </div>
            <div className="txt">
              <h4>04</h4>
              <h3>모두의 찬란한 추억,<br></br>
              플라워 샤워
              </h3>
              <h2>Flower Shower Event</h2>
              <p>많은 이들의 축복 속에 가장 찬란한 맹세를 하는 신랑신부, 아펠가모에서의 웨딩은<br></br>
              모두의 가슴 속에 기억될 수 있을 만큼 드라마틱하고 경건하길 바랍니다.<br></br><br></br>
              가슴 벅찬 웨딩의 마무리는 참석한 귀빈들이 버진 로드를 걸어가는 신랑신부에게 직접<br></br>
              생화 꽃잎을 뿌려주며 축하하는 플라워 샤워 퍼포먼스로 이어집니다. 모두의 진실된<br></br>
              마음이 더해져 더욱 뜻 깊은 순간으로 기억될 것입니다.<br></br>             
              </p>
            </div> </SwiperSlide>
          <SwiperSlide><div className="img">
              <img src="img/About/as5.jpg"/>
            </div>
            <div className="txt">
              <h4>05</h4>
              <h3>기억으로 풍성해지는 즐거움,<br></br>
              귀빈들의 덕담카드
              </h3>
              <h2>Best Wishes & Blessings</h2>
              <p>일생 단 한 번뿐인 행복의 클라이맥스, 웨딩의 즐거움은 그 감동적인 순간을 함께한<br></br>
              많은 이들의 기억을 통해 한층 풍성해집니다.<br></br><br></br>
              두 사람의 첫 출발을 응원하는 귀빈들의 소중한 축하 메시지 속 모두 느낀 즐거움, 함께<br></br>
              나누는 기쁨. 덕담카드로 찬란했던 예식의 여운을 가슴으로 간직하세요.<br></br>
              </p>
            </div> </SwiperSlide>
          <SwiperSlide><div className="img">
              <img src="img/About/as6.jpg"/>
            </div>
            <div className="txt">
              <h4>06</h4>
              <h3>감사의 마음까지 전하다,<br></br>
              프라이빗한 혼주 식사
              </h3>
              <h2>Exclusive VIP Table</h2>
              <p>귀빈들을 맞이하느라 애써주신 양가 혼주님을 위해서도 특별한 상차림을<br></br>
              준비했습니다.<br></br><br></br>
              아펠가모의 모든 요리를 책임지는 조리장이 준비한 스페셜 메뉴. 영양 가득한 품격<br></br>
              있는 반상을 완성했습니다.
              </p>
            </div> </SwiperSlide>
        </Swiper>
    )
}