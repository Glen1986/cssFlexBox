import { Link, Route } from 'wouter'
import Justify from './components/Justify'
import AlignItem from './components/AlignItem'
import AlignContent from './components/AlignContent'

function App() {
    return (
        <>
            <section>
                <h1>css FlexBox</h1>
                <Link to="/">Home</Link>
                <br />
                <Link to="/justify">Justify</Link>
                <br />
                <Link to="/alignitem">AlignItem</Link>
                <br />
                <Link to="/aligncontent">AlignContent</Link>
                <Route component={Justify} path="/justify">
                    Justify
                </Route>
                <Route component={AlignItem} path="/alignitem">
                    AlignItem
                </Route>
                <Route component={AlignContent} path="/aligncontent">
                    AlignContent
                </Route>
            </section>
        </>
    )
}

export default App
