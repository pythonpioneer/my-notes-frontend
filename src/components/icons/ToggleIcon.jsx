import React from 'react';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';


// it will show icon based on the themes
export default function ToggleIcon(props) {
	return (
		<div className="mt-1" style={{ marginRight: '1%' }} onClick={props.onClick}>
			{(props.theme === 'dark')
				? <MoonIcon />  // dark theme icon
				: <SunIcon />  // light theme icon
			}
		</div>
	)
}
