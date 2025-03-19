import { render, screen, fireEvent } from '@testing-library/react'
import { SearchInput } from './SearchInput'
import React, { createRef } from 'react'
import { beforeEach, describe, expect, it, vi, type VitestUtils } from 'vitest'

vi.mock('react-router', () => ({
    useSearchParams: () => {
        return ['']
    },
}))

describe('SearchInput Component', () => {
    let onChangeSearch: (value: string) => void
    let onChangeFocus: (value: boolean) => void
    let onSubmit: (value: string) => void
    let inputRef: React.RefObject<HTMLInputElement | null>

    beforeEach(() => {
        onChangeSearch = vi.fn()
        onChangeFocus = vi.fn()
        onSubmit = vi.fn()
        inputRef = createRef()
    })

    it('renders the input field', () => {
        render(
            <SearchInput
                searchValue=''
                onChangeSearch={onChangeSearch}
                isFocus={false}
                onChangeFocus={onChangeFocus}
                inputRef={inputRef}
                onSubmit={onSubmit}
            />
        )

        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    })

    it('calls onChangeSearch when typing', () => {
        render(
            <SearchInput
                searchValue=''
                onChangeSearch={onChangeSearch}
                isFocus={false}
                onChangeFocus={onChangeFocus}
                inputRef={inputRef}
                onSubmit={onSubmit}
            />
        )

        const input = screen.getByPlaceholderText('Search...')
        fireEvent.change(input, { target: { value: 'React' } })

        expect(onChangeSearch).toHaveBeenCalledWith('React')
    })

    it('calls onSubmit when pressing Enter with a selected suggestion', () => {
        render(
            <SearchInput
                searchValue='React'
                onChangeSearch={onChangeSearch}
                isFocus={true}
                onChangeFocus={onChangeFocus}
                inputRef={inputRef}
                onSubmit={onSubmit}
                suggestResult={['React', 'React Native']}
            />
        )

        const input = screen.getByPlaceholderText('Search...')
        fireEvent.keyDown(input, { key: 'ArrowDown' })
        fireEvent.keyDown(input, { key: 'Enter' })
        expect(onSubmit).toHaveBeenCalledWith('React')
    })

    it('calls onChangeFocus on focus and blur', () => {
        render(
            <SearchInput
                searchValue=''
                onChangeSearch={onChangeSearch}
                isFocus={false}
                onChangeFocus={onChangeFocus}
                inputRef={inputRef}
                onSubmit={onSubmit}
            />
        )

        const input = screen.getByPlaceholderText('Search...')
        fireEvent.focus(input)
        expect(onChangeFocus).toHaveBeenCalledWith(true)

        fireEvent.blur(input)
        expect(onChangeFocus).toHaveBeenCalledWith(false)
    })
})
