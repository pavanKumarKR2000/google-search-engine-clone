import PaginationButtons from "./PaginationButtons";


const SearchResults = ({results}) => {
  return (
      <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-30">
          <p className="my-4 text-gray-600 text-md">About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)</p>    
          {
              results.items?.map(result => {
                  return (
                      <div key={result.link} className="max-w-xl mb-8 h-max">
                          <div className="group">
                              <a href={result.link} target="_blank" className="text-sm">{result.formattedUrl}</a>
                              <a href={result.link} target="_blank">
                                  <h2 className="text-xl font-medium text-blue-800 truncate group-hover:underline">{result.title}</h2>
                              </a>
                          </div>
                          <p className="line-clamp-2">{result.snippet}</p> 
                      </div> 
                  )
            })
          } 
          <PaginationButtons/>
      </div>
  )
}

export default SearchResults;