import {BsEmojiSmile} from "react-icons/bs";

export const Empty = ({currentItem}: {currentItem: string}) => {
  return (
    <div className="flex flex-col items-center gap-3 text-black/25">
      <p className="font-bold text-xl">{currentItem} Is Empty</p>
      <span className="text-5xl font-bold">
        <BsEmojiSmile />
      </span>
    </div>
  );
};
