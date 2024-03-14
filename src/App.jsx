
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import { MealsProvider } from './context/MealsContext'
import Home from './pages/Home/Home'
import Category from './components/Category/Category'
import Recipe from './components/Recipe/Recipe'
import Favourites from './pages/Favourites/Favourites'
import Plan from './pages/Plan/Plan'
import Ingredients from './components/Ingredients/Ingredients'
import ShoppingList from './pages/ShoppingList/ShoppingList'
import Search from './pages/Search/Search'
import FilteredMeals from './components/FilteredMeals/FilteredMeals'

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
            <Route path='/ingredients/:id' element={<Ingredients />} />
            <Route path='/shoppingList' element={<ShoppingList />} />
            <Route path='/search' element={<Search />} />
            <Route path='/filteredMeals' element={<FilteredMeals />} />
            <Route path='*' element={<h1>Not Found</h1>} />
          
        </Routes>
      </div>
    </div>
    </MealsProvider>
    
  )
}

export default App
