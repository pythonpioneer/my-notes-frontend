import React from 'react';


// when there is no internet
export default function NoConnection({ theme }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', // Set height to 100% of the viewport height
        }}>
            <svg className='shake-me' xmlns="http://www.w3.org/2000/svg" height="108" width="135" viewBox="0 0 640 512">
                <path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"/>
            </svg>
            <div style={{
                marginTop: '20px',
                fontFamily: 'Georgia, Verdana',
                fontStyle: 'italic',
                fontSize: '22px',
                color: theme === 'dark' ? 'whitesmoke' : '',
            }}>
                Ah, Oh!! Connection Lost!!
            </div>
        </div>
        
    )
}
