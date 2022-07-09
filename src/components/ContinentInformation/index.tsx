import { Box, Text, HStack } from '@chakra-ui/react'

interface ContinentInformationProps {
  totalCountries: number
  totalLanguages: number
  totalOfMostVisitedCities: number
}

export function ContinentInformation({
  totalCountries,
  totalLanguages,
  totalOfMostVisitedCities
}: ContinentInformationProps) {
  return (
    <HStack spacing='8' textAlign='center' fontWeight='semibold' mx='20'>
      <Box>
        <Text color='yellow.500' fontSize={['3xl', '5xl']}>
          {totalCountries}
        </Text>
        <Text color='gray.700'>países</Text>
      </Box>

      <Box>
        <Text color='yellow.500' fontSize={['3xl', '5xl']}>
          {totalLanguages}
        </Text>
        <Text color='gray.700'>línguas</Text>
      </Box>

      <Box>
        <Text color='yellow.500' fontSize={['3xl', '5xl']}>
          {totalOfMostVisitedCities}
        </Text>
        <Text color='gray.700'>cidade 100+</Text>
      </Box>
    </HStack>
  )
}
