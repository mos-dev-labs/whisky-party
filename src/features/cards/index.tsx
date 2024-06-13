import {whiskyList} from '@/entities/data/index.json'
import {NoSymbolIcon} from "@heroicons/react/24/outline";


interface Props {
  onClick: (id: string) => void;
}

// @ts-ignore
export const MainCards = ({onClick}: Props) => {

  const handleClick = (id: string) => () => onClick(id)

  return (
    <div className="cards bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
          {whiskyList.map((whisky) => (
            <a key={whisky.id} className="group" onClick={handleClick(whisky.id)}>
              <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                {whisky.imageUrl ? (
                  <img
                    src={whisky.imageUrl}
                    alt={whisky.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                ) : (
                  <div className="h-full w-full object-cover object-center group-hover:opacity-75">
                    <NoSymbolIcon/>
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{whisky.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{whisky.type}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/