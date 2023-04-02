import React from "react";
import About from "./About";
import Home from "./Home";
import { Route, Routes, Link } from "react-router-dom";
import Profile from "./Profile";


const App =() => {
  return (
    <div>
      {/* 2. a태그와 Link비교: 새로고침 유무(리액트의 Link방식은 전체 페이지가 새로고침 되지 않고 필요한 부분만 렌더링된다.) */}

      <a href="/about">about으로 이동</a>

      <hr/>
        <ul>
          <li><Link to="/">메인 홈</Link></li>
          <li><Link to="/about">사이트 소개</Link></li>
        </ul>
      <hr/>

      {/* 1. <Routes>를 활용하여 url경로와 렌더링해줄 컴포넌트를 연결한다. */}
      <Routes>
        <Route path="/" element={<Home/>}/>  
        {/* path="/"의 /경로는 localhost:3000이다. */}
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles/:username" element={<Profile/>}/>

      </Routes>

      
    </div>
  );
}

export default App;
