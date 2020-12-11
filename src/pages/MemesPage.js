import React from 'react'
import Container from '@material-ui/core/Container'
import MemeCardList from '../components/MemeCardList';
import { memePosts } from '../constants/memeConstants';

export default function MemesPage(props) {
  const { t } = props

  return (
    <Container>
      <MemeCardList memeData={memePosts} />
    </Container>
  )
}