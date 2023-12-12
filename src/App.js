import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
// React Routerから必要なコンポーネントをインポートする
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // クライアントサイドのルーティングを提供する基本的な要素
    <Router>
      {/* 複数のRouteコンポーネントをグループ化する */}
      <Routes>
        {/* 特定のパスに対して指定したコンポーネントを表示させる */}
        {/* pathプロパティでパスを指定し、elementプロパティで表示するコンポーネントを指定する */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
