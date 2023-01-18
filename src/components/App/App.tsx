import "./_reset.scss"
import "./_base.scss"
import Footer from '../Footer'
import Slider from '../Slider'
import Categories from '../Categories'
import Content from '../Content'
import ContentList from '../ContentList'

function App() {
    return (
        <main>
            <Slider/>
            <Categories/>
            <Content/>
            <Footer/>
        </main>
    );
}

export default App;
