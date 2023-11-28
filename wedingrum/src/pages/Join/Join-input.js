import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Join-input.scss'
import { API_URL } from '../../config/contansts'
const Joininput = () => {
    const navigate = useNavigate();

    const onsubmitJoin = async (e) => {
        e.preventDefault();
        const id = e.target.id.value
        const pwd = e.target.pwd.value
        const confirmPwd = e.target.confirmPwd.value
        const name = e.target.name.value
        const gender = e.target.gender.value
        const birth = e.target.birth.value
        const phone = e.target.phone.value
        const companionName = e.target.companionName.value
        const companionPhone = e.target.companionPhone.value

        // pwd === confirmPwd && id !== "" && pwd !== "" && confirmPwd !== "" && name !== "" && phone !== "" && gender !== ""&& birth !==""
        // && companionPhone !==""&&companionName!==""

        if(true){
            console.log("g c c : ",gender, companionName, companionPhone);
            await axios.post(`${API_URL}/user/join`,{name, id, pwd, phone, birth, gender, companionName, companionPhone})
            .then(() =>{
                alert("가입성공!");
                navigate('/');  
            })
            .catch(err =>{
                console.error(err);
            })
        }else{
            return alert("전부 입력해주세요");
        }
    };

    return (
<form id="join-input-form" onSubmit={onsubmitJoin} >
    <h3>MEMBER</h3>
    <h1>회원가입</h1>

        <ul id='join-input'>
            <li>
                <div className='input-box'>
                    <h5>이름 *</h5><input id='name' type="text" placeholder='이름'/>
                </div>
                <div>
                    <h5>아이디 *</h5><input id='id' type="text" placeholder='영문,숫자8자~16자로 입력해주세요'/>
                </div>
            </li>
            <li>
                <div className='input-box'>
                    <h5>비밀번호 *</h5><input id='pwd' type="password" placeholder='비밀번호 입력'/>
                </div>
                <div>
                    <h5>비밀번호 확인 *</h5><input id='confirmPwd' type="password" placeholder='비밀번호 재입력'/>
                </div>
            </li>
            <li>
                <div className='input-box'>
                    <h5>전화번호 *</h5><input id='phone' type="text" placeholder='숫자만 입력해주세요'/>
                </div>
                <div className='input-box'>
                    <h5>생년월일 성별 *</h5><input id='birth' type="date" />
                    <div>
                        <input type="radio" className='gender' id='gender' name="gender" value="man"/>남
                        <input type="radio" className='gender' id='gender' name="gender" value="woman"/>여
                    </div>
                </div>
            </li>
            <li>
                <div className='input-box'>
                    <h5>배우자 이름 *</h5><input id='companionName' type="text" />
                </div>
                <div className='input-box'>
                    <h5>배우자 전화번호 *</h5><input id='companionPhone' type="text" />
                </div>
            </li>
            <li>
                <button type="submit" id='join-btn'>회원가입</button>
            </li>

        </ul>

</form>
    );
}

export default Joininput;