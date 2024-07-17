import { Alert } from '@mui/material'
import React from 'react'
import Group1 from './Group1'
import Group2 from './Group2'
import Group3 from './Group3'
import { NavLink, Route, Routes } from 'react-router-dom'

const Member = () => {
    return (
        <div>
            <Alert severity='error' style={{fontSize: '20px'}}>
                모임 멤버목록 - 중첩 Router 공부
            </Alert>
            <ul className='menu'>
                <NavLink to='/member/group1'>
                    <li>독서모임</li>
                </NavLink>
                <NavLink to='/member/group2'>
                    <li>자전거모임</li>
                </NavLink>
                <NavLink to='/member/group3'>
                    <li>코딩모임</li>
                </NavLink>
            </ul>
            <hr style={{clear: 'both'}} />
            <Routes>
                <Route path='group1' element={<Group1 />} />
                <Route path='group2' element={<Group2 />} />
                <Route path='group3' element={<Group3 />} />
            </Routes>
        </div>
    )
}

export default Member