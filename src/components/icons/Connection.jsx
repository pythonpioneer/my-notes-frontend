import React from 'react';


// when there is no internet
export default function NoConnection() {
    return (
        <>
            <svg className='shake-me' style={{ display: 'block', margin: 'auto', alignItems: 'center', justifyContent: 'center', marginTop: '20%' }} xmlns="http://www.w3.org/2000/svg" height="140" width="175" viewBox="0 0 640 512"><path d="M576 0c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V32c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM352 224V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32zM96 416v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V416c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
            <div style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: '20px', fontFamily: 'Georgia Verdana', fontStyle: 'italic', fontSize: '24px' }}>
                No Internet Connection Available
            </div>
        </>
    )
}
