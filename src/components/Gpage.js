import logo from "../components/img/logo.png";
import menu from "../components/img/menu.png";
import "./Gpage.css";

const Gpage = () => {
  return (
    <html>
      <header style={{ margin: "10px 20px" }}>
        <div id="google">
          <a href="#">Google 정보</a>
          <a href="#">스토어</a>
        </div>
        <div id="gmail">
          <a href="#">Gmail</a>
          <a href="#">이미지</a>
          <img src={menu} />
          <a href="#" id="login">
            로그인
          </a>
        </div>
      </header>
      <section style={{ marginTop: "180px" }}>
        <img src={logo} id="logo" />
        <div id="search" style={{ textAlign: "center", padding: "25px" }}>
          <input type="search"></input>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div id="box" style={{ marginRight: "15px" }}>
            Google 검색
          </div>
          <div id="box">I'm Feeling Lucky</div>
        </div>
      </section>
      <footer>
        <div style={{ marginLeft: "30px" }}>대한민국</div>
        <hr />
        <div id="foo">
          <ul id="f_l" style={{ listStyle: "none", marginRight: "20px" }}>
            <li>광고</li>
            <li>비즈니스</li>
            <li>검색의 원리</li>
          </ul>
          <ul id="f_r" style={{ listStyle: "none" }}>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>설정</li>
          </ul>
        </div>
      </footer>
    </html>
  );
};
export default Gpage;
