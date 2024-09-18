import React from "react";
import { Footer, Header } from "./components/ui/partials";

function App() {
  return (
    <div className="h-screen flex flex-col ">
      <Header />
      <main className="grid grid-cols-3 gap-4 mb-auto">
        {examples.map((example) => (
          <Example
            key={example.title}
            title={example.title}
            tags={example.tags}
            desc={example.desc}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

const Example: React.FC<ExampleProps> = ({ title, tags, desc }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-md">
      <a href="#">
        <h4 className="mb-1">{title}</h4>
        <div className="flex gap-x-2 mb-4">
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
        <p className="line-clamp-3 ">{desc}</p>
      </a>
    </div>
  );
};

type ExampleProps = {
  title: string;
  tags: string[];
  desc: string;
};

const examples: ExampleProps[] = [
  {
    title: "Intersection observer",
    tags: ["useEffect", "useRef"],
    desc: "This section teaches how to use dom element that react doesn't have control over and also how to attach and remove the event listner for performant react application",
  },
];
export default App;
