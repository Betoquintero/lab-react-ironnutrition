import React, {useState} from 'react';
import './App.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import SearchBar from './components/SearchBar'

function App() {
  const [foods, setFood] = useState(foodsData)

  const handleSearch = (searchValue) =>{
    if (searchValue===''){
        setFood(foodsData)
    }else{
        const filtered = foods.filter(elem => elem.name.toLowerCase().includes((searchValue).toLowerCase()))
        setFood(filtered)
    }
}
  
  const handleNewFood = (food) => {    
    const updatedFoods = [...foods];
    updatedFoods.push(food);
    setFood(updatedFoods);
  }


  const handleDelete = foodName => {
    let deletingFood = foods.filter(elem =>{
      return elem.name !== foodName
    })
    setFood(deletingFood)

  }


  return (
    <div className="App">
      <SearchBar onSearch= {handleSearch} />
      <FoodBox food={foods} onDelete={handleDelete} />
      <AddFoodForm newFood={handleNewFood}/>
     
    </div>
  )
}

export default App;
