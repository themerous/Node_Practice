import { useState } from "react";

const ThreeApp = () => {
    const [number, setNumber] = useState(0);

    const numberStyle = {
        fontSize: '40px',
        color: 'red',
        marginLeft: '100px',
        textShadow: '3px 3px 3px 3px'
    }

    return (
        <div>
            <h3 className="alert alert-success">ThreeApp</h3>
            <div style={numberStyle}>{number}</div>
            <button type="button" className="btn btn-danger btn-sm" style={{marginLeft: '60px'}}
            onClick={() => setNumber(number - 1)}>감소</button>
            <button type="button" className="btn btn-success btn-sm"
            onClick={() => setNumber(number + 1)}>증가</button>
        </div>
    )
}

export default ThreeApp;