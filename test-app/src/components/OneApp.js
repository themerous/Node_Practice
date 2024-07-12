// First Component in style of Class
// After Hooks was developed, Function is used more often than class
import { Component } from "react";
import test1 from '../test1.png';
import test2 from '../test2.png';

class OneApp extends Component {
    render() {
        return (
        <div>
            <h1 className="alert alert-danger">OneApp</h1>
            <h5>public 의 사진 가져오기</h5>
            <img src="./logo192.png" alt="사진1" width={200}/>
            <img src="./logo512.png" alt="사진2" style={{width: '200px', border: '5px solid green', borderRadius: '50px 20px 100px 10px'}}/>
            <h5>src 의 사진 가져오기</h5>
            <img src={test1} alt="테스트1"/>
            <img src={test2} alt="테스트2"/>
        </div>
    )
  }
}

export default OneApp;  //default는 파일 내에서 단 한번만 사용 가능하다 import 시 마음대로 이름 지정 가능