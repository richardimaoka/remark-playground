import { visit } from "unist-util-visit";
import { is } from "unist-util-is";

export default function retextSentenceSpacing() {
  return (tree, file) => {
    visit(tree, "ParagraphNode", (node) => {
      const children = node.children;

      children.forEach((child, index) => {
        if (
          is(children[index - 1], "SentenceNode") &&
          is(child, "WhiteSpaceNode") &&
          is(children[index + 1], "SentenceNode")
        ) {
          console.log(child);
        }
      });
    });
  };
}
