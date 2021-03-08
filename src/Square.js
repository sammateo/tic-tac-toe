import React from 'react';
import './styles.css';
function Square({value,onClick})
{
    const style = 'squares';
    return (
            <button className={style} onClick={onClick}>{value}</button>
        )
}

export default Square;