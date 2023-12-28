import React from 'react';


export default function SortIcon({ onClick }) {
	return (
		<>
			<i className="fa-solid fa-right-left fa-rotate-90" onClick={onClick}></i>
		</>
	)
}
