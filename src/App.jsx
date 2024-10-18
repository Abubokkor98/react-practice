import Card from './components/Card';
import './todo.css'
import Data from './data.json'

function App() {
  console.log(Data[0].desc);
 


  return (
    <div>
      <h1 className='headingStyle'>Todo App</h1>
      <Card titleText={Data[0].title} descText={Data[0].desc}></Card>
      <Card titleText={Data[1].title} descText={Data[1].desc}></Card>
      <Card titleText={Data[2].title} descText={Data[2].desc}></Card>
      <Card titleText={Data[3].title} descText={Data[3].desc}></Card>
      <Card titleText={Data[4].title} descText={Data[4].desc}></Card>
    </div>
  )
}

export default App
