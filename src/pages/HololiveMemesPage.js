import React from 'react'
import Container from '@material-ui/core/Container'
import MemeCardList from '../components/MemeCardList'
import * as allMemeFiles from '../constants/memeConstants';

export default function HololiveMemesPage(props) {
  const { t } = props;
  /*
    // DO NOT put "path" variable into require.context(path) OR else it will not work - must be string constant for some reason
    // https://stackoverflow.com/questions/29421409/how-to-load-all-files-in-a-directory-using-webpack-without-require-statements
    const allMemeFiles = (ctx => {
      const keys = ctx.keys();
      const values = keys.map(ctx);
      
      return keys.reduce((arr, k, i) => {
        arr.push({
            path: values[i]["default"],
            name: k
          });
        return arr;
      }, []);
    })(require.context('../memes/hololive', true, /\.(png|gif|ico|jpg|jpeg)$/));
  */

  return (
    <Container>
      <h2 style={{textAlign: "center"}}>{t("hololive.title")}</h2>
      <MemeCardList memeData={allMemeFiles} />
    </Container>
  )
}