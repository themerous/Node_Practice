import { AccessAlarm, BookmarkAdd, DeleteForeverOutlined } from "@mui/icons-material";
import React from 'react';
import styled from 'styled-components';

const OneApp = () => {
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: orange;
        background-color: pink;
    `;
    const MyButton = styled.button`

    `;
    return (
        <div>
            <h3 className="alert alert-danger">OneApp - icons-material</h3>
            <h1>Hello</h1>
            <Title>Hello</Title>
        </div>
    )
}

export default OneApp