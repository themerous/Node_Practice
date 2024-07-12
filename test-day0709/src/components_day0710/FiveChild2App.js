import React from 'react'

const FiveChild2App = ({photo, msg}) => {
    return (
        <div className='box1'>
            <img alt='' src={require(`../${photo}`)} className='small' />
            <b>{msg}</b>
        </div>
    )
}

export default FiveChild2App