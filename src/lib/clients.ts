import { ImageProps } from 'next/image'

import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoCbcLight from '@/images/clients/cbc/logo-light.svg'
import logoCbcDark from '@/images/clients/cbc/logo-dark.svg'
import logoCossetteLight from '@/images/clients/cossette/logo-light.svg'
import logoCossetteDark from '@/images/clients/cossette/logo-dark.svg'
import logoEricssonLight from '@/images/clients/ericsson/logo-light.svg'
import logoEricssonDark from '@/images/clients/ericsson/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoHyundaiLight from '@/images/clients/hyundai/logo-light.svg'
import logoHyundaiDark from '@/images/clients/hyundai/logo-dark.svg'
import logoLciLight from '@/images/clients/lci/logo-light.svg'
import logoLciDark from '@/images/clients/lci/logo-dark.svg'
import logoLumenaltaLight from '@/images/clients/lumenalta/logo-light.svg'
import logoLumenaltaDark from '@/images/clients/lumenalta/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoOriumLight from '@/images/clients/orium/logo-light.svg'
import logoOriumDark from '@/images/clients/orium/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoQuebecorLight from '@/images/clients/quebecor/logo-light.svg'
import logoQuebecorDark from '@/images/clients/quebecor/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'

function toRecord<T extends Record<string, any>, K extends keyof T>(
  array: T[],
  selector: K,
): Record<T[K], T> {
  return array.reduce(
    (acc, item) => ({ ...acc, [item[selector]]: item }),
    {} as Record<T[K], T>,
  )
}

const ClientIdentifiers = [
  'LCI',
  'Orium',
  'Quebecor',
  'CBC',
  'Lumenalta',
  'Cossette',
  'Ericsson',
  'Hyundai',
  'Phobia',
  'Family Fund',
  'Unseal',
  'Mail Smirk',
  'Home Work',
  'Green Life',
  'Bright Path',
  'North Adventures',
] as const
export type ClientIdentifier = (typeof ClientIdentifiers)[number]

function logoForClient({
  identifier,
  mode,
}: {
  identifier: ClientIdentifier
  mode: 'light' | 'dark'
}): ImageProps['src'] {
  switch (identifier) {
    case 'LCI':
      return mode === 'light' ? logoLciLight : logoLciDark
    case 'Orium':
      return mode === 'light' ? logoOriumLight : logoOriumDark
    case 'Quebecor':
      return mode === 'light' ? logoQuebecorLight : logoQuebecorDark
    case 'CBC':
      return mode === 'light' ? logoCbcLight : logoCbcDark
    case 'Lumenalta':
      return mode === 'light' ? logoLumenaltaLight : logoLumenaltaDark
    case 'Cossette':
      return mode === 'light' ? logoCossetteLight : logoCossetteDark
    case 'Ericsson':
      return mode === 'light' ? logoEricssonLight : logoEricssonDark
    case 'Hyundai':
      return mode === 'light' ? logoHyundaiLight : logoHyundaiDark
    case 'Phobia':
      return mode === 'light' ? logoPhobiaLight : logoPhobiaLight
    case 'Family Fund':
      return mode === 'light' ? logoFamilyFund : logoFamilyFund
    case 'Unseal':
      return mode === 'light' ? logoUnseal : logoUnseal
    case 'Mail Smirk':
      return mode === 'light' ? logoMailSmirk : logoMailSmirk
    case 'Home Work':
      return mode === 'light' ? logoHomeWork : logoHomeWork
    case 'Green Life':
      return mode === 'light' ? logoGreenLife : logoGreenLife
    case 'Bright Path':
      return mode === 'light' ? logoBrightPath : logoBrightPath
    case 'North Adventures':
      return mode === 'light' ? logoNorthAdventures : logoNorthAdventures
  }
}

type Client = {
  identifier: ClientIdentifier
  name: string
  image: {
    light: ImageProps['src']
    dark: ImageProps['src']
  }
}

export type ClientRecord = Record<ClientIdentifier, Client>

export const clients: ClientRecord = toRecord(
  ClientIdentifiers.map((identifier) => ({
    identifier,
    name: identifier,
    image: {
      light: logoForClient({ identifier, mode: 'light' }),
      dark: logoForClient({ identifier, mode: 'dark' }),
    },
  })),
  'identifier',
)
