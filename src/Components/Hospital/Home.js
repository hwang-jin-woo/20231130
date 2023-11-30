import styled from "styled-components"
import "./css/home.css";
import { Link, useNavigate} from "react-router-dom"
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


export function Home(){
  const navigate = useNavigate();
  
  const mbClick = () => {
    navigate('/Mb');
  };
  const pageClick = () => {
    navigate('/Mypage');
  };
  const loginClick = () => {
    navigate('/Login');
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const modalBackground = useRef();
  
  const [test, setTest] = useState('');
  
  function testLoading() {
    // 서버의 API를 호출하여 데이터 가져오기
    fetch('http://localhost:3301/api/test') // 백엔드 서버 주소를 사용
    .then((response) => response.json())
    .then((data) => {
      setTest(data);
    })
    .catch((error) => {
    });
  }

  useEffect(() => {
    testLoading();
  }, [test]);
  
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('isLogin')) {
      setIsLogin(true);
    }
  },[]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    console.log('open');
  };
  useEffect(() => {
    // 페이지 로딩 시 사이드바를 숨겨둘 경우
    setSidebarOpen(false);
  }, []);



  return<>
      <Container>    
        <main className="main">
          <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <div className="menu-icon"onClick={toggleSidebar}> 
              <AiOutlineMenu />
            </div>
                  <div className="barbrand">        
                      <div className="sidebabrand-icon">HP</div>
                      <h2>병원 예약시스템</h2>
                    </div>
                    <div className="Sidebaicon1">
                      <button className="sidebarlogin"onClick={loginClick}>
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
              <section className="section">
                    <Login isLogin={isLogin} setIsLogin={setIsLogin} userId={userId} setUserId={setUserId} password={password} setPassword={setPassword} mbClick={mbClick} pageClick={pageClick}/>
                    <div>
                      <ul className="buttons">        
                          <li>
                              <button className="button" onClick={() => setModalOpen(true)}>
                                <h2>예약 하기</h2>
                              </button>  
                            {
                              modalOpen &&
                              <div className="modal-container" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen(false);
                                }
                              }}>
                                <div className="modal-content">
                                <div className="tap-panels">
                                  <div className="tab-panel">
                                    <div className="date">날짜:<input type="date" /></div>
                                    <table>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <select name="nation">
                                              <option value="">병원을 선택하세요.</option>
                                              <optgroup label="병원">
                                                <option value="medc" >내과</option>
                                                <option value="surg">외과</option>
                                                <option value="dent">치과</option>
                                              </optgroup>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div><input type="text" /></div>
                                    <div>예약하기<input type="submit" value="Submit" /></div>
                                  </div>
                                </div>
                                  <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen1(true)}>
                                <h2>예약 확인</h2>
                              </button>  
                            {
                              modalOpen1 &&
                              <div className="modal-container1" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen1(false);
                                }
                              }}>
                                {test && test.length > 0 &&
                                  <ul  style={{ zIndex: 10000 }} >
                                    <li>no:{test[0].no}</li>
                                    <li>title:{test[0].title}</li>
                                    <li>content:{test[0].content}</li>
                                    <li>type:{test[0].type}</li>
                                  </ul>
                                  }
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen1(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen2(true)}>
                                <h2>예약자 현황</h2>
                              </button>  
                            {
                              modalOpen2 &&
                              <div className="modal-container2" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen2(false);
                                }
                              }}>
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen2(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>          
                          <li>
                              <button className="button" onClick={() => setModalOpen3(true)}>
                                <h2>병원 정보</h2>
                              </button>  
                            {
                              modalOpen3 &&
                              <div className="modal-container3" ref={modalBackground} onClick={e => {                                
                                if (e.target === modalBackground.current) {
                                  setModalOpen3(false);
                                }
                              }}>
                                <div className="modal-content">
                                  <button className="modal-close-btn" onClick={() => setModalOpen3(false)}>
                                    x
                                  </button>
                                </div>
                              </div>
                            }</li>        
                        </ul>
                    </div>
              </section>
          </main>
    </Container>  
  </>
}