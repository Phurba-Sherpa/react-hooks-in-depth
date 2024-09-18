import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-12 py-6 border-b border-b-black/10">
      <div className="max-w-6xl mx-auto w-[90%] flex justify-between items-center">
        <Link to="/">
          <p className="text-3xl">
            <span className="">React</span>
            <span className="font-bold italic">Depth</span>
          </p>
        </Link>
        <button className="px-6 py-2 bg-black text-white/70 font-semibold rounded-full">
          Subscribe
        </button>
      </div>
    </header>
  );
};

export default Header;
