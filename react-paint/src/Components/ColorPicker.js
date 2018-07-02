import React from 'react';

function ColorPicker(props){
    return(
        <div>
            <button onClick={() => props.handleClick('green')}>Green</button>
            <button onClick={() => props.handleClick('blue')}>Blue</button>
            <button onClick={() => props.handleClick('red')}>Red</button>
            <button onClick={() => props.handleClick('purple')}>Purple</button>
            <button onClick={() => props.handleClick('brown')}>Brown</button>
            <button onClick={() => props.handleClick('black')}>Black</button>
            <button onClick={() => props.handleClick('white')}>White</button>
            <button onClick={() => props.handleClick('pink')}>Pink</button>
            <button onClick={() => props.handleClick('yellow')}>Yellow</button>
            <button onClick={() => props.handleClick('orange')}>Orange</button>
        </div>
    )
}


export default ColorPicker;