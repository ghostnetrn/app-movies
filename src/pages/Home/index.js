import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Category, {categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Card from "../../components/Card";

function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((category, index) => (
          <Category category={category}>
            {filterCategory(index).map(({id}) => (
              <Card id={id} key={id} />
            ))}
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
