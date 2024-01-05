import '../styles/home.css'
import Articles from './articles';

function Home() {
    return (
        <div className="home">
            <main>
                <div className='boxes'>
                    <Articles />
                </div>
                <div className='side'>
                    <p>Guyss im not here</p>
                </div>
            </main>
        </div>
    )
}

export default Home;