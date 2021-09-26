import PaginationButtons from "./PaginationButtons";

const SearchResults = ({results}) => {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map(result => {
        return (
          <div className="block max-w-xl mb-8" key={result.link}>
            <div className="group">
              <a href={result.link} className="line-clamp-1 text-sml">
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2 className="truncate text-blue-800 font-medium group-hover:underline text-xl">
                  {result.title}
                </h2>
              </a>
            </div>
            <p className="line-clamp-2">{result.snippet}</p>
          </div>
        );
      })}

      <PaginationButtons />
    </div>
  );
};

export default SearchResults;
