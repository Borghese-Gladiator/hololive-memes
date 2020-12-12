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
import MemeSearch from '../../components/MemeSearch';
// load meme data
import { memePosts } from '../../constants/memeConstants';

export default function MemesPage() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:memeID`}>
        <MemeDetailsPage memeData={memePosts} />
      </Route>
      <Route path={match.path}>
        <MemeSearch />
        <MemeCardList memeData={memePosts} />
      </Route>
    </Switch>
  )
}