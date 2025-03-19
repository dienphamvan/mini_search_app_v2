import type { SearchRecord } from '~/types'
import { TextOffsetHighLight } from '../../common/TextOffsetHighLight'

type ListItemProps = {
    data: SearchRecord
}

export function ListItem({ data }: ListItemProps) {
    return (
        <li className='mt-10'>
            <a href={data.DocumentURI} target='_blank' rel='noreferrer'>
                <h3 className='text-primary font-semibold text-xl mb-2'>
                    <TextOffsetHighLight
                        text={data.DocumentTitle.Text}
                        highlights={data.DocumentTitle.Highlights}
                    />
                </h3>
            </a>
            <div className='mb-1'>
                <span>1 Sep 2021 — </span>
                <TextOffsetHighLight
                    text={`${data.DocumentExcerpt.Text}`}
                    highlights={data.DocumentExcerpt.Highlights}
                />
            </div>
            <a href={data.DocumentURI} className='text-faded text-sm'>
                {data.DocumentURI}
            </a>
        </li>
    )
}
