import { Header } from '~/components/Header'
import { SearchForm } from '../components/searchForm/SearchForm'

export function HomePage() {
    return (
        <main className='min-h-screen bg-gray-100'>
            <Header />
            <SearchForm />
        </main>
    )
}
