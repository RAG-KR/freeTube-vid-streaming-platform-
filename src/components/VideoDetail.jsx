import {useState , useEffect} from 'react'
import {Link , useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography , Box ,Stack} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Video } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  const [videoDetail, setvideoDetail] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setvideoDetail(data.items[0]));
  } , [id]);

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs : 'column' , md : 'row'}}>
        <Box flex = {1}>
          <Box sx={{width : '100%' , position : 'sticky' , top : '86px'}}></Box>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className = 'react-player' controls
            />
            <Typography>
              {/* {videoDetail.snippet.title} */}
            </Typography>

        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail

// error fix when im not able to render the title for the vid
// 
// 
// 
// import { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import ReactPlayer from 'react-player';
// import { Typography, Box, Stack } from '@mui/material';
// import { CheckCircle } from '@mui/icons-material';
// 
// import { Video } from './';
// import { fetchFromAPI } from '../utils/fetchFromAPI';
// 
// const VideoDetail = () => {
  // const [videoDetail, setvideoDetail] = useState(null);
  // const { id } = useParams();
// 
  // useEffect(() => {
    // fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      // .then((data) => setvideoDetail(data.items[0]));
  // }, [id]);
// 
  // Check if videoDetail or snippet is null before rendering
  // if (!videoDetail || !videoDetail.snippet) {
    // return <div>Loading...</div>; // Display a loading message or spinner
  // }
// 
  // return (
    // <Box minHeight="95vh">
      {/* <Stack direction={{ xs: 'column', md: 'row' }}> */}
        {/* <Box flex={1}> */}
          {/* <Box sx={{ width: '100%', position: 'sticky', top: '86px' }} /> */}
          {/* <ReactPlayer */}
            // url={`https://www.youtube.com/watch?v=${id}`}
            // className="react-player"
            // controls
          // />
          {/* <Typography variant="h5" fontWeight="bold" padding="10px"> */}
            {/* {videoDetail.snippet.title} */}
          {/* </Typography> */}
          {/* <Typography variant="subtitle1" color="gray" padding="10px"> */}
            {/* {videoDetail.snippet.channelTitle} */}
            {/* <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} /> */}
          {/* </Typography> */}
        {/* </Box> */}
      {/* </Stack> */}
    {/* </Box> */}
  // );
// };
// 
// export default VideoDetail;
// 