import Section from "../Section/Section.tsx";
import Container from "../Container/Container.tsx";
import data from "../../data/data.json";
import "./Information.css";

type PlantType = { image: string; description: string };

function Information() {
  const plants: PlantType[] = data;

  return (
    <Section className="information">
      <Container className="container">
        <h2 className="information__title">Some random information</h2>
        <div className="information__content">
          {plants.map((plant, index) => (
            <article key={index} className="information__card flow">
              <figure>
                <img
                  className="information__image"
                  src={plant.image}
                  alt="plant"
                />
                <figcaption>{plant.description}</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Information;
