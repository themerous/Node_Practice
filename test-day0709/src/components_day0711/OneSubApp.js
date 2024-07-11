import React from 'react'

const OneSubApp = ({item, idx, delItem}) => {
    console.log(item);

    return (
        <>
            <tr>
                <td rowSpan={3} >
                    <img alt='' src={require(`../${item.sphoto}`)} style={{width: '120px', height: '130px', border: '1px solid gray'}}/>
                </td>
                <td>
                    상품명: {item.sname}
                </td>
            </tr>
            <tr>
                <td>    
                    상품가격: {item.sprice}
                </td>
            </tr>
            <tr>
                <td>
                    <input type='color' value={item.scolor} />
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button
                        onClick={() => {
                            // eslint-disable-next-line no-restricted-globals
                            if (confirm('삭제하시겠습니까?')) {
                            delItem(idx);
                            }
                        }}
                        >
                        삭제
                    </button>
                </td>
            </tr>
            <hr />
        </>
    )
}

export default OneSubApp