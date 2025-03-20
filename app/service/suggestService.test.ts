import { describe, it, expect, beforeEach, vi } from 'vitest'
import { suggestService } from './suggestService'
import type { SuggestionResponse } from '~/types'

describe('suggestService', () => {
    beforeEach(() => {
        vi.restoreAllMocks() // Reset mocks before each test
    })

    it('returns filtered suggestions when API call is successful', async () => {
        const mockResponse: SuggestionResponse = {
            stemmedQueryTerm: 'test',
            suggestions: [
                'test suggestion 1',
                'test suggestion 2',
                'other suggestion',
                'test case',
                'testing 123',
                'test-driven',
                'extra suggestion',
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

        const result = await suggestService('test')

        // Should return at most 6 filtered suggestions
        expect(result).toEqual([
            'test suggestion 1',
            'test suggestion 2',
            'test case',
            'testing 123',
            'test-driven',
        ])
        expect(result.length).toBeLessThanOrEqual(6)
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\?q=test/))
    })

    it('returns an empty array when no matching suggestions are found', async () => {
        const mockResponse: SuggestionResponse = {
            stemmedQueryTerm: 'test',
            suggestions: ['random suggestion', 'something else'],
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

        const result = await suggestService('test')

        expect(result).toEqual([])
        expect(fetch).toHaveBeenCalledTimes(1)
    })

    it('throws an error when the API returns a non-OK status', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn(() =>
                Promise.resolve({
                    ok: false,
                    status: 500,
                    statusText: 'Internal Server Error',
                } as Response)
            )
        )

        await expect(suggestService('test')).rejects.toThrow(
            'HTTP error! Status: 500 - Internal Server Error'
        )

        expect(fetch).toHaveBeenCalledTimes(1)
    })

    it('throws an error when there is a network issue', async () => {
        vi.stubGlobal(
            'fetch',
            vi.fn(() => Promise.reject(new Error('Network error')))
        )

        await expect(suggestService('test')).rejects.toThrow('Network error')

        expect(fetch).toHaveBeenCalledTimes(1)
    })
})
