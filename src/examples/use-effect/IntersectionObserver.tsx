import { useEffect, useRef, useState } from "react";
import { useIsOnscreen } from "../../hooks/use-is-onscreen";

const IntersectionObserverComp = () => {
  return (
    <div className="max-w-[60ch] mx-auto text-lg overflow-x-hidden">
      <h3 className="text-center mb-6">Typo—what?</h3>
      <p className="mb-8 text-lg">
        Typography is the craft of arranging type with the goal to make language
        visible. We arrange type multiple times throughout the day; whether we
        are writing essays, summarizing meeting minutes or creating slides for a
        presentation. Unfortunately, we usually end up thinking more about what
        we write than how we write it. And, most importantly, how others will
        read it.
      </p>
      <h5 className="mb-3">1. Good typography makes us read</h5>
      <p className="mb-6 text-lg">
        Good typography is utilitarian. It allows the reader to focus on the
        content, not the formatting. Ideally it is not even noticed because it
        just makes sense to the reader.
      </p>

      <h5 className="mb-3">2. Good typography makes us feel</h5>
      <p className="mb-2 text-lg">
        Good typography is emotional. The choice of typeface affects how your
        content is understood or perceived. Based on its character, the right
        typeface sets the tone and voice for your text.
      </p>

      <p className="mb-2 text-lg">
        This little guide is for everyone who comes across these typographic
        adventures or just want to do things right. Mastering the things
        mentioned in the short chapters below will help you get your message
        across more successfully.
      </p>

      <p className="mb-2 text-lg">
        While I try to outline guidelines for the most common challenges, I
        encourage you to trust your own judgement when it comes to final
        decisions. Work out the hierarchy of your content and design it in a way
        that it’s easy for your readers to follow.
      </p>
      <Toasty />
    </div>
  );
};

const Toasty = () => {
  const { isOnscreen, wrapperRef } = useIsOnscreen();

  return (
    <div ref={wrapperRef} className="relative pointer-events-none ">
      <p
        className={`transition-all durtion-200 text-[200px] font-extralight absolute right-0 bottom-0 ${isOnscreen ? "translate-x-0" : "translate-x-full"}`}
      >
        ☠️
      </p>
    </div>
  );
};
export default IntersectionObserverComp;
