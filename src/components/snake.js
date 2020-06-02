import React from 'react';
import Snake from '../images/icon.png';


export default (props) => {
  return (
    <div>
      {props.snakeDot.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        }
        return (
          <div  key={i} style={style} className="snake" alt="emoji" />
        )
      })}
      
    </div>
  )
}