import { useState } from 'react';
import photo1 from '../test1.png';

const TwoApp = () => {
    const [photo, setPhoto] = useState('1');

    const radioClick = (e) => {
        setPhoto(e.target.value);
    }

    return (
        <div>
            <h3 className="alert alert-success">TwoApp - load images</h3>
            <div style={{margin: '10px'}}>
                <h5>import 이용하여 image load</h5>
                <img alt="usedImport" src={photo1} style={{width: '100px'}} />
                <hr />
                <h5>require 이용하여 image load</h5>
                <img alt="usedRequire" src={require('../test2.png')} style={{width: '100px'}} />
                <hr />
                <h5>radio 이용하여 image 나타내기</h5>
                <label>
                    <input type='radio' name='photo'
                    defaultValue={'1'} defaultChecked onClick={(e) => radioClick(e)} /> Image 1
                </label>
                &nbsp;
                <label>
                    <input type='radio' name='photo'
                    defaultValue={'2'} onClick={(e) => radioClick(e)} /> Image 2
                </label>
                &nbsp;
                <label>
                    <input type='radio' name='photo'
                    defaultValue={'3'} onClick={(e) => radioClick(e)} /> Image 3
                </label>
                <br />
                <img style={{width: '200px', margin: '10px'}} src={require('../test' + photo + '.png')} alt='radioPhoto' />
            </div>
        </div>
    )
}

export default TwoApp