import type { SuggestionResponse } from '~/types'

export async function suggestService(searchValue: string): Promise<string[]> {
    try {
        const endpoint = new URL(import.meta.env.VITE_API_SUGGESTION_ENDPOINT)
        endpoint.searchParams.append('q', searchValue)
        const res = await fetch(endpoint.toString())

        if (!res.ok) {
            throw new Error(
                `HTTP error! Status: ${res.status} - ${res.statusText}`
            )
        }

        const data = (await res.json()) as SuggestionResponse

        // Only do this because the mock data in the API
        return data.suggestions
            .filter((suggestion) => suggestion.includes(searchValue))
            .slice(0, 6)
    } catch (error) {
        throw error
    }
}
