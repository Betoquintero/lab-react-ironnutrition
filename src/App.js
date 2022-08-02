import React, {useState} from 'react';
import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'

function App() {
  const [foods, setFood] = useState(foodsData)
  
  const handleNewFood = (food) => {    
    const updatedFoods = [...foods];
    updatedFoods.push(food);
    setFood(updatedFoods);
  }
  return (
    <div className="App">

      <FoodBox food={foods} />
      <AddFoodForm newFood={handleNewFood}/>
     
    </div>
  )
}

export default App;
