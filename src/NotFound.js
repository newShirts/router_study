import React from "react";
import './App.css';


const NotFound = () => {
    const text1 ={
        color: "red"
    }

    return(
        <div class="App-header">
            <h1 style={text1}>404</h1>
            <p><strong>Page not Found! :(</strong></p>
            <p>페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.</p>
            <p><a href="http://localhost:3000/">Go Home</a>을 클릭하면 메인 페이지로 이동합니다. </p>

        </div>
    )

}

export default NotFound;