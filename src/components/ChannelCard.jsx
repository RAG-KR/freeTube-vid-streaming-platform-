import React from 'react'
import { Box , CardContent , CardMedia , Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail , marginTop}) => (
   
    <Box sx={{boxShadow : 'none' ,
     borderRadius : '20px',
     display:'flex',
     justifyContent : 'center',
     alignItems : 'center',
     height : '326px',
     margin : 'auto' , 
     marginTop : marginTop ,
     width : {xs : '356px' , md : '320px'}
     }}>
      <Link to = {`/channel/${channelDetail?.id.channelId}`}>
        <CardContent sx={{display: 'flex' , flexDirection : 'column' , justifyContent : 'center' , textAlign : 'center' , color : '#fff'}}>
          <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt = {channelDetail?.snippet?.title}
          sx={{borderRadius : '50%' , height : '180px' , width : '180px' , mb : 2 , border:'1px solid #e3e3e3'}}
          />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{fontSize : 14 , color : '#AAAAAA' , marginLeft : '5px'} }/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount &&(
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>

    </Box>
  
)

export default ChannelCard



// 
// ##################################################################################################################################################################################################################################################################################3#########################################################

// this below code is to fix the channel card not rendering at the timestamp 1:25:25. the error is caused because of using the {} braces instead of () when in rafce ,  i remove the return , it is atleast nesessary to change the brackets which i did not do let me test this thoery

// yess that was exaclty the isSecureContext. the below code from chat gpt indented the flexbox little better and solved this issue but i will stick to the original code and keep doing the rest of the things adding functionality. good learning exp

// import React from 'react';
// import { Box, CardContent, CardMedia, Typography } from '@mui/material';
// import { CheckCircle } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { demoProfilePicture } from '../utils/constants';

// const ChannelCard = ({ channelDetail }) => {
//   return (
//     <Box
//       sx={{
//         boxShadow: 'none',
//         borderRadius: '20px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: { xs: '356px', md: '320px' },
//         height: '326px',
//         margin: 'auto',
//       }}
//     >
//       <Link to={`/channel/${channelDetail?.id?.channelId}`}>
//         <CardContent
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             textAlign: 'center',
//             color: '#fff',
//           }}
//         >
//           <CardMedia
//             image={
//               channelDetail?.snippet?.thumbnails?.high?.url ||
//               demoProfilePicture
//             }
//             alt={channelDetail?.snippet?.title}
//             sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2 }}
//           />
//           <Typography variant="h6">
//             {channelDetail?.snippet?.title}
//             <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
//           </Typography>
//           {channelDetail?.statistics?.subscriberCount && (
//             <Typography>
//               {parseInt(
//                 channelDetail?.statistics?.subscriberCount
//               ).toLocaleString()}{' '}
//               Subscribers
//             </Typography>
//           )}
//         </CardContent>
//       </Link>
//     </Box>
//   );
// };

// export default ChannelCard;
