import React, {useState} from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {

    const {newFood} = props

    const [food, setFood] = useState({
        name: '',
        image: '',
        calories: '',
        servings: '',
      })

      const handleChange = (e) => {
        const conditionalValue = e.target.name === 'calories' ? parseInt(e.target.value) : e.target.value;
        setFood(prev => {
          return {
            ...prev,
            [e.target.name]: conditionalValue
          }
        })}

        const handleCalories = (e) => {
            setFood(prev => {
              return {
                ...prev,
                calories: parseInt(e.target.value)
              }
            })
          }

          const handleServings = (e) => {
            setFood(prev => {
              return {
                ...prev,
                servings: parseInt(e.target.value)
              }
            })
          }

        const handleForm = (e) => {
            e.preventDefault();
            newFood(food);
            setFood({
                name: '',
                image: '',
                calories: '',
                servings: '',
              })}
  return (
    <form onSubmit={handleForm}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={food.name} type="text" name="name" onChange={(e) => handleChange(e)} />

      <label>Image</label>
      <Input value={food.image} type="text" name="image" onChange={(e) => handleChange(e)} />

      <label>Calories</label>
      <Input value={food.calories} type="number" name="calories" onChange={(e) => handleCalories(e)} />

      <label>Servings</label>
      <Input value={food.servings} type="number" name="servings" onChange={(e) => handleServings(e)} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;