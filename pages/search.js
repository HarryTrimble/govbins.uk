import { useState } from "react";
import data from "../src/bins";
import Link from "next/link";
import { useRouter } from "next/router";
import A from "../components/a";

export async function getStaticProps() {
  return {
    props: {
      bins: data.bins
        .map((bin) => {
          if (bin.retro != "true" || bin.retro === undefined) {
            return {
              name: bin.councilName,
              slug: bin.slug,
            };
          }
        })
        .filter((bin) => bin !== undefined),
    },
  };
}

const Search = ({ bins }) => {
  const [results, setResults] = useState([]);
  const [noResult, setNoResult] = useState(null);
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const router = useRouter();

  const onKeydown = (e) => {
    switch (e.keyCode) {
      case 13:
        router.push(results[selected].slug);
        break;

      case 38:
        e.preventDefault();
        setSelected(Math.max(selected - 1, 0));
        break;

      case 40:
        e.preventDefault();
        setSelected(Math.min(selected + 1, results.length - 1));
        break;

      default:
        if (e.target.value === "") {
          setResults([]);
          setSelected(null);
          setNoResult(null);
        } else {
          const r = bins.filter((b) =>
            b.name.toLowerCase().includes(e.target.value.toLowerCase())
          );
          setSelected(0);
          if (r.length == 0) {
            setNoResult(true);
            setSearchTerm(e.target.value);
          } else {
            setNoResult(false);
          }
          setResults(r);
        }
        break;
    }
  };

  return (
    <>
      <div className="w-full px-4 md:px-0 md:w-1/2 mx-auto">
        <input
          type="text"
          className="bg-white border border-gray-700 focus:border-gray-900 mt-10 text-4xl w-full px-3 py-1"
          onKeyDown={onKeydown}
        />
        {results && (
          <ul className="bg-white text-4xl max-h-screen overflow-scroll">
            {results.map((result, idx) => {
              return (
                <li key={idx}>
                  <Link href={result.slug}>
                    <a
                      className={`${
                        selected == idx ? "text-white bg-gray-800" : null
                      } hover:text-white hover:bg-gray-800 px-3 py-1 border-b border-l border-r border-gray-300 block`}
                    >
                      {result.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {noResult && (
          <div className="mt-3 text-2xl">
            <p>{searchTerm}</p>
            <p className="font-bold">Not catalogued...yet!</p>
            <A href="/submit-photos">Submit photos</A>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
