import React from 'react';

import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Post from './Post';

const useStyle = makeStyles((theme)=>({
    button: {
        ...theme.myButton
    }
}))

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    )
}

export default Feed;
