import { ImageProps } from 'next/image'

import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoCbcLight from '@/images/clients/cbc/logo-light.svg'
import logoCossetteLight from '@/images/clients/cossette/logo-light.svg'
import logoEricssonLight from '@/images/clients/ericsson/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoHyundaiLight from '@/images/clients/hyundai/logo-light.svg'
import logoLciLight from '@/images/clients/lci/logo-light.svg'
import logoLumenaltaLight from '@/images/clients/lumenalta/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoOriumLight from '@/images/clients/orium/logo-light.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoQuebecorLight from '@/images/clients/quebecor/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'

export const clients: Array<[string, ImageProps['src']]> = [
  ['LCI', logoLciLight],
  ['Orium', logoOriumLight],
  ['Quebecor', logoQuebecorLight],
  ['CBC', logoCbcLight],
  ['Lumenalta', logoLumenaltaLight],
  ['Cossette', logoCossetteLight],
  ['Ericsson', logoEricssonLight],
  ['Hyundai', logoHyundaiLight],
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]
