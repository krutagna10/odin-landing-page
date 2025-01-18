import Section from "../Section/Section.tsx";
import Container from "../Container/Container.tsx";
import Button from "../Button/Button.tsx";
import heroImage from "../../assets/hero.avif";
import "./Hero.css";

function Hero() {
  return (
    <Section className="hero">
      <Container className="hero__container">
        <div className="hero__content flow">
          <h1 className="hero__title">This website is awesome</h1>
          <p>
            This website has some subtext that goes under the main title. It's a
            smaller font and color is lower contrast.
          </p>
          <Button className="hero__btn">Sign up</Button>
        </div>
        <div className="hero__image-wrapper">
          <img src={heroImage} alt="A plant" />
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
