import React from "react";
import {useParams} from 'react-router-dom';

const data = {
    messi:{
        name: 'Messi',
        description: 'best footballer, born in Argentina'
    },

    gaga:{
        name: 'Lady GaGa',
        description: 'famous American Singer'
    }
};

const Profile =()=>{

    const params = useParams(); //파라미터를 연결해서 사용할 수 있게 해주는 함수
    // 파라미터를 활용할 수 있게 해주는 함수
    console.log(params);  //username -> ex.{username: 'gaga'}
    const profile = data[params.username]; //동적 키
    console.log(profile); //name, description -> ex.{name: 'Lady GaGa', description: 'famous American Singer'}

    return(
        <div>
            <h1>User Profile</h1>
                 { profile?( //삼항연산자
                    <div>
                        <h2>{profile.name}</h2>
                        <p>{profile.description}</p>
                    </div>
                          ) : (
                            <p>존재하지 않는 프로필입니다.</p>
                               )
                               //예시) http://localhost:3000/profiles/1234 에서 1234는 존재하지 않는 파라미터로
                               //profile 데이터에서 가져올 수 없기 때문에 false값이므로 삼항연산자에서 undefined로 반환
                 }


            

        </div>
    )

}

export default Profile;