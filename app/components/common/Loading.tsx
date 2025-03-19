import { SpinIcon } from './icons/SpinIcon'

// Size variants
const SIZE_MAP = {
    small: {
        spinner: 'h-4 w-4',
        text: 'text-sm',
        container: 'gap-2',
    },
    medium: {
        spinner: 'h-6 w-6',
        text: 'text-base',
        container: 'gap-3',
    },
    large: {
        spinner: 'h-8 w-8',
        text: 'text-lg',
        container: 'gap-4',
    },
}

type LoadingProps = {
    size?: keyof typeof SIZE_MAP
    text?: string
    className?: React.HTMLAttributes<HTMLDivElement>['className']
}

const Loading = ({
    size = 'medium',
    text = 'Loading...',
    className = '',
}: LoadingProps) => {
    const {
        spinner,
        text: textSize,
        container,
    } = SIZE_MAP[size] || SIZE_MAP.medium

    return (
        <div
            className={`flex items-center justify-center ${container} ${className}`}
        >
            <div className={`animate-spin ${spinner}`}>
                <SpinIcon color='#3b82f6' />
            </div>
            {text && <span className={`${textSize} font-medium`}>{text}</span>}
        </div>
    )
}

export default Loading
