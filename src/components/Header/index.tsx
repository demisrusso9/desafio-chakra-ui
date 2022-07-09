import { Box, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const { asPath } = useRouter()
  const isIconVisible = asPath.startsWith('/continent')

  return (
    <Flex
      width='full'
      height={['12', '20']}
      bg='#fff'
      align='center'
      justify='center'
    >
      {isIconVisible && (
        <Link href='/' passHref>
          <Box
            as='a'
            alignItems='center'
            justifyItems='center'
            position='absolute'
            left='20'
          >
            <Image src='/arrow.svg' alt='' width='16px' height='16px' />
          </Box>
        </Link>
      )}

      <Image
        src='/world-trip-logo.svg'
        alt='Logo'
        width={['90px', '180px']}
        height={['30px', '45px']}
      />
    </Flex>
  )
}
