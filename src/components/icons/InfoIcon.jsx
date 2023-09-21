import React from 'react';

/**
 * An Info icon component
 * @param {string} color - It takes the color of the icon
 * @param {string} fontSize - It takes the font size of the icon
 * @returns {JSX.Element} - It returns an info icon.
 */
export function InfoIcon(props) {
  return (
    <>
        <i className="fa-solid fa-circle-info"
          style={{ 
            fontSize: props?.fontSize, 
            zIndex: "0", 
            position: "absolute", 
            top: "50%", 
            right: "10px", 
            transform: "translateY(-50%)", 
            color: props?.color 
            }}
        ></i>
    </>
  )
}

// setting the default value for the properties
InfoIcon.defaultProps = {
    color: "#831100",
    fontSize: "1.5em",
}
