
import styled from "styled-components";
import Axios from 'axios';
import "./css/home.css";

const LoginWrap = styled.div`
padding-bottom: 10px;
  position: relative;
  width: 12%;
  left: 1200px;
  top: 30px;
  font-size: 20px;
  font-weight: bold;
`;

export default function Login({ isLogin, setIsLogin, userId, setUserId, password, setPassword, mbClick, pageClick }) {

  const handleLogin = () => {
    console.log(userId);
    Axios.post('http://localhost:3301/api/login', {
      user_id: userId,
      user_pw: password,
    })
      .then((response) => {
        if (response.data.isLogin) {
          sessionStorage.setItem('isLogin', true);
          setIsLogin(true);

        } else {
          
        }
      })
      .catch((error) => {
        // 로그인 실패 시 처리
        console.error('로그인 오류:', error.response.data.message);
        // 로그인 실패 시 사용자에게 알림 등을 추가할 수 있습니다.
      });
  };

  function handleLogout() {
    setIsLogin(false);
    sessionStorage.removeItem('isLogin');
  }

  return (
    <>
                  {!isLogin &&
                  <LoginWrap>
                      <div className="login-id-wrap">
                        <input placeholder="아이디" type="text" className="input-id" onChange={(e) => setUserId(e.target.value)}></input>
                      </div>
                      <div className="login-pw-wrap">
                        <input placeholder="비밀번호" type="password" className="input-pw" onChange={(e) => setPassword(e.target.value)}></input>
                      </div>
                      <div className="login-btn-wrap">
                        <button className="login-btn"onClick={handleLogin}>로그인</button>
                      </div>
                      <div className="under-login">
                        <span className="stay-check">
                          <input type="checkbox" name="stay-btn" value="stay" className="stay-checkbox" />로그인 상태 유지
                        </span>
                      </div>
                      <div className="login-btn1">         
                        <button  className="login-btn2"onClick={mbClick}>회원가입</button>       
                        <button  className="login-btn2"onClick={pageClick}>내정보수정</button>        
                      </div>
                  </LoginWrap> 
                }
                {isLogin &&
                  <div className="login-wrap" >
                      <button onClick={handleLogout}>로그아웃</button>
                  </div> 
                }
    </>
  )

}