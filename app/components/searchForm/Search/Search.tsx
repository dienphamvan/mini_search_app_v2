import { SearchButton } from './SearchButton'
import { SearchInput } from './SearchInput'

type SearchProps = {
    isFocus: boolean
    onChangeFocus: (value: boolean) => void
    onSubmit: (value: string) => void
    searchValue: string
    onChangeSearch: (value: string) => void
    suggestResult?: string[]

    inputRef: React.RefObject<HTMLInputElement | null>
}

export function Search({
    isFocus,
    onChangeFocus,
    onSubmit,
    searchValue,
    onChangeSearch,
    suggestResult,
    inputRef,
}: SearchProps) {
    return (
        <div className='py-12 shadow-lg px-6'>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmit(searchValue)
                }}
                className='relative max-w-6xl mx-auto flex rounded-lg rounded-r-lg  border border-gray-300 has-[#search:focus]:border-primary'
            >
                <SearchInput
                    searchValue={searchValue}
                    onChangeSearch={onChangeSearch}
                    suggestResult={suggestResult}
                    isFocus={isFocus}
                    onChangeFocus={onChangeFocus}
                    inputRef={inputRef}
                    onSubmit={onSubmit}
                />
                <SearchButton />
            </form>
        </div>
    )
}
