import React from 'react';


export default function BackIcon(props) {
  return (
    <>
      <i onClick={props.handleClose} className="spin fa-solid fa-chevron-left" style={{ fontSize: "1.6em", ...props.style }}></i>
    </>
  )
}
