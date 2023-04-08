import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {

    return(
        <div>
            <h1>Home</h1>
            <p>홈 메인 페이지! 가장 먼저 보여지는 페이지</p>

            <ul>
                <li>
                    <Link to="/about">About the Website</Link>
                </li>
                <li>
                    <Link to="/profiles/messi">Messi Profile</Link>
                </li>
                <li>
                    <Link to="/profiles/gaga">Lady GaGa Profile</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필입니다.</Link>
                </li>
                <li>
                    <Link to="/boards">게시글 목록</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;