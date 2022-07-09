import { Flex, Box, Image, Stack, Icon, Heading, Text } from '@chakra-ui/react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import { ContinentInformation } from '../../components/ContinentInformation'
import { MostVisitedCities } from '../../components/MostVisitedCities'
import { api } from '../../services/axios'

interface GetContinentData {
  continent: {
    id: string
    name: string
    subtitle: string
    url: string
    image: string
    info: {
      description: string
      totalCountries: number
      totalLanguages: number
      totalOfMostVisitedCities: number
    }
  }
}

export default function Continent({ continent }: GetContinentData) {
  return (
    <Flex direction='column' align='center' justify='center' w='full'>
      <Box
        bgImage={continent.image}
        bgPosition='center'
        bgRepeat='no-repeat'
        w='full'
        h={['255px', '500px']}
        display='flex'
        alignItems={'flex-end'}
        justifyContent='flex-start'
      >
        <Heading fontWeight='semibold' color='gray.50' ml='24' mb='16'>
          {continent.name}
        </Heading>
      </Box>

      <Flex w='full' align='center' justify='center' gap='100' py='16'>
        <Text
          fontSize='2xl'
          maxWidth='600px'
          color='gray.700'
          textAlign='justify'
        >
          {continent.info.description}
        </Text>

        <ContinentInformation
          totalCountries={continent.info.totalCountries}
          totalLanguages={continent.info.totalLanguages}
          totalOfMostVisitedCities={continent.info.totalOfMostVisitedCities}
        />
      </Flex>

      <MostVisitedCities />
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const continents = ['europe', 'north-america', 'africa', 'asia', 'oceania']

  const paths = continents.map(continent => {
    return {
      params: {
        name: continent
      }
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params

  const data = await api
    .get('/continents/', { params: { url: name } })
    .then(res => res.data[0])

  const continent = { ...data }

  return {
    props: {
      continent
    }
  }
}
