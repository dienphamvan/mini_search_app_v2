import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router'
import type { SearchResponse } from '~/types'
import { searchService, suggestService } from '../../service'
import Loading from '../common/Loading'
import { List } from './List'
import { Search } from './Search'

export function SearchForm() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState<SearchResponse>()
    const [suggestResult, setSuggestResult] = useState<string[]>()
    const [isLoading, setIsLoading] = useState(false)
    const [isFocus, setIsFocus] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchParamsValue = searchParams.get('search')
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (search: string) => {
        setSearchParams({ search })
        inputRef.current?.blur()
    }

    const handleFetchSearch = async (value: string) => {
        try {
            setIsLoading(true)
            const data = await searchService(value)
            setSearchResult(data)
        } catch (error) {}
        setIsLoading(false)
    }

    const handleFetchSuggestions = async (value: string) => {
        setSearchValue(value)

        if (value.length > 2) {
            const data = await suggestService(value)
            setSuggestResult(data)
        } else {
            setSuggestResult([])
        }
    }

    useEffect(() => {
        if (searchParamsValue) {
            setSearchValue(searchParamsValue)
            handleFetchSearch(searchParamsValue)
            handleFetchSuggestions(searchParamsValue)
        } else {
            inputRef.current?.focus()
            setSearchResult(undefined)
            setSuggestResult([])
        }
    }, [searchParamsValue])

    return (
        <div>
            <Search
                onSubmit={handleSubmit}
                searchValue={searchValue}
                onChangeSearch={handleFetchSuggestions}
                suggestResult={suggestResult}
                isFocus={isFocus}
                onChangeFocus={setIsFocus}
                inputRef={inputRef}
            />
            {isLoading ? (
                <Loading className='mt-4' size='large' />
            ) : (
                <div className='py-12 max-w-6xl mx-auto px-6'>
                    {searchResult && <List searchResult={searchResult} />}
                </div>
            )}
        </div>
    )
}
