import { SuggestionItem } from './SuggestionItem'

type SuggestionProps = {
    searchValue: string
    suggestResult: string[]
    selectedIndex: number
}

export function Suggestion({
    searchValue,
    suggestResult,
    selectedIndex,
}: SuggestionProps) {
    return (
        <ul className='absolute top-[105%] left-0 right-0 bg-gray-100 shadow-md rounded-b-lg'>
            {suggestResult.map((data, index) => (
                <SuggestionItem
                    key={data}
                    searchValue={searchValue}
                    suggestValue={data}
                    isSelected={index === selectedIndex}
                />
            ))}
        </ul>
    )
}
