import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { useState } from 'react';
import './App.css';

const startText = `
# h1 Heading
## h2 Subheading
[Google](https://www.google.com)\n
\`Hello World!\`
- 1
- 2
- 3
> Block Quotes!
\`\`\`
 console.log("Hello World!");
\`\`\`
![Image](https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100)

**bold**
`;

export function App() {
    const [input, setInput] = useState(startText);

  return (
    <>
        <h1 id="title">Markdown Previewer</h1>
        <span id="textarea">
        <textarea id="editor" type="text" rows="40" cols="50" value={input} onChange={(e) => setInput(e.target.value)} />
        </span>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(input)}}></div>
    </>
  );
} 