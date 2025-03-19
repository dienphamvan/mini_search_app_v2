import type { SearchResponse } from '~/types'

export async function searchService(
    searchValue: string
): Promise<SearchResponse | undefined> {
    try {
        const endpoint = new URL(import.meta.env.VITE_API_SEARCHING_ENDPOINT)
        endpoint.searchParams.append('q', searchValue)
        const res = await fetch(endpoint.toString())

        if (!res.ok) {
            throw new Error(
                `HTTP error! Status: ${res.status} - ${res.statusText}`
            )
        }

        const data = (await res.json()) as SearchResponse

        return data
    } catch (error) {
        throw error
    }
}
