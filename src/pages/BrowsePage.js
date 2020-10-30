import React from 'react'
import Container from '@material-ui/core/Container'
import RecipeCardList from '../components/RecipeCardList'

import { recipeData } from '../constants/recipeData'

export default function AboutPage(props) {
  const { t } = props
  return (
    <Container>
      <h2 style={{textAlign: "center"}}>{t("browse.recipes")}</h2>
      <RecipeCardList recipeData={recipeData} />
    </Container>
  )
}