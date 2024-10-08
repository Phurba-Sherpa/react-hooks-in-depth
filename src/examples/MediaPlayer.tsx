import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

const MediaPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const iconName = isPlaying ? "mdi:pause" : "mdi:play";

  useEffect(() => {
    const _handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener("keydown", _handleKeyDown);

    return () => {
      window.removeEventListener("keydown", _handleKeyDown);
    };
  }, []);

  useEffect(() => {
    isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
  }, [isPlaying]);

  return (
    <>
      <div className="border border-black/10 p-4 flex flex-col md:flex-row md:justify-between items-center max-w-3xl mx-auto rounded-md">
        <div className="flex gap-8">
          <div className="h-32 w-32 rounded-md overflow-hidden">
            <img
              className="h-full w-full"
              src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="audio"
            />
          </div>
          <div>
            <h3>Take It Easy</h3>
            <p>Bvonrout ft. Mia Ville</p>
          </div>
        </div>
        <button
          className=" bg-black text-white rounded-full p-3 focus:outline focus:outline-offset-4 focus:outline-4 focus:outline-gray-600"
          onKeyDown={(event) => {
            if (event.code === "Space") {
              event.stopPropagation();
            }
          }}
          onClick={() => {
            setIsPlaying((prev) => !prev);
          }}
        >
          <Icon icon={iconName} fontSize={40} />
        </button>
        <audio
          ref={audioRef}
          src="https://assets.codepen.io/6093409/drums.ogg"
        />
      </div>
      <Note />
    </>
  );
};

const Note = () => {
  return (
    <>
      <div className="mt-8 p-4 bg-red-50 text-red-700 rounded-md max-w-3xl mx-auto">
        <p className="">
          <span className="font-semibold mr-2">Bug:</span> When audio is played
          by clicking on button, the button is focussed, so when we hit the
          space bar, 2 states are set, one for button click, one for spacebar.
          Let me know if you want to work on this issue
        </p>
      </div>
      <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md max-w-3xl mx-auto">
        <p className="">
          <span className="font-semibold mr-2">Event bubbling:</span>
          When you trigger any event on DOM node, the event will bubble up the
          tree, which means when we triggered the keydown event on button, it
          bububble up to the window object, which causes music to start and stop
          in a brief moment
        </p>
      </div>
    </>
  );
};
export default MediaPlayer;
