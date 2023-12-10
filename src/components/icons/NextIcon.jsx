import React from 'react';


export default function NextIcon(props) {
  return (
    <>
        <i className="spin fa-solid fa-chevron-right" style={{ fontSize: "1.6em", ...props.style }} onClick={props.onClick}></i>
    </>
  )
}
