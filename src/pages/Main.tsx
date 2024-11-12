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
          topics={example.topics}
          path={example.path}
        />
      ))}
    </div>
  );
}

const Example: React.FC<ExampleProps> = ({ title, tags, topics, path }) => {
  return (
    <div className="border border-black/10 p-4 rounded-md">
      <Link to={path}>
        <h4 className="mb-2">{title}</h4>
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
        <p className="font-medium text-gray-700 text-lg mb-2">
          Topics convered:
        </p>
        <ul className="">
          {topics.map((topic) => (
            <li className="before:content-['▹'] before:block before:text-slate-900 flex items-start gap-x-1 text-sm align-baseline">
              {topic}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

type ExampleProps = {
  title: string;
  tags: string[];
  topics: string[];
  path: string;
};

const examples: ExampleProps[] = [
  {
    title: "Intersection observer",
    tags: ["useEffect", "useRef"],
    topics: [
      "Attched event listeners get stacked up",
      "How to cleanup the event listners",
    ],
    path: "/intersection-observer",
  },
  {
    title: "Clock Timer",
    tags: ["useEffect", "useCallback"],
    topics: [
      "useMemo",
      "Memo",
      "Effective way to pass function as a prop",
      "useCallback",
    ],
    path: "/clock-timer",
  },
  {
    title: "Cursor Position Tracker",
    tags: ["useEffect cleanup", "useEffect"],
    topics: [
      "Event listeners attached to DOM stacks up if not handle properly",
      "Event listeners alive event after component unmount and continues to consume processes",
      "useEffect cleanup comes to rescue",
    ],
    path: "cursor-position",
  },
  {
    title: "Media Player",
    tags: ["synchronization", "useRef"],
    topics: [
      "Synchronize two different values",
      "Escape hatch to access the stale state",
      "Event bubbling",
    ],
    path: "media-player",
  },
  {
    title: "Box visibility",
    tags: ["observer", "useRef", "custom hooks"],
    topics: [
      "How to observe for element visibility",
      "How to expose hooks that support ref",
    ],
    path: "element-visibility",
  },
];
export default MainPage;
