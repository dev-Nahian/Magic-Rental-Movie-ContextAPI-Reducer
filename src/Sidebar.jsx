import React from "react";
import Tranding from "./assets/icons/trending.svg"
import NewReleases from "./assets/icons/newRelease.svg"
import CommingSoon from "./assets/icons/commingSoon.svg"
import Favourite from "./assets/icons/favourite.svg"
import WatchLater from "./assets/icons/watchLater.svg"


export default function Sidebar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img
              src={Tranding}
              width="24"
              height="24"
              alt="Trending"
            />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={NewReleases}
              width="24"
              height="24"
              alt="New Releases"
            />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={CommingSoon}
              width="24"
              height="24"
              alt="Comming Soon"
            />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={Favourite}
              width="24"
              height="24"
              alt=""
            />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={WatchLater}
              width="24"
              height="24"
              alt=""
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
