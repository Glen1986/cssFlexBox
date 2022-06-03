import { Link, Route } from 'wouter'
import Justify from './components/Justify'
import AlignItem from './components/AlignItem'
import './App.css'

function App() {
    return (
        <section className="container column">
            <h1>css FlexBox</h1>
            <Link to="/">Home</Link>
            <Link to="/justify">Justify</Link>
            <Link to="/alignitem">AlignItem</Link>
            <Route component={Justify} path="/justify">
                Justify
            </Route>
            <Route component={AlignItem} path="/alignitem">
                AlignItem
            </Route>
        </section>
    )
}

export default App
