import Card from './components/Card';
import './todo.css'

function App() {
 


  return (
    <div>
      <h1 className='headingStyle'>Todo App</h1>
      <Card titleText="Call Mother" descText="Description one"></Card>
      <Card titleText="Call Father" descText="Description two"></Card>
      <Card titleText="Call Brother" descText="Description three"></Card>
      <Card titleText="Call Sister" descText="Description four"></Card>
    </div>
  )
}

export default App
