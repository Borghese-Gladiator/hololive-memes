import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
// custom components
import MemeCardList from '../components/MemeCardList';

export default function FavoritesPage(props) {
  const { t } = props;
  const [memeList, setMemeList] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // add to localStorage history
    const favoriteListStr = localStorage.getItem('favorites');
    if (favoriteListStr) {
      setMemeList(JSON.parse(favoriteListStr));
    }
  }, []);

  return (
    <Container>
      <h1 style={{textAlign: "center"}}>{t('favoritesPage.title')}</h1>
      {
        memeList && memeList.length > 0
          ? <MemeCardList memeData={memeList} />
          : <Container>
              <h4>{t('favoritesPage.noMemeLabel')}</h4>
            </Container>
      }
    </Container>
  )
}