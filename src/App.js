import { Link, Route } from 'wouter'
import Justify from './components/Justify'
import AlignItem from './components/AlignItem'
import AlignContent from './components/AlignContent'
import FlexBasis from './components/FlexBasis'
import FlexGrow from './components/FlexGrow'
import FlexShrink from './components/FlexShrink'

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
                <br />
                <Link to="/flexbasis">FlexBasis</Link>
                <br />
                <Link to="/flexgrow">FlexGrow</Link>
                <br />
                <Link to="/flexshrink">FlexShrink</Link>
                <Route component={Justify} path="/justify">
                    Justify
                </Route>
                <Route component={AlignItem} path="/alignitem">
                    AlignItem
                </Route>
                <Route component={AlignContent} path="/aligncontent">
                    AlignContent
                </Route>
                <Route component={FlexBasis} path="/flexbasis">
                    FlexBasis
                </Route>
                <Route component={FlexGrow} path="/flexgrow">
                    FlexGrow
                </Route>
                <Route component={FlexShrink} path="/flexshrink">
                    FlexShrink
                </Route>
            </section>
        </>
    )
}

export default App
