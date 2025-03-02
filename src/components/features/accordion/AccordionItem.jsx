
function AccordionItem(props) {
  // LOGIC: js
  const { title, children, onShow, isActive } = props;

  return (
    // TEMPLATE: jsx
    <section style={{
      padding: "20px",
      backgroundColor: "lightblue",
      border: "1px blue solid",
      borderRadius: "5px",
      width: "40vw",
      margin: "10px auto"
    }}>
      <h3>{title}</h3>

      {/* TOGGLE SECTION */}
      { isActive ? (
        <p style={{ color: "red" }}>{children}</p>
      ) : (
        <div>
          <button onClick={onShow}>Show</button>
        </div>
      )}
    </section>
  )
}

export default AccordionItem