// Reduxのリデューサー関数
const AuthReducer = (state, action) => {
  // switch文を使用してアクションタイプに応じて異なる状態を返す
  switch (action.type) {
    // ログインが開始された場合の処理
    case "LOGIN_START":
      return {
        // ユーザー情報を初期化
        user: null,
        // データの取得中を示すフラグをtrueに設定
        isFetching: true,
        // エラーが発生していない事を示すグラフをfalseに設定
        error: false,
      };
    //   ログインが成功した場合の処理
    case "LOGIN_SUCCESS":
      return {
        // ログイン成功時にはアクションのpayloadに含まれるユーザー情報を設定
        user: action.payload,
        isFetching: false,
        error: false,
      };
    //   ログインでエラーが発生した場合の処理
    case "LOGIN_ERROR":
      return {
        user: null,
        isFetching: false,
        // エラー情報をアクションのpayloadに含まれるものに設定
        error: action.payload,
      };
    //   デフォルトのケース(アクションのタイプがマッチしない場合)
    default:
      // 現在の状態をそのまま返す
      return state;
  }
};

export default AuthReducer;
