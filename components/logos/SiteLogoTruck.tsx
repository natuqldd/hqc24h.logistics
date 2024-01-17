import {Image} from '@chakra-ui/react'
import {URL_HNDC_HOMEPAGE} from '@/constants/urls'
import NextLink from '@/components/links/NextLink'

export default function SiteLogoTruck() {

  return <NextLink href={URL_HNDC_HOMEPAGE}>
    <Image
        h={['35px', '45px']}
        src={'/images/logos/hqc247-logo.png'}
        fallbackSrc={'/images/logos/hqc247-logo.png'}
    />
  </NextLink>
}