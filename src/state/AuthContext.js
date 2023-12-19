import { createContext, useEffect, useReducer } from "react";
// 別ファイルで定義されたAuthReducerをインポート
import AuthReducer from "./AuthReducer";

// 初期状態を定義
const initialState = {
  // ユーザー情報を初期化
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: {
  //   _id: "6564519353c8a4af57e822b1",
  //   username: "tkg",
  //   email: "tkg@gmail.com",
  //   password: "abcdef",
  //   profilePicture: "/person/1.jpeg",
  //   coverPicture: "",
  //   followers: [],
  //   followings: [],
  //   isAdmin: false,
  // },
  //   データの取得中を示すフラグをfalseに設定
  isFetching: false,
  //   エラーが発生していない事を示すフラグをfalseに設定
  error: false,
};

// createContextを使用して新しいContextを作成
export const AuthContext = createContext(initialState);

// AuthContextProviderコンポーネントの定義
export const AuthContextProvider = ({ children }) => {
  // useReducerを使用して状態とディスパッチ関数を取得
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  //   AuthContext.Providerコンポーネントで提供する値を設定

  // useEffectフックを使用して、ユーザーオブジェクトが変更されたときにローカルストレージに保存する
  useEffect(() => {
    // ユーザーオブジェクトをJSON形式の文字列に変換し、ローカルストレージに保存
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
