import React from 'react'
import {Stack ,Box} from '@mui/material';
import {VideoCard , ChannelCard} from './';

const Videos = ( {videos} ) => {


  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item , idx)=>(
        <Box key = {idx}>
          {item.id.videoId && <VideoCard video = {item}/>}
          {item.id.channelId && <ChannelCard channelDetail= {item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos

// ##################################################################################################################################################################################################################################################################################################################

// spacing is changed using chatgpt any version of this file can be used


// import { Stack, Box } from '@mui/material';
// import VideoCard from './VideoCard';

// const Videos = ({ videos }) => {
//   if (!videos?.length) return 'Loading...';

//   return (
//     <Stack
//       direction="row"
//       flexWrap="wrap"
//       justifyContent="center" // Ensures even spacing
//       gap={2}
//       sx={{
//         rowGap: '20px', // Adjust the vertical spacing between rows
//       }}
//     >
//       {videos.map((video, idx) => (
//         <Box
//           key={idx}
//           sx={{
//             flex: '1 1 30%', // This ensures 3 videos per row (3 x 30% + gaps)
//             maxWidth: '320px', // Limits the width for each video
//           }}
//         >
//           <VideoCard video={video} />
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// export default Videos;
