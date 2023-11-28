import React from 'react';
import './Login.scss'
import axios from 'axios';
import { API_URL } from '../../config/contansts'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atoms/loginState";

const Login = () => {
    const [islogin, setIslogin] = useRecoilState(loginState); //useState와 거의 비슷한 사용법
    const navigate = useNavigate();
    const onLogin = async (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const pwd = e.target.pwd.value;
        console.log("id: ", id);
        console.log("pwd: ", pwd);
        const res = await axios.post(
            `${API_URL}/user/login`, 
            {id, pwd},
            { withCredentials: true },
            // { profile: { id, pwd } }, 
        );
        console.log("login_res: ", res);
        if (res.status === 200) {
            setIslogin(true);
            console.log("islogin: ", islogin);
            navigate("/")
        }
        console.log("Login.res: ",res.status);
    }
    return (
            <form id="login-form" onSubmit={onLogin}>
                <h3>MEMBER</h3>
                <h1>로그인</h1>
                <div id="login-input">
                    <li><input id="id" type="text" placeholder='아이디'/></li>
                    <li><input id="pwd" type="password" placeholder='비밀번호'/></li>
                </div>
                
                <li>
                    <button type="submit" id='login-btn'>LOGIN</button>
                </li>

                <li id='find-id-form'>
                    <a href="/join">회원가입</a>
                    <a href="/find-id">아이디/비밀번호 찾기</a>
                </li>

            </form>
    );
}

export default Login;