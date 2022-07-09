import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue
} from '@chakra-ui/react'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex>
      <Box
        display={['flex', 'inline']}
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Heading
          fontWeight='medium'
          fontSize={['2xl', '4xl']}
          lineHeight={['normal', 'tall']}
          color='gray.50'
        >
          5 Continentes, <br />
          infinitas possibilidades.
        </Heading>

        <Text
          fontWeight='normal'
          fontSize={['sm', 'lg']}
          mt={['4', '8']}
          color='gray.100'
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      {isWideVersion && (
        <Box mt='8'>
          <Image src='/banner-airplane.png' alt='Airplane' />
        </Box>
      )}
    </Flex>
  )
}
