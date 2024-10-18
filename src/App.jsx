
// import './App.css'
import './todo.css'

function App() {
  const todoTitle = 'Call Family';
  const todoDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cumque.';
  const date = new Date();
  const fullDate = date.getDate();
  const month = date.getMonth();
  const currentYear = date.getFullYear();


  return (
    <div>
      <h1 className='headingStyle'>Todo App</h1>
      <div className='card'>
      <h3 className='cardTitle'>{todoTitle}</h3>
      <p className='cardDesc'>{todoDesc}</p>
      <p className='cardFooter'>{fullDate + "/" + month + "/" + currentYear}</p>
      </div>
    </div>
  )
}

export default App
