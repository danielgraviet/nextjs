function capitalizeWords(str: string): string {

    let splitString = str.split(' ');
    
    let capitalizedString = splitString.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })

    let completeString = capitalizedString.join(' ');
    return completeString
}

async function Home() {

    const data = await fetch('https://jsonplaceholder.typicode.com/albums')
    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    const albums = await data.json() // the json() menas read the data and parse into a JavaScript object. 

    return <div>
        {albums.map((album: any) => (
            <div key={album.id}>
                <h1 className='text-2xl font-bold'>Title {album.id}: </h1>
                <p className='text-lg'>{capitalizeWords(album.title)}</p>
            </div>
        ))}
    </div>;
}

export default Home;
