import "./_reset.scss";
import "./_base.scss";
import Header from "../Header";
import Footer from "../Footer";
import Slider from "../Slider";
import Categories from "../Categories";
import Content from "../Content";
import ContentList from "../ContentList";

function App() {
  return (
    <section className='hc__main'>
      <Header />
      <Slider />
      <Categories />
      <Content />
      <ContentList />
      <Footer />
    </section>
  );
}

export default App;
