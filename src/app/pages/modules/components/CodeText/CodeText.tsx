"use client";
import { IProps } from "./Interface";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";

const CodeText = ({ children, className, preserveCursor }: IProps) => {
  const [text, setText] = useState<Array<string>>([]);
  const textModifier = useCallback((l: string, i: number) => {
    setTimeout(() => setText((text) => [...text, l]), 100 * i);
  }, []);
  const splitedText = useMemo(() => children.split(""), [children]);
  const joinedText = useMemo(() => text.join(""), [text]);

  useLayoutEffect(() => {
    splitedText.forEach((l, i) => textModifier(l, i));
  }, [splitedText, textModifier]);

  return (
    <div className="p-2">
      <p
        className={`bg-gray-800 text-white text-bold p-1 px-4 shadow-xl rounded-lg font-mono w-fit ${className}`}
      >
        {joinedText}
        {(joinedText === children && !preserveCursor) || (
          <span className="after:content-[' '] after:border-r-4 after:animate-pulse after:text-gray-400 after:ml-1" />
        )}
      </p>
    </div>
  );
};

export default CodeText;
