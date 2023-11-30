import { Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react";
import "./css/navbar.css";

const Container=styled.div`
    width: 100vw;
    background-color: khaki;
`
const Nav=styled.nav`
    padding-top: 10px;
    width: 1200px;
    /* margin: 0 auto; */
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    
    li{
        
        line-height:50px;
        list-style: none;
        
        font-weight: bold;
        font-size: 25px;
        z-index: 1;
        text-align:center; 
    }
    li a:hover{
    color: rgb(55, 55, 198);
    li a {
        color: black;
        text-decoration: none;
        /* text-underline-position : under; */
    }
}

`;
const NavBrand = styled.div`
    display: flex;
    margin-left: 30px;
    h2 {
        margin-left: 30px;
    }
`;
const MainMenu = styled.ul`
    display: flex;
    flex-direction: column;    
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 500px;

        li {
            width: calc( 25% );
            text-align: center;            
        }
        a {
        color: black;
        text-decoration: none;
        /* text-underline-position : under; */
    }

    }
`;
const SubMenu = styled.div`
    width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: start;
    ul {
        display: flex;
        flex-direction: column;
        align-items:center;
        width: calc( 25% );
        text-align: center;
        position: relative;
        li {
            width: 100%;
        }
        li a:hover{
            color: #ff7200;
        }
    }
    max-height: ${({ "$isSubContainerVisible": isSubContainerVisible }) =>
    isSubContainerVisible ? '500px' : '0'};
    opacity: ${({ "$isSubContainerVisible": isSubContainerVisible }) =>
    isSubContainerVisible ? '1' : '0.8'};
    overflow: hidden;
    transition: max-height 600ms, opacity 600ms;
`;
const Search = styled.div`
    position: relative;
    left: 100px;
    input{
        height: 40px;
        border: 1px solid black;
        font-size: 16px;
        margin-left: 10px;
    }
    button{
    width: 100px;
    height: 40px;
    background: #ff7200;
    border: 2px solid #ff7200;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
    border-bottom-right-radius: 5px;
    border-bottom-right-radius: 5px;
    }
`;

export function Navbar(){
    const navigate=useNavigate();
    const [inputValue,setInputValue]=useState("");
    const [isSubContainerVisible, setSubContainerVisible]=useState(false);

    const handleMouseEnter = () => {
        setSubContainerVisible(true);
    };
    
    const handleMouseLeave = () => {
        setSubContainerVisible(false);
    };
    
return<>
<Container>
    <Nav>
        <NavBrand>
            <div className="brand-icon">HP</div>
            <h2>병원 예약시스템</h2>
        </NavBrand>
        <MainMenu onMouseLeave={handleMouseLeave}>
            <ul >
                <li><Link to="./home" onMouseEnter={handleMouseEnter}>진료예약</Link></li>
                <li><Link to="./mg" onMouseEnter={handleMouseEnter}>나의 관리</Link></li>
                <li><Link to="./sc" onMouseEnter={handleMouseEnter}>검색</Link> </li>
                <li><Link to="./faq" onMouseEnter={handleMouseEnter}>FAQ</Link></li>
            </ul>
            <SubMenu $isSubContainerVisible={isSubContainerVisible}>
                <ul>
                    <li><Link to="./reservation">예약하기</Link></li>
                    <li><Link to="./reservationConfirm">예약확인</Link></li>
                    <li><Link to="./reservationStatus">예약자현황</Link></li>
                    <li><Link to="./hospitalInformation">병원정보</Link></li>
                </ul>
                <ul>
                    <li><Link to="https://www.hira.or.kr/dummy.do?pgmid=HIRAA030009200000"target="_blank">병원내역조회</Link></li>
                    <li><Link to="https://www.kahp.or.kr/ho/medi/intro.do"target="_blank">건강검진</Link></li>
                    <li><Link to="./BmiMeasurement">BMI측정</Link></li>
                </ul>
                <ul>
                    <li><Link to="./hospitalInformation">내가 가본병원</Link></li>
                    <li><Link to="./nearestHospital">가까운병원</Link></li>
                    <li><Link to="./popularHospitals">인기병원</Link></li>
                </ul>
            </SubMenu>
        </MainMenu>
        <Search>
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="검색어를 입력하세요." />
            <button  onClick={()=>{
                setInputValue("");
                navigate(`/search?keyword=${inputValue}`);
            }}>검색</button>
        </Search>            
    </Nav>
</Container>

<Outlet/>
</>
}