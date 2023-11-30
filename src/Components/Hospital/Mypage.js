import {useNavigate} from "react-router-dom"
import "./css/mypage.css";
import React, { useState } from 'react';
import Axios from 'axios';

export function Mypage(){
    const navigate = useNavigate();

    // 사용자 정보를 담을 상태 변수들
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [userBirth, setUserBirth] = useState('');
    const [userGender, setUserGender] = useState('');
    const [userLocation, setUserLocation] = useState('');
    const [userPhone, setUserPhone] = useState('');

    // 회원 정보 수정 버튼 클릭 시 실행되는 함수
    const handleUpdate = () => {
          // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== document.getElementById('pswd2').value) {
    console.error('비밀번호와 비밀번호 재확인이 일치하지 않습니다.');
    return;
    }
      // 서버에 회원 정보 수정 요청을 보냄
    Axios.put(`/api/hospital/${userId}`, {
        user_pw: password,
        user_name: userName,
        user_gender: userGender,
        user_phone_num: userPhone,
        user_birth: userBirth,
        user_location: userLocation,
    })
    .then((response) => {
        // 회원 정보 수정 성공 시 처리
        console.log(response.data.message);
        navigate('/home');
    })
    .catch((error) => {
        // 회원 정보 수정 실패 시 처리
        console.error('회원 정보 수정 오류:', error);
    });
    };
return<>
        <div id="header">
            <span className="brand-icon">HP</span>
            <h2>병원 예약시스템</h2>
        </div>
        <div id="wrapper">
        <div id="content">
                <div>
                    <h3 className="join_title">
                        <label for="id">아이디</label>
                    </h3>
                    <span className="box int_id">
                        <input placeholder="아이디"type="text" id="id" onChange={(e) => setUserId(e.target.value)} className="int" maxlength="20" />               
                        <span className="step_url"></span>
                    </span>

                </div>
                <div>
                    <h3 className="join_title"><label for="pswd1">비밀번호</label></h3>
                    <span className="box int_pass">
                        <input placeholder="비밀번호"type="text" id="pswd1"onChange={(e) => setPassword(e.target.value)} className="int" maxlength="20" />
                        <span id="alertTxt">사용불가</span>
                    </span>

                </div>
                <div>
                    <h3 className="join_title"><label for="pswd2">비밀번호 재확인</label></h3>
                    <span className="box int_pass_check">
                        <input type="text" id="pswd2" className="int" maxlength="20" />
                    </span>

                </div>
                <div>
                    <h3 className="join_title"><label for="name">이름</label></h3>
                    <span className="box int_name">
                        <input type="text" id="name" onChange={(e) => setUserName(e.target.value)}className="int" maxlength="20" />
                    </span>

                </div>
                <div>
                    <h3 className="join_title"><label for="yy">생년월일</label></h3>
                    <div id="bir_wrap">
                        <div id="bir_yy">
                            <span className="box">
                                <input type="text" id="yy" onChange={(e) => setUserBirth(e.target.value)}className="int" maxlength="4" placeholder="년(4자)" />
                            </span>
                        </div>
                        <div id="bir_mm">
                            <span className="box">
                                <select id="mm" className="sel">
                                    <option>월</option>
                                    <option value="01">1</option>
                                    <option value="02">2</option>
                                    <option value="03">3</option>
                                    <option value="04">4</option>
                                    <option value="05">5</option>
                                    <option value="06">6</option>
                                    <option value="07">7</option>
                                    <option value="08">8</option>
                                    <option value="09">9</option>                                    
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </span>
                        </div>
                        <div id="bir_dd">
                            <span className="box">
                                <input type="text" id="dd" className="int" maxlength="2" placeholder="일" />
                            </span>
                        </div>
                    </div>
                    <span className="error_next_box"></span>    
                </div>
                <div>
                    <h3 className="join_title"><label for="gender">성별</label></h3>
                    <span className="box gender_code">
                        <select id="gender" className="sel" onChange={(e) => setUserGender(e.target.value)}>
                            <option>성별</option>
                            <option value="0">남자</option>
                            <option value="1">여자</option>
                        </select>                            
                    </span>
                    <span className="error_next_box">필수 정보입니다.</span>
                </div>
                <div>
                    <h3 className="join_title"><label for="name">주소</label></h3>
                    <span className="box address_name">
                        <input type="address" id="address" onChange={(e) => setUserLocation(e.target.value)}className="int" maxlength="" />
                    </span>
                    <span className="error_next_box"></span>
                </div>
                <div>
                    <h3 className="join_title"><label for="email">본인확인 이메일<span className="optional">(선택)</span></label></h3>
                    <span className="box int_email">
                        <input type="text" id="email" className="int" maxlength="100" placeholder="선택입력" />
                    </span>
                    <span className="error_next_box">이메일 주소를 다시 확인해주세요.</span>    
                </div>
                <div>
                    <h3 className="join_title"><label for="phoneNo">휴대전화</label></h3>
                    <span className="box int_mobile">
                        <input type="tel" id="mobile" onChange={(e) => setUserPhone(e.target.value)}className="int" maxlength="16" placeholder="전화번호 입력" />
                    </span>
                    <span className="cnum-btn-wrap">
                        <button type="button"id="cnum-btn">인증번호 받기</button>
                    </span>
                    <span className="signup-input-c" >
                        <input id="signup-cnum" type="text" placeholder="인증번호 입력하세요"></input>
                    </span>
                    <span className="error_next_box"></span>    
                </div>
                <div className="btn_area">
                    <button type="button" id="btnJoin"onClick={handleUpdate}>
                        <span>정보수정</span>
                    </button>
                </div>       
            </div> 
        </div> 
    </>
}