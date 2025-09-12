import "./components.css";
import "./Test.css";

import TestBubbleComp from "./TestBubbleComp";

import { Link } from "react-router-dom";

// page is the current page
function TestComp(
  alignLeft = true,
  projectTitle = "Example Project",
  bubbleText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  thumbnailImage
) {
  return (
    <div className="break">
      <TestBubbleComp text={bubbleText} />
    </div>
  );
}

export default TestComp;
