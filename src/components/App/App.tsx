import "./_reset.scss"
import "./_base.scss"
import Footer from '../Footer'
import Slider from '../Slider'
import Categories from '../Categories'

function App() {
    return (
        <main>
            <Slider/>
            <Categories/>
            <Footer/>
        </main>
    );
}

export default App;
