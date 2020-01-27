import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";

//  Global pricing
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 0.3,
  meat: 1.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  };

  updatePurchaseState(ingredients) {
    //  Creates an array of
    const sum = Object.keys(ingredients)
      .map(igKey => {
        //  returns the value of the key
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        //  Update sum with the amount from each value in the array
        return sum + el;
      }, 0);
    //  Sets purchasable to true if sum is greater than 0
    this.setState({ purchasable: sum > 0 });
  }

  removeIngredientHandler = type => {
    //  Get the value of the ingredient
    const oldCount = this.state.ingredients[type];
    //  Check if the count is 0 or less to fix array error
    if (oldCount <= 0) {
      return;
    }
    //  Update the ingredient current value
    const updatedCounted = oldCount - 1;
    //  Create a new state object from the current state
    const updatedIngredients = {
      ...this.state.ingredients
    };
    //  Update the new state object with the new ingredient count number
    updatedIngredients[type] = updatedCounted;
    //  Get the current price of the ingredient
    const priceDeduction = INGREDIENT_PRICES[type];
    //  Get current total for the entire burger
    const oldPrice = this.state.totalPrice;
    //  Create the new total from the ingredient price + total burger
    const newPrice = oldPrice - priceDeduction;
    //  Update the state with the new ingredient state and total price
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    //  Passes the newly updated state to the updatePurchaseState handler
    this.updatePurchaseState(updatedIngredients);

  };

  addIngredientHandler = type => {
    //  Get the value of the ingredient
    const oldCount = this.state.ingredients[type];
    //  Update the ingredient current value
    const updatedCounted = oldCount + 1;
    //  Create a new state object from the current state
    const updatedIngredients = {
      ...this.state.ingredients
    };
    //  Update the new state object with the new ingredient count number
    updatedIngredients[type] = updatedCounted;
    //  Get the current price of the ingredient
    const priceAddition = INGREDIENT_PRICES[type];
    //  Get current total for the entire burger
    const oldPrice = this.state.totalPrice;
    //  Create the new total from the ingredient price + total burger
    const newPrice = oldPrice + priceAddition;
    //  Update the state with the new ingredient state and total price
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    //  Passes the newly updated state to the updatePurchaseState handler
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    //  Copies the current state in an immutable way
    const disabledInfo = {
      ...this.state.ingredients
    };
    //  Check the value of the key if 0 set true
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal/>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable ={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
