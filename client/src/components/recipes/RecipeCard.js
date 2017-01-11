import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class RecipeCard extends Component {
  render(){
    const { recipe } = this.props;
    return(
      <Card
        centered={true}
        image={recipe.imageURL}
        header={recipe.name}
        meta="description"
        description={recipe.description.substring(0, 100) + "..."}
      />
    )
  }
}

export default RecipeCard
