import './App.css'
import Expenses from './components/Expenses/Expenses'

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      date: new Date(2022, 3, 14),
      price: 456.50

    },
    {
      id: 2,
      title: "New TV",
      date: new Date(2022, 10, 4),
      price: 7500

    }
  ]
  
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses items={ expenses } />
      
    </div>
  )
}

export default App
