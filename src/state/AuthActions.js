// ユーザー入力に応じたアクションの設定

// ログイン開始アクションを作成するアクションクリエーター
export const loginStart = (user) => ({
  type: "LOGIN_START",
});

// ログイン成功アクションを作成するアクションクリエーター
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  //   成功時にユーザー情報を連携するpayloadプロパティを追加
  payload: user,
});

// ログインエラーアクションを作成するアクションクリエーター
export const loginError = (error) => ({
  type: "LOGIN_ERROR",
  //   エラー時にエラーメッセージを携帯するpayloadプロパティを追加
  payload: error,
});
