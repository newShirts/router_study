import React from "react";
import About from "./About";
import Home from "./Home";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import Board from "./Board";
import Boards from "./Boards";
import Layout from "./Layout";
import NotFound from "./NotFound";



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
        <Route element={<Layout/>}>
            {/* <Route path="/" element={<Home/>}/> */}
            {/* path="/"의 /경로는 localhost:3000이다. */}

            {/* path="/"대신 index를 사용하여 같은 기능을 하는 코드 */}
            <Route index element={<Home/>}/>
            
            <Route path="/about" element={<About/>}/>
            <Route path="/profiles/:username" element={<Profile/>}/>
            {/* :username이 url의 파라미터. Profiles.js의 data, Profile 컴포넌트와 연결*/}
        </Route>

        {/* 방법(1) 게시글 목록과 게시글 내용 분리 */}
            {/* <Route path="/boards" element={<Boards/>}/>
            <Route path="/boards/:id" element={<Board/>}/> */}
        {/* 방법(2) 게시글 내용이라는 하위 컴포넌트 진입 시 게시글 제목 목록인 상위 컴포넌트가 보여지게 함  */}
        <Route path="/boards" element={<Boards/>}>
            <Route path=":id" element={<Board/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
