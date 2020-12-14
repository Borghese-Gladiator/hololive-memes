import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
// custom components
import MemeCardList from '../components/MemeCardList';

export default function HistoryPage() {
  const [memeList, setMemeList] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // add to localStorage history
    const historyListStr = localStorage.getItem('history');
    if (historyListStr) {
      const historyList = JSON.parse(historyListStr);
      setMemeList(historyList);
    }
  }, []);

  return (
    <Container>
      <h1 style={{textAlign: "center"}}>History</h1>
      {
        memeList && memeList.length > 0
          ? <MemeCardList memeData={memeList} />
          : <Container>
              <h4>No memes in history</h4>
            </Container>
      }
    </Container>
  )
}