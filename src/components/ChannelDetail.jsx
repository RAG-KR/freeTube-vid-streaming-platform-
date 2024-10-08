import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {ChannelCard, Videos , channelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null)
  const {id} = useParams();
  const [videos, setVideos] = useState([])

  console.log(ChannelDetail , videos);

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) =>setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) =>setVideos(data?.items));
  },[id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(246,158,227,1) 35%, rgba(0,212,255,1) 100%)' ,
          zIndex : 10,
          height :' 300px'
        }}
        />
        <ChannelCard channelDetail = {ChannelDetail} marginTop = '-110px' />
      </Box>
      <Box display='flex' p = '2'>
          <Box sx={{mr : {sm : '100px'}}} />
            <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail