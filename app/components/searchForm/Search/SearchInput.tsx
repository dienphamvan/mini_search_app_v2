import { useState } from 'react'
import { CrossIcon } from '../../common/icons/CrossIcon'
import { Suggestion } from './Suggestion/Suggestion'

type SearchInputProps = {
    searchValue: string
    onChangeSearch: (value: string) => void
    isFocus: boolean
    onChangeFocus: (value: boolean) => void
    suggestResult?: string[]
    inputRef: React.RefObject<HTMLInputElement | null>
    onSubmit: (value: string) => void
}

export function SearchInput({
    searchValue,
    onChangeSearch,
    suggestResult,
    isFocus,
    onChangeFocus,
    inputRef,
    onSubmit,
}: SearchInputProps) {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const isShowSuggestion =
        suggestResult && suggestResult.length > 0 && isFocus

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIndex((prev) => {
                if (prev < suggestResult!.length - 1) {
                    return prev + 1
                }
                return 0
            })
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIndex((prev) => {
                if (prev > 0) {
                    return prev - 1
                }
                return suggestResult!.length - 1
            })
        }

        if (e.key === 'Enter') {
            // TODO: handle select suggestion
            // onSubmit(suggestResult![selectedIndex])

            if (selectedIndex !== -1) {
                e.preventDefault()
                onSubmit(suggestResult![selectedIndex])
            }
        }
    }

    const handleChangeSearch = (value: string) => {
        onChangeSearch(value)
        setSelectedIndex(-1)
    }

    return (
        <div className='flex items-center grow relative'>
            <input
                id='search'
                type='text'
                className='pl-4  outline-0 grow  h-full border-r-0 rounded-l-lg'
                placeholder='Search...'
                value={searchValue}
                onChange={(e) => handleChangeSearch(e.target.value)}
                onFocus={() => onChangeFocus(true)}
                onBlur={() => onChangeFocus(false)}
                ref={inputRef}
                onKeyDown={handleKeyDown}
            />
            {searchValue && (
                <CrossIcon
                    className='mr-4 h-full cursor-pointer'
                    onClick={() => {
                        handleChangeSearch('')
                        inputRef.current?.focus()
                    }}
                />
            )}

            {isShowSuggestion && (
                <Suggestion
                    suggestResult={suggestResult}
                    searchValue={searchValue}
                    selectedIndex={selectedIndex}
                />
            )}
        </div>
    )
}
