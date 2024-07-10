import img1 from '../test1.png';
import img2 from '../test2.png';
import img3 from '../test3.png';

const SixApp = () => {
    const names = ["장미꽃", "안개꽃", "다알리아", "목수국", "채송화"];
    const photos = [img1, img2, img3]

    const nameList = names.map((item, idx) => <li key={idx}>{idx + 1} : {item}</li>);

    return (
        <div>
            <h3 className="alert alert-success">SixApp</h3>
            <h5> method 1 </h5>
            <ul>
                {nameList}
            </ul>
            <hr />
            <h5> method 2 </h5>
            {
                names.map((item, idx) => <div key={idx}>{idx} : {item}</div>)
            }
            <h5> 이미지 배열 출력 </h5>
            {
                photos.map((item, idx) => <img key={idx} src={item} alt={idx} style={{width: '200px'}}/>)
            }
        </div>
    )
}

export default SixApp