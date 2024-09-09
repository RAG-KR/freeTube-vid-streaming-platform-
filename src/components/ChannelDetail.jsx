import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos , channelCard} from './'

const ChannelDetail = () => {

  const {id} = useParams();

  return (
    <div>{id}</div>
  )
}

export default ChannelDetail