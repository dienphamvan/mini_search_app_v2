import type { SearchResponse } from '~/types'
import { ListItem } from './ListItem'

type ListProps = {
    searchResult: SearchResponse
}

export function List({ searchResult }: ListProps) {
    return (
        <div className='max-w-4xl'>
            <span className='text-xl font-semibold'>
                {searchResult.TotalNumberOfResults > 0
                    ? `Showing ${searchResult.Page}-${searchResult.PageSize} of 
                    ${searchResult.TotalNumberOfResults} results`
                    : 'No data found'}
            </span>

            <ul>
                {searchResult.ResultItems.map((item) => (
                    <ListItem key={item.DocumentId} data={item} />
                ))}
            </ul>
        </div>
    )
}
