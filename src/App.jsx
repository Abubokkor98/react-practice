import Card from './components/Card';
import './todo.css'
import Data from './data.json'

function App() {
 console.log(Data);

  let items = [];

  // we will use this map loop
  items = Data.map(item => <Card titleText={item.title} descText={item.desc}></Card>)

  // we will never use for loop
  // for (let x=0; x<Data.length; x++){
  //   items.push()
  // }
 


  return (
    <div>
      <h1 className='headingStyle'>Todo App</h1>
      {items}
      

    </div>
  )
}

export default App
