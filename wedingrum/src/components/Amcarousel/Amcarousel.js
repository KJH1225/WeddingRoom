import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Amcarousel.scss";

export default function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="App2">
      <div style={{ position: "relative" }}>
        <Carousel responsive={responsive}>
          <div><img src="img/About/am1.jpg"/>
          <h2>
            A Moment to<br></br>
            Treasure Forever
          </h2>
          <h3>
            감각적인 안목을 가진
            <br></br>
            신랑신부의 선택 아펠가모
          </h3>
          <p>
            성스러운 예식의 가치는 공간에서 완성됩니다.<br></br>
            결혼의 의미를 담아 세운다는 마음가짐과 트렌드를 짚어내는 안목,<br></br>
            스타일리시한 감각이 최적의 조화를 이룰 때 아펠가모만의 비교 불가한 웨딩<br></br>
            스타일이 탄생합니다.
          </p>          
          </div>
          <div><img src="img/About/am2.jpg"/>
            <h2>
              A Delightful Feast to<br></br>
              Give Thankds
            </h2>
            <h3>
              최고의 미식,<br></br>
              영원한 행복으로 기억되는 순간
            </h3>
            <p>
              맛있는 음식은 더 없는 행복을 의미합니다.<br></br>
              예로부터 우리 선조들은 결혼과 같은 뜻 깊은 행사가 있을 때면 언제나<br></br>
              정성스런 음식을 나누며 기쁨을 더하곤 했습니다.<br></br>
              미식(美食)은 예식을 즐기는 또 다른 방법. 입맛 당기는 웨딩 스타일은 품격을<br></br>
              즐기는 신랑신부의 탁월한 취향으로 기억될 것입니다.
            </p>
          </div>
          <div><img src="img/About/am3.jpg"/>
            <h2>
              Make a<br></br>
              Great Difference
            </h2>
            <h3>
              행복의 절정을 만드는<br></br>
              결정적 차이
            </h3>
            <p>
              전문 웨딩 크리에이터와 함께 맞춤 웨딩의 즐거움을 누려보세요.<br></br>
              예식의 주인공은 물론, 참석해준 하객들까지 아펠가모에서의 예식을 남다른<br></br>
              추억으로 기억하는 이유가 있습니다.<br></br>
              바로 유연하고 세심한 집중 케어 서비스 덕분입니다.<br></br>
              웨딩 크리에이터와 전문 스텝들의 빈틈없는 완벽함으로 웨딩의 시작부터<br></br>
              끝까지 함께 하겠습니다.
            </p>
          </div>          
        </Carousel>
      </div>
    </div>
  );
}