import Card from './components/Card';
import './todo.css'
import Data from './data.json'

function App() {
  // let items = [];

  // we will use this map loop
  // items = Data.map(item => <Card titleText={item.title} descText={item.desc}></Card>)

  // we will never use for loop
  // for (let x=0; x<Data.length; x++){
  //   items.push()
  // }
 


  return (
    <div>
      <h1 className='headingStyle'>Todo App</h1>
      {
      // Data.map(item => <Card titleText={item.title} descText={item.desc}></Card>)

      // add key/index for avoid browser warning
      Data.map((item,index) => <Card key={index} titleText={item.title} descText={item.desc}></Card>)     
      }
    </div>
  )
}

export default App
