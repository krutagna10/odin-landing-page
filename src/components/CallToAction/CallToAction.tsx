import Section from "../Section/Section.tsx";
import Container from "../Container/Container.tsx";
import "./CallToAction.css";
import Button from "../Button/Button.tsx";

function CallToAction() {
  return (
    <Section className="cta">
      <Container className="cta__container">
        <div>
          <h2>Call to action! It's time!</h2>
          <p>Sign up for our product by clicking that button right over there</p>
        </div>
        <Button className="btn--white">Sign up</Button>
      </Container>
    </Section>
  );
}

export default CallToAction;