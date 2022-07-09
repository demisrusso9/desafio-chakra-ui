import { Circle, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

interface TravelTypeProps {
  title: string
  iconPath: string
}

export function TravelType({ title, iconPath }: TravelTypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex direction='column' align='center'>
      {isWideVersion ? (
        <Image src={iconPath} alt={title} />
      ) : (
        <Circle size='8px' bg='yellow.500' />
      )}

      <Text fontWeight='medium' mt='6' color='gray.700'>
        {title}
      </Text>
    </Flex>
  )
}
