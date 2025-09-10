import "./components.css";

// page is the current page
function TextBubbleComp({ text = "", gradientRight = true }) {
  return (
    <div
      className={
        "text-bubble" +
        //if gradientRight true: show one background, else show another
        (gradientRight
          ? " text-bubble-gradient-background-right"
          : " text-bubble-gradient-background-left")
      }
    >
      <div className="text-bubble-text-container">
        <h3>{text}</h3>
      </div>
    </div>
  );
}

export default TextBubbleComp;
