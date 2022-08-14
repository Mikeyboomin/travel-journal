import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Data from './Data'

function App() {
  const cards = Data.map(item => {
    return (
      <Card 
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
      />
    )

  })

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  )
}

export default App
