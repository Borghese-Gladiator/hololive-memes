import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
// custom components
import MemeCardList from '../components/MemeCardList';

export default function HistoryPage() {
  const [memeList, setMemeList] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // add to localStorage history
    const favoriteListStr = localStorage.getItem('history');
    if (favoriteListStr) {
      setMemeList(JSON.parse(favoriteListStr));
    }
  }, []);

  return (
    <Container>
      <h1 style={{textAlign: "center"}}>Favorites</h1>
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