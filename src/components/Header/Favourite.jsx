import HeartImg from "../../assets/heart.svg";
export default function Favourite({ onShow }) {
  return (
    <div className="max-md:p-2 hover:bg-black/30 cursor-pointer flex items-start gap-2  rounded-md transition-all ">
      <img
        src={HeartImg}
        alt=""
      />
      <span
        onClick={onShow}
        className="max-md:text-xs  px-2">
        Favourites
      </span>
    </div>
  );
}
