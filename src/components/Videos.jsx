import React from 'react'
import {Stack ,Box} from '@mui/material';
import {VideoCard , ChannelCard} from './';

const Videos = ( {videos , direction} ) => {
  if (!videos?.length) return 'loading ...'

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
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

// import React from 'react';
// import { Stack, Box } from '@mui/material';
// import { VideoCard, ChannelCard } from './';

// const Videos = ({ videos }) => {
//   return (
//     <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
//       {videos.map((item, idx) => (
//         <Box key={idx} sx={{ width: '360px' }}> {/* Adjusted for 3 videos per row */}
//           {item.id.videoId && <VideoCard video={item} />}
//           {item.id.channelId && <ChannelCard channelDetail={item} />}
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// export default Videos;





