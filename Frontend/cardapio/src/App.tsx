import { useState } from 'react'
import './App.css'
import { FoodData } from './interface/FoodData';
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  //Get data from API 
  /*Object Destructuring {data}, avoids the following: 
  const response = useFoodData();
  const data = response.data; */
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  
  return (
      <div className="container">
        <h1>Cardapio</h1>
        <div className="card-grid">
          {/*get each line from the table foods and return one card for each*/}
          {/*data might be extracted or not from the API, so use ? in case it is empty*/}
          {data?.map(foodData => 
            <Card 
              price={foodData.price} 
              title={foodData.title} 
              image={foodData.image}
            />
          )}
        </div>
        {/*Modal will only be shown when isModalOpen is true*/}
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        {/*handleOpenModal inverts the value of the variable, false -> true*/}
        <button onClick={handleOpenModal}>novo</button>
      </div>
      
  )
}

export default App
