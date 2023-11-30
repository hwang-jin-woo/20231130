import styled from "styled-components"
import "./css/sc.css";
import { Link,useNavigate } from "react-router-dom";
import sc1 from "./images/sc1.jpg"
import sc2 from "./images/sc2.jpg"
import sc3 from "./images/sc3.jpg"
import {  AiOutlineMenu  } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { useState,useRef,useEffect } from "react";
import Login from "./Login";

const Container=styled.div`
  width: calc(100vw-10px);
  background-color:khaki ;
`


export function Sc(){
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
  const [modalOpen5, setModalOpen5] = useState(false);
  const [modalOpen6, setModalOpen6] = useState(false);
  const [modalOpen7, setModalOpen7] = useState(false);
  const modalBackground = useRef();

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
              <section className="sc-section">
              <Login isLogin={isLogin} setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} mbClick={mbClick} pageClick={pageClick}/>
                    <div>
                      <ul className="buttons">        
                      <li>
                              <button className="button" onClick={() => setModalOpen5(true)}>
                                <h2>내가  가본병원</h2>
                              </button>  
                            {
                              modalOpen5 &&
                              <div className="modal-container5" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen5(false);
                                }
                              }}>
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen5(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>         
                      <li>
                              <button className="button" onClick={() => setModalOpen6(true)}>
                                <h2>가까운 병원</h2>
                              </button>  
                            {
                              modalOpen6 &&
                              <div className="modal-container6" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen5(false);
                                }
                              }}>
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen6(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>         
                      <li>
                              <button className="button" onClick={() => setModalOpen7(true)}>
                                <h2>인기 병원</h2>
                              </button>  
                            {
                              modalOpen7 &&
                              <div className="modal-container7" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen5(false);
                                }
                              }}>
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen7(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>          
                        </ul>
                    </div>
              </section>
          </main>
          <div className="scimage">
            <img className="scimage1"src={sc1} alt="sc"  />
            <img className="scimage2"src={sc2}  alt="sc"  />
            <img className="scimage3"src={sc3}  alt="sc"  />
          </div>
    </Container>  
  </>
}