import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import { MicrophoneIcon } from "@heroicons/react/solid";
import {SearchIcon} from '@heroicons/react/solid'
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {

    const router = useRouter();
    const [searchInput, setSearchInput] = useState(router.query.term);



    const handleChange = (input) => {
        setSearchInput(input);
    }


    const search = e => {
        e.preventDefault();
        const term =searchInput;

        if (!term) {
            return;
        }

        router.push(`/search?term=${term}`);

    }

  return (
      <header className="sticky top-0 bg-white">
          <div className="flex items-center w-full p-6">
                <Image src="/google-logo.png" alt="google-logo" className="cursor-pointer" height={40} width={120} onClick={() => router.push('/')} />
                <form onSubmit={search} className="flex items-center flex-grow max-w-3xl px-6 py-2 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
                  <input type="text" className="flex-grow w-full focus:outline-none" value={searchInput} onChange={e=>handleChange(e.target.value)} />
                    <XIcon className="text-gray-500 transition duration-100 cursor-pointer h-7 hover:scale-125 sm:mr-2" onClick={()=>setSearchInput("")}/>
                    <MicrophoneIcon className="hidden pl-3 mr-3 text-blue-500 border-l-2 border-gray-300 h-7 sm:inline-flex" />
                    <SearchIcon className="hidden text-blue-500 h-7 sm:inline-flex" />
                    <button hidden type="submit">search</button>
              </form>
              <Avatar url="/user-profile.png"/>
          </div>
          <HeaderOptions/>
     </header>
  )
}

export default Header;