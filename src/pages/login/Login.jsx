// ReactとuserRefをインポート
import React, { useContext, useRef } from "react";
// スタイルシートをインポート
import "./Login.css";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../state/AuthContext";

// Loginコンポーネントの関数定義
export default function Login() {
  // useRefを使用してemailとpasswordの参照を作成
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  // フォームが送信されたときに呼び出されるハンドラ関数(e)はイベントという意味で、慣習的にeを使用する
  const handleSubmit = (e) => {
    // デフォルトのフォーム送信を防ぐ
    e.preventDefault();
    // emailとpasswordの値をログに出力。currentは、useRefオブジェクトのプロパティ。
    // console.log(email.current.value);
    // console.log(password.current.value);
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを、自分の手で。</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログインはこちら</p>
            <input
              type="email"
              className="loginInput"
              placeholder="Eメール"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  );
}
