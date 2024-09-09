import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

console.log('API Key:', process.env.REACT_APP_RAPID_API_KEY);

const Feed = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos,setVideos] = useState([])


useEffect(() => {
  // Update the URL to format the query string properly
  fetchFromAPI('search', { part: 'snippet', q: selectedCategory })
    .then((data) => setVideos(data.items))
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
          copyright 2022, freetube
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#f31503' }}>Videos</span>
        </Typography>
        <Videos videos={ videos } />
      </Box>
    </Stack>
  );
};

export default Feed;

// 
// ##################################################################################################################################################################################################################################################################################################################


// chat gpts feed to fix the extra padding on the right side of the screen



// import { useState, useEffect } from 'react';
// import { Box, Stack, Typography } from '@mui/material';
// import { Sidebar, Videos } from './';
// import { fetchFromAPI } from '../utils/fetchFromAPI';

// console.log('API Key:', process.env.REACT_APP_RAPID_API_KEY);

// const Feed = () => {
//   const [selectedCategory, setSelectedCategory] = useState('New');
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     fetchFromAPI('search', { part: 'snippet', q: selectedCategory })
//       .then((data) => setVideos(data.items))
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [selectedCategory]);

//   return (
//     <Stack
//       sx={{
//         flexDirection: { sx: 'column', md: 'row' },
//         justifyContent: 'space-between', // Added to evenly space the items
//       }}
//     >
//       <Box
//         sx={{
//           height: { sx: 'auto', md: '92vh' },
//           borderRight: '1px solid #3d3d3d',
//           px: { sx: 0, md: 2 },
//         }}
//       >
//         <Sidebar
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//         />
//         <Typography
//           className="copyright"
//           variant="body2"
//           sx={{ mt: 1.5, color: '#fff' }}
//         >
//           copyright 2022, freetube
//         </Typography>
//       </Box>

//       {/* Main Video Container */}
//       <Box
//         p={2}
//         sx={{
//           overflowY: 'auto',
//           height: '90vh',
//           flex: 2,
//           paddingRight: '0 !important', // Adjusted to remove the right-side padding
//         }}
//       >
//         <Typography
//           variant="h4"
//           fontWeight="bold"
//           mb={2}
//           sx={{ color: 'white' }}
//         >
//           {selectedCategory} <span style={{ color: '#f31503' }}>Videos</span>
//         </Typography>
//         <Videos videos={videos} />
//       </Box>
//     </Stack>
//   );
// };

// export default Feed;
