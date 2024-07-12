import { Alert } from '@mui/material'
import React from 'react'
import FiveChild1App from './FiveChild1App'
import FiveChild2App from './FiveChild2App'

const FiveApp = () => {
    return (
        <div>
            <Alert>FiveApp - 부모/자식 컴포넌트의 통신 #1</Alert>
            <h5>FiveChildApp 컴포넌트 호출</h5>
            <FiveChild1App irum={'이영자'} age={23} addr={'서울'} />
            <FiveChild1App irum={'이영자'} age={23} addr={'서울'} />
            <FiveChild1App irum={'이영자'} age={23} addr={'서울'} />
            <FiveChild2App irum={'이영자'} photo={"test1.png"} msg={'서울'}  />
            <FiveChild2App irum={'이영자'} photo={"test2.png"} msg={'서울'} />
        </div>
    )
}

export default FiveApp