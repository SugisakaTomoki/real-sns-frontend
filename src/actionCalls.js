import axios from "axios";

// ユーザーのログインを試みる非同期関数
export const loginCall = async (user, dispatch) => {
  // ログインが始まったことを通知するアクションをディスパッチ(アクションをストアに送信して、それに基づいて状態の変更を引き起こすこと)
  dispatch({ type: "LOGIN_START" });
  try {
    // ユーザーの認証を試みるためにサーバーにPOSTリクエストを送信
    const response = await axios.post("auth/login", user);
    // ログイン成功時には、成功したことを示すアクションをディスパッチ
    // サーバーから返されたデータがpayloadに含まれている
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    // エラーが発生した場合には、エラー情報を含むアクションをディスパッチ
    dispatch({ type: "LOGIN_ERROR", payload: err });
  }
};
