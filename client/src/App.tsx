import "./App.css";

import { createElement, Fragment, useEffect, useState } from "react";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

function useProcessor(text: string) {
  const [Content, setContent] = useState(<></>);

  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeReact, { createElement, Fragment })
      .process(text)
      .then((file) => {
        setContent(file.result);
      });
  }, [text]);

  return Content;
}

export default function App() {
  const text = `# Hello world

> Block quote.

Some _emphasis_, **importance**, and \`code\`.`;

  return useProcessor(text);
}
