// importing requirements
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Grid } from '@mui/material';
import 'react-loading-skeleton/dist/skeleton.css';


// to display a loader like a note skeleton
export default function LoadNote({ theme }) {
    return (
        <Grid className={`mb-3 ${theme === 'dark' ? 'dark-note' : 'bg-light'}`} style={{ width: '', marginLeft: '2%', marginRight: '2%', borderRadius: '10px', height: '130px' }}>
            <Skeleton width={22} height={22} style={{ float: 'right', marginRight: '15px', marginTop: '15px', borderRadius: '50%', backgroundColor: (theme === 'dark' ? '#262626' : '') }}/>
            <Skeleton width={80} height={14} style={{ marginLeft: '20px', backgroundColor: (theme === 'dark' ? '#262626' : '') }} />
            <Skeleton width={50} height={10} style={{ marginLeft: '20px', backgroundColor: (theme === 'dark' ? '#262626' : '') }} />
            <Skeleton width={130} height={12} style={{ marginLeft: '20px', marginTop: '12px', backgroundColor: (theme === 'dark' ? '#262626' : '') }} />
            <Skeleton width={55} height={24} style={{ borderRadius: '10px', float: 'right', marginRight: '70px', marginBottom: '20px', backgroundColor: (theme === 'dark' ? '#262626' : '') }} />
        </Grid>
    )
}
