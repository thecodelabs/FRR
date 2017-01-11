import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class RecipeCard extends Component {
  render(){
    const { recipe } = this.props;
    return(
      <Card
        centered={true}
        header={recipe.name}
        meta="description"
      />
    )
  }
}

export default RecipeCard
