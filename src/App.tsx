import './App.css'
import {useGetCharacters} from "./api/apiComponents.ts";
import {CharacterCard} from "./CharacterCard.tsx";

function App() {

    const variables = {};
    const options = {};
    const {data, isLoading, isError, error} = useGetCharacters(variables, options);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }
    return (
        <>
            <h1 className="text-3xl text-amber-500 font-bold underline">
                Hello Rick and Morty!
            </h1>
            <div className="flex flex-row flex-wrap">{
                data?.results?.map(character => (
                    <CharacterCard key={character.id} character={character}/>
                ))
            }</div>
        </>
    )
}

export default App
