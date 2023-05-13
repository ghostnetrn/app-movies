import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Category, {categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Carousel from '../../components/Carousel'
import ScrollToTopButton from '../../components/ScrollToTopButton'

function Home() {
  return (
    <>
    <ScrollToTopButton />
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((category, index) => (
          <Category category={category}>
            <Carousel>
            {filterCategory(index).map(({id}) => (
              <Card id={id} key={id} />
              ))}
              </Carousel>
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
