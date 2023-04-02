// import React from "react";
// import { useLocation } from "react-router-dom";


// const About = () => {

//     const location = useLocation();

//     //useLocation에 대하여
//     //hash: 주소의 # 문자열 뒤의 값
//     //key: location 객체의 고유 값
//     //pathname: 현재 주소의 경로
//     //search: 맨 앞의 ? 문자를 포함한 쿼리스트링 값
//     //state: 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
    
//     return(
//         <div>
//             <h1>About</h1>
//             <p>이 사이트는 리액트 라우터를 실습해보는 예제 프로젝트 입니다.</p>
//             <p>쿼리스트링 search: {location.search} </p>
//             <p>쿼리스트링 hash: {location.hash} </p>
//             <p>쿼리스트링 key: {location.key} </p>
//             <p>쿼리스트링 state: {location.state} </p>
//             <p>쿼리스트링 pathname: {location.pathname} </p>
//         </div>
//     )


// }

// export default About;

import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {


    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');
    
    const onToggleDetail =()=>{
    setSearchParams({mode, detail: detail==='true'?false:true});
    }

    const onIncreaseMode =()=>{
    const nextMode = mode===null? 1: parseInt(mode) +1;
    setSearchParams({mode: nextMode, detail});
    }
    return(
        <div>
            <h1>About</h1>
            <p>이 사이트는 리액트 라우터를 실습해보는 예제 프로젝트 입니다.</p>
            <p>detail: {detail}</p>
            <p>mode: {mode} </p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode +1</button>
        </div>
    )


}

export default About;