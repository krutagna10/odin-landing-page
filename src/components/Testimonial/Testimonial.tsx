import Container from "../Container/Container.tsx";
import Section from "../Section/Section.tsx";
import "./Testimonial.css";

function Testimonial() {
  return (
    <Section className="testimonial">
      <Container>
        <blockquote>
          <p className="testimonial__description">
            This is an inspiring quote, or a testimonial from a customer. Maybe
            it's just filling up space, ore maybe people will actually read it.
            Who knows? All I know is that it looks nice
          </p>
          <footer className="testimonial__footer">
            <cite className="testimonial__author">- Thor, God of Thunder</cite>
          </footer>
        </blockquote>
  
      </Container>
    </Section>
  );
}

export default Testimonial;
