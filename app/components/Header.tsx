import { LionIcon } from '~/components/common/icons/LionIcon'

export function Header() {
    return (
        <div className=' bg-gray-300 py-1'>
            <div className=' max-w-6xl flex items-center gap-2 mx-auto'>
                <LionIcon />
                <span className='text-[10px]'>
                    <span className='font-extralight'>
                        An Official Website of the{' '}
                    </span>
                    <span>Singapore Government</span>
                </span>
            </div>
        </div>
    )
}
