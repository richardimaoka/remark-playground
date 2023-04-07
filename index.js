import { visit } from "unist-util-visit";
export default function retextSentenceSpacing() {
  return (tree, file) => {
    visit(tree, "ParagraphNode", (node) => {
      console.log(node);
    });
  };
}
