import { Flex, Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { CityCard } from '../CityCard'

export function MostVisitedCities() {
  return (
    <Flex align='center' direction='column'>
      <Heading
        w='full'
        textAlign='left'
        color='gray.700'
        fontWeight='medium'
        mb='10'
      >
        Cidades +100
      </Heading>

      <SimpleGrid columns={4} spacing={10}>
        <CityCard city='Londres' country='Reino Unido' imageUrl='' />
        <CityCard city='Londres' country='Reino Unido' imageUrl='' />
        <CityCard city='Londres' country='Reino Unido' imageUrl='' />
        <CityCard city='Londres' country='Reino Unido' imageUrl='' />
        <CityCard city='Londres' country='Reino Unido' imageUrl='' />
      </SimpleGrid>
    </Flex>
  )
}
