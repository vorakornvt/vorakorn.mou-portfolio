import { useState } from 'react'
import AccordionItem from './AccordionItem';

function AccordionList({ panels }) {
  // LOGIC
  // State to manage which panel to show at once
  const [activeIndex, setActiveIndex] = useState(0);

  // Show/hide panel function
  const handleShow = (id) => {
    console.log(`Show Accordion Panel: ${id}`);
    setActiveIndex(id);
  }

  return (
    // TEMPLATE
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(1fr)"
    }}>
      {/* MAPPING TO A COMPONENT ITEM */}
      {panels.map((panel) => 
        <AccordionItem 
          key={panel.id}
          title={panel.title}
          onShow={() => handleShow(panel.id)}
          isActive={activeIndex === panel.id}
        >
          {panel.content}
        </AccordionItem>
      )}
    </div>
  )
}

export default AccordionList