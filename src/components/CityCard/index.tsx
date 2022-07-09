import { Flex, Box, Image, Text } from '@chakra-ui/react'

interface CityCardProps {
  city: string
  country: string
  imageUrl: string
}

export function CityCard({ city, country, imageUrl }: CityCardProps) {
  return (
    <Box
      w='256px'
      h='279px'
      bg='white'
      border='1px'
      borderColor='yellow.500'
      borderRadius='md'
    >
      <Box bg='gray.900' w='256px' h='173px'>
        <Image src={''} alt={''} />
      </Box>

      <Flex p='8' align='center' justify='space-between'>
        <Box>
          <Text fontWeight='semibold' color='gray.700'>
            {city}
          </Text>

          <Text fontWeight='medium' color='gray.300' mt='2'>
            {country}
          </Text>
        </Box>

        <Box>
          <Image src={''} alt={''} /> 0
        </Box>
      </Flex>
    </Box>
  )
}
