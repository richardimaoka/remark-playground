import { createElement, Fragment, useEffect, useState } from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

const text = `<h2>Hello, world!</h2>
<p>Welcome to my page 👀</p>`;

function useProcessor(text) {
  const [Content, setContent] = useState(Fragment);

  useEffect(() => {
    unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, { createElement, Fragment })
      .process(text)
      .then((file) => {
        setContent(file.result);
      });
  }, [text]);

  return Content;
}

export default function App() {
  return useProcessor(text);
}
