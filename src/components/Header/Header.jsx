import { useState } from "react";
import Favourite from "./Favourite";
import FavouriteModal from "./FavouriteModal";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [showFavModal, setShowFavModal] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between max-sm:px-2 md:px-20 py-6">
        <Logo />

        <div className="flex items-center max-md:gap-4 sm:gap-1 relative">
          <Search />
          <Favourite
            onShow={() => {
              setShowFavModal(!showFavModal);
            }}
          />
          {showFavModal && <FavouriteModal />}
        </div>
      </nav>
    </header>
  );
}
