import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-auto">
      {examples.map((example) => (
        <Example
          key={example.title}
          title={example.title}
          tags={example.tags}
          desc={example.desc}
          path={example.path}
        />
      ))}
    </div>
  );
}

const Example: React.FC<ExampleProps> = ({ title, tags, desc, path }) => {
  return (
    <div className="border border-black/10 p-4 rounded-md">
      <Link to={path}>
        <h4 className="mb-1">{title}</h4>
        <div className="flex gap-x-2 mb-4">
          {tags.map((tag) => (
            <p
              className="text-sm font-semibold text-yellow-700 bg-yellow-50  px-2 rounded-sm "
              key={tag}
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="line-clamp-3 ">{desc}</p>
      </Link>
    </div>
  );
};

type ExampleProps = {
  title: string;
  tags: string[];
  desc: string;
  path: string;
};

const examples: ExampleProps[] = [
  {
    title: "Intersection observer",
    tags: ["useEffect", "useRef"],
    desc: "This section teaches how to use dom element that react doesn't have control over and also how to attach and remove the event listner for performant react application",
    path: "/intersection-observer",
  },
  {
    title: "Clock Timer",
    tags: ["useEffect", "useCallback"],
    desc: "This section teaches how to use useCallback, useEffect for and useEffect cleanup, to make your app performant",
    path: "/clock-timer",
  },
];
export default MainPage;
