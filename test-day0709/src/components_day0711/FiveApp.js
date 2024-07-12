import { Alert } from '@mui/material'
import React from 'react'
import Axios from 'axios'

const FiveApp = () => {
    const [carList, setCarList] = React.useState([]);
    const list = () => {
        Axios.get('/mycar/list')
            .then(res => {
            setCarList(res.data);
        });
    }

    // 처음 한번만 호출
    React.useEffect(() => {
        list();
    }, []) // []를 줘야 한번만 호출한다
    return (
        <div>
            <Alert>FiveApp - Axios db 데이터 가져오기</Alert>
            <Alert>총 {carList.length}개의 데이터가 있습니다</Alert>
            {
                carList.map((item) => 
                    <div>
                        {item.num} : {item.carname} - 가격: {item.carprice}
                    </div>
                )
            }
        </div>
    )
}

export default FiveApp