import React from "react";
import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
      className="flex w-[90%] relative items-center"
    >
      <input
        type="input"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="w-full rounded-full px-[20px] py-[10px] font-normal font-libre text-2xl border-none shadow-inner shadow-black transition-all m-3 focus:shadow-[0_0px_25px_1000px_rgb(0,0,0,0.7)]
        focus:outline-none"
      />
      <button
        type="submit"
        className="absolute w-[40px] h-[40px] m-6 rounded-full right-0 font-md bg-blue-500 text-white transition-all shadow-[0_0px_10px_rgb(0,0,0,0.9)] hover:bg-blue-400 active:scale-90 active:shadow-[0_0px_5px_rgb(0,0,0,0.7)] "
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
