import { Alert, Button, ImageList, ImageListItem } from '@mui/material'
import Axios from 'axios';
import React from 'react'

const Mycar = () => {
    const [itemData, setItemData] = React.useState([]);
    const [show, setShow] = React.useState(2);

    React.useEffect(() => {
        Axios.get('/mycar/list').then((res) => {
            setItemData(res.data);
            console.log(res.data);
        })
        
    }, []);

    return (
        <div>
            <Alert severity='error'> MyCar List </Alert>
            <hr />
            <Button onClick={() => setShow(1)}>목록1</Button>
            <Button onClick={() => setShow(2)}>목록2</Button>
            <hr />
            {
                show === 2 ?
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.carphoto}>
                            <img
                                srcSet={`https://kr.object.ncloudstorage.com/jpa-practice/test-bucket/${item.carphoto}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`https://kr.object.ncloudstorage.com/jpa-practice/test-bucket/${item.carphoto}?w=248&fit=crop&auto=format`}
                                alt={item.carname}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList>
                : 
                    <table style={{width: '400px'}}>
                        <thead>
                            <tr>
                                <th>자동차명</th>
                                <th>자동차색</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            itemData.map((item) => (
                                <tr style={{textAlign: 'center'}}>
                                    <td>{item.carname}</td>
                                    <td>{item.carprice}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default Mycar