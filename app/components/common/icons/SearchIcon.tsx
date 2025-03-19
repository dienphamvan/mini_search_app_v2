type SearchIconProps = {
    color?: string
    className?: React.SVGAttributes<SVGSVGElement>['className']
} & React.SVGAttributes<SVGSVGElement>

export function SearchIcon({
    color = 'white',
    className,
    ...rest
}: SearchIconProps) {
    return (
        <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            {...rest}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.18301 2.18301C0.769329 3.59669 0.0625 5.29905 0.0625 7.29015C0.0625 9.28125 0.769329 10.9836 2.18301 12.3973C3.59669 13.811 5.29905 14.5178 7.29015 14.5178C8.70383 14.5178 10.003 14.1295 11.1877 13.353L15.6677 17.833C15.7473 17.9027 15.8369 17.9375 15.9365 17.9375C16.036 17.9375 16.1256 17.9027 16.2053 17.833L17.833 16.2053C17.9027 16.1256 17.9375 16.036 17.9375 15.9365C17.9375 15.8369 17.9027 15.7473 17.833 15.6677L13.353 11.1877C14.1295 10.003 14.5178 8.70383 14.5178 7.29015C14.5178 5.29905 13.811 3.59669 12.3973 2.18301C10.9836 0.769329 9.28125 0.0625 7.29015 0.0625C5.29905 0.0625 3.59669 0.769329 2.18301 2.18301ZM3.79581 10.7696C2.83012 9.80389 2.34729 8.6441 2.34729 7.29015C2.34729 5.9362 2.83012 4.7764 3.79581 3.81072C4.76149 2.84504 5.92627 2.3622 7.29017 2.3622C8.65407 2.3622 9.81636 2.84255 10.7771 3.80325C11.7378 4.76396 12.2181 5.92625 12.2181 7.29015C12.2181 8.65405 11.7378 9.81634 10.7771 10.777C9.81636 11.7377 8.65407 12.2181 7.29017 12.2181C5.92627 12.2181 4.76149 11.7353 3.79581 10.7696Z'
                fill={color}
            />
        </svg>
    )
}
