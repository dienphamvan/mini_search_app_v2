import { describe, it, expect, beforeEach, vi } from 'vitest'
import { searchService } from './searchService'
import type { SearchResponse } from '~/types'

describe('searchService', () => {
    beforeEach(() => {
        vi.restoreAllMocks() // Reset mocks before each test
    })

    it('returns search results when API call is successful', async () => {
        const mockResponse: SearchResponse = {
            TotalNumberOfResults: 2,
            Page: 1,
            PageSize: 10,
            ResultItems: [
                {
                    DocumentId: '1',
                    DocumentTitle: {
                        Text: 'Result 1',
                        Highlights: [],
                    },
                    DocumentExcerpt: {
                        Text: 'Result 1 excerpt',
                        Highlights: [],
                    },
                    DocumentURI: 'https://example.com/1',
                },
            ],
        }

        vi.stubGlobal(
            'fetch',
            vi.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockResponse),
                } as Response)
            )
        )

        const result = await searchService('test')

        expect(result).toEqual(mockResponse)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\?q=test$/))
    })

    it('throws an error when the API returns a non-OK status', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn(() =>
                Promise.resolve({
                    ok: false,
                    status: 404,
                    statusText: 'Not Found',
                } as Response)
            )
        )

        await expect(searchService('invalid')).rejects.toThrow(
            'HTTP error! Status: 404 - Not Found'
        )

        expect(fetch).toHaveBeenCalledTimes(1)
    })

    it('throws an error when there is a network issue', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn(() => Promise.reject(new Error('Network error')))
        )

        await expect(searchService('test')).rejects.toThrow('Network error')

        expect(fetch).toHaveBeenCalledTimes(1)
    })
})
