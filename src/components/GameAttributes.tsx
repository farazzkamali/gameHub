import { SimpleGrid, Text } from "@chakra-ui/react"
import { Game } from "../entities/Game"
import CriticScore from "./CriticScore"
import DefenitionItem from "./DefinitionItem"

interface Props{
    game: Game
}

const GameAttributes = ({game}: Props) => {
    return(
        <SimpleGrid columns={2} as='dl'>
        <DefenitionItem term="Platforms">
            {game.parent_platforms?.map(p=>
                <Text>{p.platform.name}</Text>
            )}
            {/* destructured: {game.parent_platforms?.map(({platform})=><Text>{platform.name}</Text>)} */}
        </DefenitionItem>
        <DefenitionItem term="Metascore">
            <CriticScore score={game.metacritic}/>
        </DefenitionItem>
        <DefenitionItem term="Genres">
            {game.genres.map(genre=><Text key={genre.id}>{genre.name}</Text>)}
        </DefenitionItem>
        <DefenitionItem term="Publishers">
            {game.publishers?.map(publisher=><Text key={publisher.id}>{publisher.name}</Text>)}
        </DefenitionItem>
    </SimpleGrid>
    )
}

export default GameAttributes