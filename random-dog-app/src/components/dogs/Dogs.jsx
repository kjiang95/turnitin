import React from "react";
import './Dogs.css';

const renderDogLinks = (dogs) => {
    return dogs.map((dog, index) => {
        const breed = dog.split('/')[4]
        return (
            <a href={dog} target='blank_' rel="noopener noreferrer" className='dog-button' key={breed + index.toString()}>
                {breed}
            </a>
        )
    })
}

const Dogs = () => {
    const [ randomDogs, setRandomDogs ] = React.useState([])

    const getAndSetRandomDog = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/11')
        const randomDogImage = await response.json()

        setRandomDogs(randomDogImage.message)
    }

    React.useEffect(() => {
        getAndSetRandomDog().catch(console.error)
    }, [])

    return (
        <div>
            <div className='main-image'>
                <img src={randomDogs[0]} alt="main random dog" />
            </div>
            <div>
                <ul>{renderDogLinks(randomDogs.slice(1))}</ul>
            </div>
        </div>
    )
}

export default Dogs;