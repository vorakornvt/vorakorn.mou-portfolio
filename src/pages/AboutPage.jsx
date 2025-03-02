import { useState } from "react";

import AccordionList from "../components/features/accordion/AccordionList"
import { Container } from "react-bootstrap"

function AboutPage() {
  // LOGIC - Data level
  const [panels, setPanels] = useState([
    { id: 1, title: "What Am I Currently Up To", content: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "What Makes Me Code", content: "Lorem ipsum dolor sit amet." },
    { id: 3, title: "What Have I Got Involved In", content: "Lorem ipsum dolor sit amet." },
  ]);

  return (
    <Container>
      <h1>About Me</h1>
      <AccordionList 
        panels={panels}
      />
    </Container>
  )
}

export default AboutPage