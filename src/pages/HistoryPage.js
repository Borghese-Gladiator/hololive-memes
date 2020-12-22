import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
// custom components
import MemeCardList from '../components/MemeCardList';

export default function HistoryPage(props) {
  const { t } = props;
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
      <h1 style={{textAlign: "center"}}>{t('historyPage.title')}</h1>
      {
        memeList && memeList.length > 0
          ? <MemeCardList memeData={memeList} />
          : <Container>
              <h4>{t('historyPage.noMemeLabel')}</h4>
            </Container>
      }
    </Container>
  )
}