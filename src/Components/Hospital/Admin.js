import styled from "styled-components"
import "./css/admin.css";

import { Link, useNavigate} from "react-router-dom"
const Container=styled.div`
  width: calc(100vw-10px);

`

export function Admin(){
  const navigate = useNavigate();
  
  const mbClick = () => {
    navigate('/Mb');
  };
  const pageClick = () => {
    navigate('/Mypage');
  };
  const AdminClick = () => {
    navigate('/Admin');
  };
  return<>
    <Container>    
        <main className="main">
              <div className="sidebar">
                  <div className="barbrand">        
                      <div className="sidebabrand-icon">HP</div>
                      <h2>병원 예약시스템</h2>
                    </div>
                    <div className="Sidebaicon1">
                      <button onClick={AdminClick}>
                        <iconify-icon icon="tdesign:login"width="160" height="50"></iconify-icon><h3>로그인</h3>
                      </button>
                      <button onClick={mbClick}>
                        <iconify-icon icon="ph:user"  width="160" height="50"></iconify-icon><h3>회원가입</h3>
                      </button>
                    </div>
                    <ul id="Sidebamenu">
                      <li className="Sidebamenu-item">
                        <button className="Sidebamenu-button">
                          <iconify-icon className="menu-icon" icon="majesticons:chevron-down-line"></iconify-icon>
                          진료예약
                        </button>
                        <ul className="Sidebamenu-sub">
                          <li className="Sidebamenu-sub-item">
                            <Link to="#">예약하기</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#">예약확인</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#">예약자 현황</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#">병원정보</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="Sidebamenu-item">
                        <button className="Sidebamenu-button">
                          <iconify-icon className="Sidebamenu-icon" icon="majesticons:chevron-down-line"></iconify-icon>
                          나의 관리
                        </button>
                        <ul className="Sidebamenu-sub">
                          <li className="Sidebamenu-sub-item">
                            <Link to="https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000">병원내역 조회</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="https://www.kahp.or.kr/ho/medi/intro.do">건강검진</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#">BMI측정</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#">병원정보</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="Sidebamenu-item">
                        <button className="Sidebamenu-button">
                          <iconify-icon className="menu-icon" icon="majesticons:chevron-down-line"></iconify-icon>
                          검색
                        </button>
                        <ul className="Sidebamenu-sub">
                          <li className="Sidebamenu-sub-item">
                            <Link to="#">내가 가본 병원</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#">가까운 병원</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#">인기병원</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="#">병원정보</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="Sidebamenu-item">
                        <button className="Sidebamenu-button">
                          <iconify-icon className="Sidebamenu-icon" icon="majesticons:chevron-down-line"></iconify-icon>
                          FAQ
                        </button>
                      </li>
                    </ul>
              </div>
              <section >
                  <div className="login-wrap">
                      <div className="login-id-wrap">
                        <input placeholder="아이디" type="text" className="input-id"></input>
                      </div>
                      <div className="login-pw-wrap">
                        <input placeholder="비밀번호" type="password" className="input-pw"></input>
                      </div>
                      <div className="login-btn-wrap">
                        <button className="login-btn"onClick={AdminClick}>로그인</button>
                      </div>
                      <div className="under-login">
                        <span className="stay-check">
                          <input type="checkbox" name="stay-btn" value="stay" className="stay-checkbox" />로그인 상태 유지
                        </span>
                      </div>
                      <div className="login-btn1">         
                        <button onClick={mbClick}>회원가입</button>       
                        <button onClick={pageClick}>내정보수정</button>        
                      </div>
                  </div> 
      
              </section>
          </main>
    </Container>  
  </>
}  