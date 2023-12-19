import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
// React Routerから必要なコンポーネントをインポートする
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./state/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    // クライアントサイドのルーティングを提供する基本的な要素
    <Router>
      {/* 複数のRouteコンポーネントをグループ化する */}
      <Routes>
        {/* 特定のパスに対して指定したコンポーネントを表示させる */}
        {/* pathプロパティでパスを指定し、elementプロパティで表示するコンポーネントを指定する */}
        <Route path="/" element={user ? <Home /> : <Register />} />
        {/* 三項演算子を使用して、userがログインしている場合にルートディレクトリへ、リダイレクトする */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
