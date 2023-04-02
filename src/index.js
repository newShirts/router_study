import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>

      //Router의 종류
      //<BrowserRouter>: 주소만 변경하고, 페이지는 다시 불러오지 않는 방식이다. (즉 변경되는 컴포넌트 화면만 렌더링 됨.) <route path="/경로" element={<Home/>}/>
      //<HashRouter>: 구 버전 브라우저에서 <BrowserRouter>가 적용이 안될 경우 사용한다. abc.com/#/path/to/route
      //<MemoryRouter>: 브라우저 주소랑 상관없이 작동하므로 테스트 환경에서 사용하기 좋다. 임베디드웹앱, React native(앱)에서도 사용하기 좋다.

      //<Link>: a태그처럼 경로 이동 시 사용하지만 (주소 변경), 페이지가 새로고침 되지는 않음.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
