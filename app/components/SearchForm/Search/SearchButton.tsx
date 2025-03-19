import { SearchIcon } from '../../common/icons/SearchIcon'

export function SearchButton() {
    return (
        <button className='py-3 px-10 bg-primary disabled:bg-gray-400 text-lg text-white rounded-lg cursor-pointer flex items-center gap-2'>
            <SearchIcon />
            <span>Search</span>
        </button>
    )
}
