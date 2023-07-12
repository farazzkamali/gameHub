import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import ExpandableText from "../components/ExpandableText"
import DefenitionItem from "../components/DefinitionItem"
import CriticScore from "../components/CriticScore"


const GameDetailPage = () => {
    const {slug} =useParams()
    const {data: game, isLoading, error} = useGame(slug!)

    if (isLoading) return <Spinner/>
    if (error || !game) throw error
    
    return (
        <>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>

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
        </>
    )
}

export default GameDetailPage 