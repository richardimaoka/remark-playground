import "./App.css";

import { createElement, Fragment, useEffect, useState } from "react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { unified } from "unified";

function useProcessor(text: string) {
  const [Content, setContent] = useState(<></>);

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
  const text = `<h2>Hello, world!</h2>
<p>Welcome to my page 👀</p>`;

  return useProcessor(text);
}
