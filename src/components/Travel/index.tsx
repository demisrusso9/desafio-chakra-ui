import {
  Grid,
  GridItem,
  Flex,
  HStack,
  SimpleGrid,
  useBreakpointValue
} from '@chakra-ui/react'
import { TravelType } from './TravelType'

export function Travel() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const travel = [
    { id: 1, title: 'vida noturna', iconPath: '/cocktail.svg' },
    { id: 2, title: 'praia', iconPath: '/surf.svg' },
    { id: 3, title: 'moderno', iconPath: '/building.svg' },
    { id: 4, title: 'clássico', iconPath: '/museum.svg' },
    { id: 5, title: 'e mais ...', iconPath: '/earth.svg' }
  ]

  return (
    <Flex
      w='100%'
      h='100%'
      mt='12'
      p='10'
      align='center'
      justify='center'
      bg='white'
    >
      <HStack spacing='32'>
        {isWideVersion && (
          <>
            {travel.map(t => (
              <TravelType key={t.id} title={t.title} iconPath={t.iconPath} />
            ))}
          </>
        )}

        {!isWideVersion && (
          <SimpleGrid columns={2} spacing={20}>
            {travel.map(t => (
              <TravelType key={t.id} title={t.title} iconPath={t.iconPath} />
            ))}
          </SimpleGrid>
        )}
      </HStack>
    </Flex>
  )
}
