import React from 'react'
import Container from '@material-ui/core/Container';
import HorizontalGridList from '../../components/HorizontalGridList'
import { messagesData, recentViewedData } from '../../constants/historyDashboard'

export default function HistoryDashboard() {
  return (
    <Container>
      <h1 style={{textAlign: "center"}}>History</h1>
      <Container>
        <h2>Recently Viewed</h2>
        <HorizontalGridList size={10} tileData={recentViewedData} />
      </Container>
      <Container>
        <h2>Liked Recipes</h2>
        <HorizontalGridList size={10} tileData={messagesData} />
      </Container>
    </Container>
  )
}