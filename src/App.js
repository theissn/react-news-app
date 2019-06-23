import React, { useState } from 'react';
import NewsLister from './components/NewsUI/NewsLister';

function App() {
  const [country, setCountry] = useState('gb');
  const [query, setQuery] = useState('');

  return (
    <div className="text-left">
      <header className="bg-purple-darker p-6 rounded shadow-lg">
        <p className="font-bold">News App</p>
      </header>
      <div className="flex flex-wrap my-6">
        <div className="w-full sm:w-1/2 md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
            Country
        </label>
          <div className="relative">
            <select
              onChange={ev => setCountry(ev.target.value)}
              value={country}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option value="gb">United Kingdom</option>
              <option value="us">United States</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-query">
            Query
        </label>
          <div className="relative">
            <input
              onKeyDown={ev => ev.keyCode === 13 ? setQuery(ev.target.value) : null}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              name="grid-query"
              id="grid-query"
            />
          </div>
        </div>
      </div>
      <NewsLister country={country} query={query} />
    </div>
  );
}

export default App;
