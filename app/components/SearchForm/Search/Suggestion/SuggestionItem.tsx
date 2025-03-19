import { useSearchParams } from 'react-router'
import { TextCharHighlight } from '~/components/common/TextCharHighlight'

type SuggestionItemProps = {
    searchValue: string
    suggestValue: string
    isSelected: boolean
}

export function SuggestionItem({
    searchValue,
    suggestValue,
    isSelected,
}: SuggestionItemProps) {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleSelect = () => {
        setSearchParams({ search: suggestValue })
    }

    return (
        <li
            className={`px-6 py-3 hover:bg-gray-300 hover:cursor-pointer ${
                isSelected ? 'bg-gray-200' : ''
            }`}
            onMouseDown={handleSelect}
        >
            <TextCharHighlight text={suggestValue} highlights={[searchValue]} />
        </li>
    )
}
