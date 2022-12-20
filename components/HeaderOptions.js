import HeaderOption from "./HeaderOption";
import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/outline";

const HeaderOptions = () => {
  return (
      <div className="flex w-full justify-evenly items-center text-sm lg:text-base lg:justify-start lg:space-x-20 lg:pl-44 border-b">
          <div className="flex space-x-6">
              <HeaderOption Icon={SearchIcon} title="All" selected />
              <HeaderOption Icon={NewspaperIcon} title="News"/>
              <HeaderOption Icon={PhotographIcon} title="Images"/>
              <HeaderOption Icon={PlayIcon} title="Videos"/>
              <HeaderOption Icon={MapIcon} title="Maps" />
              <HeaderOption Icon={DotsVerticalIcon} title="More"/>
          </div>
          <div className="flex space-x-4">
             <p className="link">Setings</p>
             <p className="link">Tools</p>          
          </div>    
      </div>
  )
}

export default HeaderOptions;