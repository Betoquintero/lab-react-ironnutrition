import React from 'react'
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const {food} = props
  return (
    <div  >
        {food.map(elem => {
            return(    
                <Col key={elem.name}>
                <Card
                    
                    title={elem.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                >
                    <img src={elem.image} height={60} alt="food" />
                    <p>Calories: {elem.calories}</p>
                    <p>Servings: {elem.servings}</p>
                    <p>
                    <b>Total Calories: {elem.calories}*{elem.servings} </b> kcal
                    </p>
                    <Button type="primary"> Delete </Button>
                </Card>
                </Col>
                )
             })}

    </div>
  );
}

export default FoodBox;