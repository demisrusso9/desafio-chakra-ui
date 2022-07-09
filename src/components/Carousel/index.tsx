import Link from 'next/link'
import { api } from '../../services/axios'
import { useEffect, useState } from 'react'
import { Flex, Heading, Text, Stack } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import styles from './carousel.module.scss'

interface GetContinentData {
  id: string
  name: string
  subtitle: string
  url: string
  image: string
}

export function Carousel() {
  const [list, setList] = useState<GetContinentData[]>([])

  async function getMultipleImages() {
    try {
      await api
        .get<GetContinentData[]>('/continents')
        .then(res => setList(res.data))
    } catch {
      console.log('Error')
    }
  }

  useEffect(() => {
    getMultipleImages()
  }, [])

  return (
    <Flex
      align='center'
      justify='center'
      m={['0', '0', '16']}
      my={['10', '16']}
    >
      <Swiper
        className={styles.sliderWrapper}
        modules={[Navigation, Pagination, EffectFade]}
        navigation
        pagination
        effect='slide'
        speed={800}
        slidesPerView={1}
        loop
      >
        {list &&
          list.map(continent => (
            <SwiperSlide key={continent.id}>
              <Flex
                bgImage={`url(${continent.image})`}
                bgPosition='center'
                bgRepeat='no-repeat'
                align='center'
                justify='center'
                w='full'
                h='450px'
                mx='auto'
                maxHeight={['300px', '450px']}
                maxWidth='1240px'
              >
                <Flex direction='column'>
                  <Stack spacing={4} align='center' justify='center'>
                    <Link href={`/continent/${continent.url}`}>
                      <a>
                        <Heading
                          fontWeight='bold'
                          color='gray.50'
                          fontSize={['2xl', '5xl']}
                        >
                          {continent.name}
                        </Heading>
                      </a>
                    </Link>

                    <Text
                      fontWeight='bold'
                      fontSize={['sm', 'lg']}
                      color='gray.100'
                      textAlign='center'
                    >
                      {continent.subtitle}
                    </Text>
                  </Stack>
                </Flex>
              </Flex>
            </SwiperSlide>
          ))}
      </Swiper>
    </Flex>
  )
}
