import Link from "next/link";

export default async function WebSearchPage({ searchParams }) {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_TEXT}&q=${searchParams.searchTerm}`);
  
  if (!response.ok) throw new Error("Something went wrong");

  const data = await response.json();
  const results = data.items;

  if (!results || results.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else
          <Link href='/'>
            Home
          </Link>
        </p>
      </div>
    );
  }
  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          <h1>{result.title}</h1>
        </div>
      ))}
    </div>
  );
}
