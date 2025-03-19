type LionIconProps = {
    color?: string
    className?: React.SVGAttributes<SVGSVGElement>['className']
} & React.SVGAttributes<SVGSVGElement>

export function LionIcon({
    color = 'white',
    className,
    ...rest
}: LionIconProps) {
    return (
        <svg
            width='14'
            height='16'
            viewBox='0 0 14 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.63873 1.84461C2.63873 1.84461 3.07181 1.07068 4.08234 1.07068C4.87632 1.07068 5.05677 0.661654 5.05677 0.661654C5.05677 0.661654 5.40564 0 7.15803 0C8.76204 0 9.84474 0.533333 10.7189 1.25113C10.7189 1.25113 8.36103 -0.212531 6.03522 1.84461H2.63873ZM1.02269 6.69674C0.260782 5.63409 0.842236 4.81203 0.842236 4.81203C0.842236 4.81203 0.970557 5.33734 1.95301 5.33734C2.93547 5.33734 3.11592 4.38697 2.13346 4.38697H1.58409C1.11091 4.38697 0.822186 4.63559 0.822186 4.63559C0.822186 4.63559 0.754016 4.46717 0.573564 3.97393C0.393113 3.4807 0.585595 3.29223 0.713915 3.22005C0.842236 3.14787 1.12294 3.09975 1.12294 3.09975V2.86717C0.894366 2.88722 0.661785 3.02757 0.661785 3.02757C0.681835 2.16541 1.70439 2.16541 1.70439 2.16541H3.0678C3.0678 2.65464 3.88986 2.5985 3.88986 2.16541H6.31592C6.79712 2.16541 7.13798 2.40602 6.81717 3.00752C6.49637 3.60902 5.53397 3.50877 5.53397 3.50877C6.17557 4.85213 5.15301 6.15539 3.7896 6.15539H2.346C1.14299 6.15539 1.02269 6.69674 1.02269 6.69674ZM6.53246 3.62506C6.29186 3.83759 5.96304 3.81754 5.96304 3.81754C6.50439 5.62206 3.81767 6.97744 3.81767 6.96942C-0.256511 9.2391 0.649755 12.0862 2.13346 13.9469C3.16003 15.2341 4.50339 15.992 4.50339 15.992C4.17056 14.9013 4.75201 14.3398 4.75201 14.3398C4.75201 14.3398 2.25778 12.1343 5.48183 8.72581C8.7059 5.31729 6.53246 3.62506 6.53246 3.62506ZM6.48835 1.88471C10.5144 1.73634 12.3831 4.33083 12.4513 6.74887C12.5595 8.55338 11.6212 9.89273 11.6212 9.89273C17.2352 5.98697 10.4182 -1.44361 6.48835 1.88471ZM7.08986 2.15338C11.9941 2.00501 13.7465 7.88772 10.5786 10.5343L7.39863 12.0702C7.39863 12.0702 6.98559 10.7348 8.52143 9.17093C10.0573 7.60702 11.541 4.6797 7.29036 2.75489C7.29036 2.75489 7.37056 2.35388 7.08986 2.15338ZM7.15803 3.06366C7.07783 3.24812 6.83722 3.47669 6.83722 3.47669C6.83722 3.47669 9.05477 5.46566 5.84675 8.74185C2.57858 12.0782 4.93647 14.0872 4.93647 14.0872C5.49788 13.205 7.12996 12.1905 7.12996 12.1905C7.12996 12.1905 6.71692 10.7068 8.05226 9.33133C10.2337 7.16591 10.8071 4.58747 7.15803 3.06366Z'
                fill='#D0021B'
            />
        </svg>
    )
}
