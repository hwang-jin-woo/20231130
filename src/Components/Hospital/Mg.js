import styled from "styled-components"
import "./css/mg.css";
import { Link,useNavigate } from "react-router-dom";
import mg1 from "./images/mg1.jpg"
import mg2 from "./images/mg2.jpg"
import mg3 from "./images/mg3.png"
import mg4 from "./images/mg4.jpg"
import {  AiOutlineMenu  } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { useState,useEffect } from "react";
import Login from "./Login";
const Container=styled.div`
  width: calc(100vw-10px);
  background-color:khaki ;
`

export function Mg(){
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

  const handleOpenNewTab = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };
  
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('isLogin')) {
      setIsLogin(true);
    }
  },[]);
  return<>
      <Container>    
      <main className="main">
        <div className="sidebar">
            <div className="menu-icon">
              <AiOutlineMenu />
            </div>
                  <div className="barbrand">        
                      <div className="sidebabrand-icon">HP</div>
                      <h2>병원 예약시스템</h2>
                    </div>
                    <div className="Sidebaicon1">
                      <button className="sidebarlogin"onClick={AdminClick}>
                        <div className="user-icon">
                          <AiOutlineUser />
                        </div>
                      <h3>로그인</h3>
                      </button>
                      <button className="sidebarmb"onClick={mbClick}>
                        <div className="login-icon">
                          <FiLogIn/>
                        </div>
                <h3>회원가입</h3>
                      </button>
                    </div>
                    <ul id="Sidebamenu">
                      <li className="Sidebamenu-item">
                        <div className="Sidebamenu-button">
                          <div className="down-icon">
                          진료예약<FiChevronDown />
                          </div>
                        </div>
                        <ul className="Sidebamenu-sub">
                          <li className="Sidebamenu-sub-item">
                            <Link to={"/reservation"}className="sidemenu">예약하기</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to={"/reservationConfirm"}className="sidemenu">예약확인</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to={"/reservationStatus"}className="sidemenu">예약자 현황</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to={"/hospitalInformation"}className="sidemenu">병원정보</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="Sidebamenu-item">
                        <div className="Sidebamenu-button">
                        <div className="down-icon">
                          나의관리<FiChevronDown />
                          </div>
                        </div>
                        <ul className="Sidebamenu-sub">
                          <li className="Sidebamenu-sub-item">
                            <Link to="https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000"target="_blank"className="sidemenu">병원내역 조회</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to="https://www.kahp.or.kr/ho/medi/intro.do"target="_blank"className="sidemenu">건강검진</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to={"/bmiMeasurement"}className="sidemenu">BMI측정</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="Sidebamenu-item">
                        <div className="Sidebamenu-button">                        
                          <div className="down-icon">
                              검색<FiChevronDown />
                            </div>
                        </div>
                        <ul className="Sidebamenu-sub">
                          <li className="Sidebamenu-sub-item">
                            <Link to={"/favoriteHospital"}className="sidemenu">내가 가본 병원</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to={"/nearestHospital"}className="sidemenu">가까운 병원</Link>
                          </li>
                          <li className="Sidebamenu-sub-item">
                            <Link to={"/popularHospitals"}className="sidemenu">인기병원</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="Sidebamenu-item">
                        <div className="Sidebamenu-button">
                          <Link to={"/reservationConfirm"}className="sidemenu">FAQ</Link>
                        </div>
                      </li>
                    </ul>
              </div>
              <section className="mg-section">
              <Login isLogin={isLogin} setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} mbClick={mbClick} pageClick={pageClick}/>
                  <div>
                    <ul className="buttons">        
                      <li><button className="button"onClick={() => handleOpenNewTab("https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000")}><h2>병원내역 조회</h2></button></li>
                      <li><button className="button"onClick= {() => handleOpenNewTab("https://www.kahp.or.kr/ho/medi/intro.do")}><h2>건강 검진</h2></button></li>
                      <li><Link to={"/BmiMeasurement"}><button className="button"><h2>BMI 측정</h2></button></Link></li>   
                      </ul>
                  </div>
            </section>
        </main>      
          <div className="mgimage">
            <img className="mgimage1"src={mg1} alt="sc"  />
            <img className="mgimage2"src={mg2}  alt="sc"  />
            <img className="mgimage3"src={mg3}  alt="sc"  />
            <img className="mgimage4"src={mg4}  alt="sc"  />
          </div>
    </Container>  
  </>
}