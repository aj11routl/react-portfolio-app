import "./Test.css";

// page is the current page
function TestBubbleComp({ text = "asdf", gradientRight = true }) {
  return (
    <div className={"test-bubble"}>
      <div className="test-bubble-text-box">{text}</div>
    </div>
  );
}

export default TestBubbleComp;
