import { HomePage } from '~/pages/HomePage'
import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
    return [{ title: 'Mini Search App' }]
}

export default function Home() {
    return <HomePage />
}
