import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const PaginationButtons = () => {

    const { query } = useRouter();  
    const startIndex = Number(query.start) || 0;

  return (
      <div className="flex items-center justify-between max-w-lg mb-10 text-blue-700">
          {
              startIndex >= 10 &&
              <Link href={`/search?term=${query.term}&start=${startIndex - 10}`}>
                      <div className="flex flex-col items-center flex-grow cursor-pointer hover:underline">
                          <ChevronLeftIcon className="h-6" /><p>Previous</p>
                      </div>
              </Link>      
          }     
          
          <Link href={`/search?term=${query.term}&start=${startIndex + 10}`}>
              <div className="flex flex-col items-center flex-grow cursor-pointer hover:underline">
                  <ChevronRightIcon className="h-6" /> <p>Next</p>
              </div>
         </Link>    
      </div>
  )
}

export default PaginationButtons;