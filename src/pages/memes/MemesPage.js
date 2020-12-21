import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
// child pages
import MemeCardList from '../../components/MemeCardList';
import MemeDetailsPage from './MemeDetailsPage';
// custom component
import MemeTagFilter from '../../components/MemeTagFilter';
import MemeAutoComplete from '../../components/MemeAutoComplete';
// load meme data
import { memePosts } from '../../constants/memeConstants';

export default function MemesPage() {
  let match = useRouteMatch();
  
  const [memeList, setMemeList] = React.useState(memePosts);
  function filterByTagCallback(tagList) {
    const filteredMemeList = memePosts.filter((val, idx) => {
      let noTagInMeme = false;
      for (const tag of tagList) {
        if (!val.tags.includes(tag)) {
          noTagInMeme = true;
          break;
        }
      };
      return noTagInMeme;
    });
    setMemeList(filteredMemeList);
  }

  function filterByIDCallback(id) {
    const meme = memePosts.find((val) => val.id === id);
    setMemeList([meme]);
  }
  
  function removeFilterCallback() {
    setMemeList(memePosts);
  }

  return (
    <Switch>
      <Route path={`${match.path}/:memeID`}>
        <MemeDetailsPage memeData={memePosts} />
      </Route>
      <Route path={match.path}>
        <MemeAutoComplete memeData={memePosts} filterByIDCallback={filterByIDCallback} removeFilterCallback={removeFilterCallback} />
        <MemeTagFilter filterByTagCallback={filterByTagCallback} removeFilterCallback={removeFilterCallback} />
        <MemeCardList memeData={memeList} />
      </Route>
    </Switch>
  )
}
/*

  function filterByTitleCallback(filterTitle) {
    const filteredMemeList = memePosts.filter((val, idx) => {
      return val.title === filterTitle;
    });
    setMemeList(filteredMemeList);
  }
*/