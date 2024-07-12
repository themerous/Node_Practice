import { Alert, Switch } from "@mui/material"
import { useState } from "react"
import img1 from '../test1.png'
import img2 from '../test2.png'

const ThreeApp = () => {
    const [show, setShow] = useState(true);
    const [visible, setVisible] = useState('visible');
    const photoStyle = {
        width: '200px',
        height: '200px',
        border: '1px solid gray',
        borderRadius: '100px'
    }

    return (
        <div>
            <h3 className="alert alert-success">ThreeApp</h3>
            <Alert severity='info'>이미지 show/hide 하는 여러가지 방법</Alert>
            <label>
                <input type="checkbox" defaultChecked onChange={() => setShow(!show)} /> 이미지 1 show/hide
            </label>
            <br />
            {
                show && <img alt="" src={img1} style={photoStyle} />
            }
            <p> 이러한 경우 자리를 차지하지 않는다 </p>
            <hr />
            <Switch color="primary" defaultChecked onChange={() => {
                if(visible === 'visible') {
                    setVisible('hidden');
                }else {
                    setVisible('visible');
                }
            }} />
            <br />
            <img 
                alt="" src={img2} 
                style={{
                    width: '200px',
                    height: '200px',
                    border: '1px solid gray',
                    borderRadius: '100px', 
                    visibility: visible
                }} 
            />
        </div>
    )
}

export default ThreeApp