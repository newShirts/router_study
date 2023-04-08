
//테스트 url 주소 : http://localhost:3000/about?detail=true&mode=1

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
//             <p>이 사이트는 리액트 라우터를 실습해보는 예제 프로젝트 입니다. 다음은 useLocation의 속성</p>
//             <p>쿼리스트링 search: {location.search} </p>
//             <p>쿼리스트링 key: {location.key} </p>
//             <p>쿼리스트링 pathname: {location.pathname} </p>
//             <p>쿼리스트링 state: {location.state} </p>
//             <p>쿼리스트링 hash: {location.hash} </p>
//         </div>
//     )


// }

// export default About;

import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();

    const detail = searchParams.get('detail');
    console.log(detail);
    //serchParams.get('url객체의 key값')
    const mode = searchParams.get('mode');
    console.log(mode)
    
    const onToggleDetail =()=>{
    setSearchParams({mode, detail: detail==='true'?false:true});
    }

    const onIncreaseMode =()=>{
    //테스트해보기- 방법: mode+1 버튼 클릭 시 함수 코드가 실행됨.

     console.log(typeof(1))  //number
     console.log(typeof("1"))  //string
     console.log(typeof(1+"1"))  //string
     console.log(1+"1") //11
     console.log(1+1) //2
     console.log(mode) //1
     console.log(typeof(mode)) //string

    const nextMode = mode===null? 1: parseInt(mode) +1;
    //테스트 url: http://localhost:3000/about?detail=true
    //mode값이 null일 때 onIncreaseMode 버튼을 클릭하면 mode값이 1이 됨.
    setSearchParams({mode: nextMode, detail});
    }
    return(
        <div>
            <h1>About</h1>
            <p>이 사이트는 리액트 라우터를 실습해보는 예제 프로젝트 입니다.</p>
            <p>detail: {detail}</p>
            <p>mode: {mode} </p>
            <button onClick={onToggleDetail}>Toggle detail</button> &nbsp;&nbsp;
            <button onClick={onIncreaseMode}>mode +1</button>
        </div>
    )


}

export default About;