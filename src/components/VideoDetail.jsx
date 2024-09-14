// import {useState , useEffect} from 'react'
// import {Link , useParams} from 'react-router-dom'
// import ReactPlayer from 'react-player'
// import { Typography , Box ,Stack} from '@mui/material'
// import { CheckCircle } from '@mui/icons-material'

// import { Videos } from './'
// import { fetchFromAPI } from '../utils/fetchFromAPI'

// const VideoDetail = () => {
//   const [videoDetail, setvideoDetail] = useState(null)
//   const [videos, setVideos] = useState(null)
//   const {id} = useParams()

//   useEffect(() => {
//     fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
//     .then((data) => setvideoDetail(data.items[0]));

//     fetchFromAPI(`videos?part=snippet&relatedToVideoId=${id}&type=video`)
//     .then((data) => setVideos(data.items))

//   } , [id]);


//     // Check if videoDetail or snippet is null before rendering
//   if (!videoDetail || !videoDetail.snippet) {
//     return <div>Loading...</div>; // Display a loading message or spinner
//   }


//   const {snippet : {title , channelID , channelTitle} , statistics : {viewCount , likeCount }} =  videoDetail

//   return (
//     <Box minHeight='95vh'>
//       <Stack direction={{xs : 'column' , md : 'row'}}>
//         <Box flex = {1}>
//           <Box sx={{width : '100%' , position : 'sticky' , top : '86px'}}></Box>
//             <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
//             className = 'react-player' controls
//             />
//              <Typography color = 'white' variant="h5" fontWeight="bold" padding="10px">
//               {title}
//             </Typography>
//             <Stack direction='row' justifyContent='space-between' sx={{color : '#fff'}} paddingY={1} px={2}>
//             <Link to={`/channel/${channelID}`}>
//               <Typography variant={{sm:'subtitle1' ,md : 'h6'}} color='#fff'>
//                 {channelTitle}
//                 <CheckCircle sx={{fontSize :'12px' , color : 'gray' , ml : '5px'}} />
//               </Typography>
//             </Link>
//             <Stack direction='row' gap='20px' alignItems='center'>
//               <Typography variant='body1' sx={{opacity : '0.7'}}>
//                 {parseInt(viewCount).toLocaleString()} views
//               </Typography>
//               <Typography variant='body1' sx={{opacity : '0.7'}}>
//                 {parseInt(likeCount).toLocaleString()} likes
//               </Typography>
//             </Stack>
            
//             </Stack>

//         </Box>
//         <Box px={2} py={{md : 1 , xs : 5}} justifyContent='center' alignItems='center'>
//         <Videos videos = {videos} direction = 'column'/>
//       </Box>
//       </Stack>


//     </Box>
//   )
// }

// export default VideoDetail

// error fix when im not able to render the title for the vid

// import { useState, useEffect } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import ReactPlayer from 'react-player';
// import { Typography, Box, Stack } from '@mui/material';
// import { CheckCircle } from '@mui/icons-material';

// import { Video } from './';
// import { fetchFromAPI } from '../utils/fetchFromAPI';

// const VideoDetail = () => {
//   const [videoDetail, setvideoDetail] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
//       .then((data) => setvideoDetail(data.items[0]));
//   }, [id]);

//   // Check if videoDetail or snippet is null before rendering
//   if (!videoDetail || !videoDetail.snippet) {
//     return <div>Loading...</div>; // Display a loading message or spinner
//   }



//   return (
//     <Box minHeight="95vh">
//       <Stack direction={{ xs: 'column', md: 'row' }}>
//         <Box flex={1}>
//           <Box sx={{ width: '100%', position: 'sticky', top: '86px' }} />
//           <ReactPlayer
//             url={`https://www.youtube.com/watch?v=${id}`}
//             className="react-player"
//             controls
//           />
//           <Typography color = 'fff' variant="h5" fontWeight="bold" padding="10px">
//             {videoDetail.snippet.title}
//           </Typography>
//           <Typography variant="subtitle1" color="gray" padding="2px">
//             {videoDetail.snippet.channelTitle}
//             <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
//           </Typography>
//         </Box>
//       </Stack>
//     </Box>
//   );
// };

// export default VideoDetail;


// #####################################################################################################################################################################################################################################################################################################


// below code workd the best for the side recomendatins fixed everything chat gpts gr8 thanks

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch video details
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    // Fetch related videos
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  // Check if videoDetail or snippet is null before rendering
  if (!videoDetail || !videoDetail.snippet) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }} />
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          <Typography color="white" variant="h5" fontWeight="bold" padding="10px">
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} paddingY={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff">
                {channelTitle}
                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: '0.7' }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: '0.7' }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
