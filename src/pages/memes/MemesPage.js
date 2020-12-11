import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import MemeDetailsPage from './MemeDetailsPage';
// MemesPage imports
import Container from '@material-ui/core/Container'
import MemeCardList from '../../components/MemeCardList';
import { memePosts } from '../../constants/memeConstants';

export default function MemesPage(props) {
  let match = useRouteMatch();
  const { t } = props

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:memeId`}>
          <MemeDetailsPage />
        </Route>
        <Route path={match.path}>
          <Container>
            <MemeCardList memeData={memePosts} />
          </Container>
        </Route>
      </Switch>
    </div>
  )
}