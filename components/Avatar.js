import Image from "next/image";


const Avatar = ({ url }) => {
    return (
        <div className="bg-gray-100 p-1 rounded-full cursor-pointer  transition duration-150 hover:scale-110 ml-auto">
            <Image src={url} alt="icon" width={30} height={30} />
        </div>
        
  )
}

export default Avatar;
