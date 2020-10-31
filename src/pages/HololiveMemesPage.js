import React from 'react'
import Container from '@material-ui/core/Container'
import MemeCardList from '../components/MemeCardList'

export default function HololiveMemesPage(props) {
  const { t } = props
  // DO NOT put "path" variable into require.context(path) OR else it will not work - must be string constant for some reason
  // https://stackoverflow.com/questions/29421409/how-to-load-all-files-in-a-directory-using-webpack-without-require-statements
  const allMemeFiles = (ctx => {
    let keys = ctx.keys();
    let values = keys.map(ctx);
    return keys.reduce((arr, k, i) => { const a = { "path": values[i], "name": k }; arr.push(a); return arr }, [])
    // return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
  })(require.context('../memes/hololive', true, /.*/));

  return (
    <Container>
      <h2 style={{textAlign: "center"}}>{t("browse.recipes")}</h2>
      <MemeCardList memeData={allMemeFiles} />
    </Container>
  )
}