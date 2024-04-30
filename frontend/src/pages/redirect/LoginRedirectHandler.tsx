import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/utils/requestMethods";
import { userState } from "@stores/user";
import { useSetRecoilState } from "recoil";
import { fetchUserInfo, loginSuccess } from "@/apis/auth";

const LoginRedirectHandler = () => {
  const setUserState = useSetRecoilState(userState);
  const navigate = useNavigate();
  const code = new URLSearchParams(window.location.search).get("code");

  useEffect(() => {
    if (code) {
      getToken(code);
    }
  }, [code]);

  const getToken = (code: string) => {
    axios
      .post(`${BASE_URL}/auth/login/kakao`, code)
      .then((res) => {
        let accessToken = res.headers.authorization;
        console.log(accessToken);
        localStorage.setItem("access_token", accessToken);
        axios.defaults.headers.common["Authorization"] =
          `Bearer ${accessToken}`;

        fetchUserInfo();
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <p>로그인 처리 중입니다.</p>
    </>
  );
};

export default LoginRedirectHandler;
