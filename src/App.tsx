import './App.css'
import GameCardList from './components/GameCardList'
import GenreList from './components/GenreList'
import Layout from './components/Layout'

function App() {
    return (
        <Layout>
            <div className='grid col-span-full md:grid-cols-6 lg:grid-cols-8 gap-2'>
                <div className='md:col-span-full lg:col-span-1 border'>
                    <GenreList />
                </div>
                <div className='md:col-span-6 lg:col-span-7'>
                    <GameCardList />
                </div>
            </div>
        </Layout>
    )
}

export default App
