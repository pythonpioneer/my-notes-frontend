import React from 'react';


export default function BackIcon(props) {
  return (
    <>
      <i onClick={props.onClick} className={`spin fa-solid fa-chevron-left ${props.theme === 'dark' ? 'placeholder-color' : ''}`} style={{ fontSize: "1.6em", ...props.style }}></i>
    </>
  )
}
