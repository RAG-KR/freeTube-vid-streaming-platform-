// import { Link } from 'react-router-dom'
// import { Card , CardContent , CardMedia , Typography } from '@mui/material'
// import { CheckCircle } from '@mui/icons-material'
// import { demoThumbnailUrl , demoVideoUrl , demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants'


// const VideoCard = ({video : {id : {videoId} , snippet}}) => {
//   // console.log(videoId , snippet);
//   return (
//     <Card sx = {{width : {md : '320px' , xs : '100%'} , boxShadow : 'none' , borderRadius : 0}}>
//       <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
//         <CardMedia image={
//           snippet?.thumbnails?.high?.url}
//           alt = {snippet?.title}
//           sx = {{width : 358 , height : 180}}
//           />
//       </Link>
//       <CardContent sx={{backgroundColor : '#1e1e1e' , height : '106px'}}>
//         <Link to = {videoId? `/video/${videoId}` : demoVideoUrl}>
//         <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
//           {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
//         </Typography>
//         </Link>

//         {/* for channel render */}
//         <Link to = {snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
//         <Typography variant='subtitle2' fontWeight='bold' color='#AAAAAA'>
//           {snippet?.channelTitle || demoChannelTitle}
//           <CheckCircle sx={{fontSize : 12 , color : '#AAAAAA' , marginLeft : '5px'} }/>
//         </Typography>
//         </Link>
//         </CardContent>
//     </Card>
//   )
// }

// export default VideoCard



// ########################################################################################################################################################################################################################################################################################################################################################################################################################

// chat gpts solution for spacing out the vid cards properly and dynamically

import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoThumbnailUrl } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: {xs: '100%' , md: '360px' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoVideoUrl}
          alt={snippet?.title}
          sx={{ width: '100%', height: '202px' }} // 16:9 aspect ratio (360px width, 202px height)
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='#AAAAAA'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: '#AAAAAA', marginLeft: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

