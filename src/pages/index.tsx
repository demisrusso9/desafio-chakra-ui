import { Box, Flex, Heading } from '@chakra-ui/react'
import { Carousel } from '../components/Carousel'
import { Travel } from '../components/Travel'
import { Banner } from '../components/Banner'

export default function Home() {
  return (
    <Flex w='100%' h='100%' flexDirection='column'>
      <Box
        bgImage="url('banner-background.png')"
        bgPosition='center'
        bgRepeat='no-repeat'
        w='full'
        h={['255px', '335px']}
        maxWidth='1440px'
        px={['30', '30', '40']}
        py={['10', '10', '20']}
        display='flex'
      >
        <Banner />
      </Box>

      <Travel />

      <Box w='90px' h='2px' mx='auto' my='8' bg='gray.700' />

      <Heading
        fontWeight='medium'
        color='gray.700'
        textAlign='center'
        lineHeight='tall'
        fontSize={['lg', '4xl']}
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>

      <Carousel />
    </Flex>
  )
}
