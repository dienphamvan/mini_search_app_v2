import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { SearchResponse, SuggestionResponse } from '~/types'
import { SearchForm } from './SearchForm'

vi.mock('../../service', () => ({
    searchService: vi.fn(),
    suggestService: vi.fn(),
}))

const mockSearchResponse: SearchResponse = {
    TotalNumberOfResults: 10,
    Page: 1,
    PageSize: 10,
    ResultItems: [
        {
            DocumentId: '1',
            DocumentTitle: {
                Text: 'Test Result',
                Highlights: [],
            },
            DocumentExcerpt: {
                Text: 'Test Result Excerpt',
                Highlights: [],
            },
            DocumentURI: 'https://test.com',
        },
    ],
}

const mockSuggestResponse: SuggestionResponse = {
    stemmedQueryTerm: 'test',
    suggestions: ['Test 1', 'Test 2'],
}

describe('SearchForm Component', () => {
    beforeEach(() => {
        vi.resetAllMocks()
    })

    it('renders search input field', () => {
        render(
            <BrowserRouter>
                <SearchForm />
            </BrowserRouter>
        )
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
})
