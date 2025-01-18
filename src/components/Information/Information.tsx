import Section from "../Section/Section.tsx";
import Container from "../Container/Container.tsx";
import { plants } from "../../data/data.ts";
import "./Information.css";

function Information() {
  return (
    <Section className="information">
      <Container className="container">
        <h2 className="information__title">Some random information</h2>
        <div className="information__content">
          {plants.map((plant, index) => (
            <article key={index} className="information__card flow">
              <figure>
                
              </figure>
              <img
                className="information__image"
                src={plant.image}
                alt="plant"
              />
              <p className="information__description">{plant.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Information;
