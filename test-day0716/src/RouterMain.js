import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Food, About, Member } from './pages/index'
import Menu from './components/Menu'
import photo1 from './images/1.png'
import photo2 from './images/2.png'
import Mycar from './pages/Mycar'

const RouterMain = () => {
    return (
        <div>
            <Menu />
            <hr style={{clear: 'both'}} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/food" element={<Food />}>
                    <Route path=":food1" element={<Food />} />
                    <Route path=":food1/:food2" element={<Food />} /> {/* :varname시 varname으로 값을 전달 */}
                </Route>
                <Route path="/about" element={<About />}>
                    <Route path=":about1" element={<About />} />
                </Route>
                <Route path="/member/*" element={<Member />} />
                <Route path="/mycar/*" element={<Mycar />} />
                <Route path="/login/*" element={
                    <div>
                        <h2>로그인 메뉴 입니다</h2>
                        <img alt='' src={photo1} />
                        <About />
                    </div>
                } />
                <Route path="/*" element={
                    <div>
                        <h2>잘못된 페이지입니다</h2>
                        <img alt='' src={photo2} />
                    </div>
                } />
            </Routes>
        </div>
    )
}

export default RouterMain