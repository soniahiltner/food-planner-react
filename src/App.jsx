
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { MealsProvider } from './context/MealsContext'
import Home from './pages/Home/Home'
import Category from './components/Category/Category'
import Recipe from './components/Recipe/Recipe'
import Favourites from './pages/Favourites/Favourites'
import Plan from './pages/Plan/Plan'

function App() {

  return (
    <MealsProvider>
      <div className='app'>
      <Header />
      <div className='container'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:category' element={<Category />} />
            <Route path='/recipe/:id' element={<Recipe />} /> 
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/plan' element={<Plan />} />
          
        </Routes>
      </div>
    </div>
    </MealsProvider>
    
  )
}

export default App
