import {Character} from "./api/apiSchemas.ts";

export const CharacterCard = ({character}: {character: Character}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white w-96 m-1">
            <img className="w-full" src={character.image} alt={`Character ${character.name}`}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{character.name}</div>
                <p className="text-gray-700 text-base">
                    Status: <span className="font-semibold">{character.status}</span>
                </p>
                <p className="text-gray-700 text-base">
                    Species: <span className="font-semibold">{character.species}</span>
                </p>
                <p className="text-gray-700 text-base">
                    Gender: <span className="font-semibold">{character.gender}</span>
                </p>
                <p className="text-gray-700 text-base">
                    Origin: <span className="font-semibold">{character.origin?.name}</span>
                </p>
                <p className="text-gray-700 text-base">
                    Location: <span className="font-semibold">{character.location?.name}</span>
                </p>
            </div>
        </div>
    );
};

