import HeartImg from "../../assets/heart.svg";
export default function Favourite({ onShow }) {
  return (
    <div className=" sm:p-0  md:p-2 hover:bg-black/30 cursor-pointer flex gap-2 right-0 rounded-md transition-all ">
      <img
        src={HeartImg}
        alt=""
      />
      <span
        onClick={onShow}
        className="max-md:text-xs  max-md:w-full">
        Favourites
      </span>
    </div>
  );
}
