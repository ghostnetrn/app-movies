import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import videos from "./json/videos.json";
import Category from "./components/Category";

const categories = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
];

function filterCategory(id) {
  return videos.filter(video => video.category === categories[id])
}

function App() {
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

        {/* {categories.map((category, index) => (
                <Category category={category}>
                {filterCategory(index).map(({ id }) => (
                  <Card id={id} key={id} />
                ))}
              </Category>
        ))} */}
      </Container>
      <Footer />
    </>
  );
}

export default App;
