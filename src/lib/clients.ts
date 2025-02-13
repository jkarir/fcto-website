import { ImageProps } from 'next/image'
import { z } from 'zod'

import logoCbcDark from '@/images/clients/cbc/logo-dark.svg'
import logoCbcLight from '@/images/clients/cbc/logo-light.svg'
import logoCossetteDark from '@/images/clients/cossette/logo-dark.svg'
import logoCossetteLight from '@/images/clients/cossette/logo-light.svg'
import logoEricssonDark from '@/images/clients/ericsson/logo-dark.svg'
import logoEricssonLight from '@/images/clients/ericsson/logo-light.svg'
import logoHyundaiDark from '@/images/clients/hyundai/logo-dark.svg'
import logoHyundaiLight from '@/images/clients/hyundai/logo-light.svg'
import logoLaPresseDark from '@/images/clients/la-presse/logo-dark.svg'
import logoLaPresseLight from '@/images/clients/la-presse/logo-light.svg'
import logoLciDark from '@/images/clients/lci/logo-dark.svg'
import logoLciLight from '@/images/clients/lci/logo-light.svg'
import logoLotoQuebecDark from '@/images/clients/loto-quebec/logo-dark.svg'
import logoLotoQuebecLight from '@/images/clients/loto-quebec/logo-light.svg'
import logoLumenaltaDark from '@/images/clients/lumenalta/logo-dark.svg'
import logoLumenaltaLight from '@/images/clients/lumenalta/logo-light.svg'
import logoMetroDark from '@/images/clients/metro/logo-dark.svg'
import logoMetroLight from '@/images/clients/metro/logo-light.svg'
import logoNbcDark from '@/images/clients/nbc/logo-dark.svg'
import logoNbcLight from '@/images/clients/nbc/logo-light.svg'
import logoNetliftDark from '@/images/clients/netlift/logo-dark.svg'
import logoNetliftLight from '@/images/clients/netlift/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoNurunDark from '@/images/clients/nurun/logo-dark.svg'
import logoNurunLight from '@/images/clients/nurun/logo-light.svg'
import logoOriumDark from '@/images/clients/orium/logo-dark.svg'
import logoOriumLight from '@/images/clients/orium/logo-light.svg'
import logoQuebecorDark from '@/images/clients/quebecor/logo-dark.svg'
import logoQuebecorLight from '@/images/clients/quebecor/logo-light.svg'
import logoSidLeeDark from '@/images/clients/sid-lee/logo-dark.svg'
import logoSidLeeLight from '@/images/clients/sid-lee/logo-light.svg'
import logoTvaDark from '@/images/clients/tva/logo-dark.svg'
import logoTvaLight from '@/images/clients/tva/logo-light.svg'
import logoYpDark from '@/images/clients/yp/logo-dark.svg'
import logoYpLight from '@/images/clients/yp/logo-light.svg'
import logoTinkDark from '@/images/clients/tink/logo-dark.svg'
import logoTinkLight from '@/images/clients/tink/logo-light.svg'

// Define Zod schemas
const LogoSchema = z.object({
  light: z.custom<ImageProps['src']>(),
  dark: z.custom<ImageProps['src']>(),
  imageisName: z.boolean(),
})

const ClientIdentifierSchema = z.enum([
  'CBC / Radio-Canada',
  'Cossette',
  'Ericsson',
  'Hyundai',
  'La Presse',
  'LCI Education',
  'Loto Quebec',
  'Lumenalta',
  'Metro',
  'National Bank of Canada',
  'Netlift',
  'Nurun',
  'Orium',
  'Sid Lee',

  'TVA',
  'Yellow Pages',
])

const ClientSchema = z.object({
  identifier: ClientIdentifierSchema,
  name: z.string(),
  image: LogoSchema,
})

// Export types from schemas
export type ClientIdentifier = z.infer<typeof ClientIdentifierSchema>
export type Client = z.infer<typeof ClientSchema>
export type ClientRecord = Record<ClientIdentifier, Client>

// Logo data mapping
const logoMap: Record<
  ClientIdentifier,
  { light: ImageProps['src']; dark: ImageProps['src']; imageisName: boolean }
> = {
  'LCI Education': {
    light: logoLciLight,
    dark: logoLciDark,
    imageisName: false,
  },
  Orium: {
    light: logoOriumLight,
    dark: logoOriumDark,
    imageisName: true,
  },
  'CBC / Radio-Canada': {
    light: logoCbcLight,
    dark: logoCbcDark,
    imageisName: false,
  },
  Lumenalta: {
    light: logoLumenaltaLight,
    dark: logoLumenaltaDark,
    imageisName: false,
  },
  Cossette: {
    light: logoCossetteLight,
    dark: logoCossetteDark,
    imageisName: true,
  },
  Ericsson: {
    light: logoEricssonLight,
    dark: logoEricssonDark,
    imageisName: false,
  },
  Hyundai: {
    light: logoHyundaiLight,
    dark: logoHyundaiDark,
    imageisName: false,
  },
  'La Presse': {
    light: logoLaPresseLight,
    dark: logoLaPresseDark,
    imageisName: false,
  },
  'Loto Quebec': {
    light: logoLotoQuebecLight,
    dark: logoLotoQuebecDark,
    imageisName: false,
  },
  Metro: {
    light: logoMetroLight,
    dark: logoMetroDark,
    imageisName: true,
  },
  'National Bank of Canada': {
    light: logoNbcLight,
    dark: logoNbcDark,
    imageisName: false,
  },
  Netlift: {
    light: logoNetliftLight,
    dark: logoNetliftDark,
    imageisName: false,
  },
  Nurun: {
    light: logoNurunLight,
    dark: logoNurunDark,
    imageisName: false,
  },
  'Sid Lee': {
    light: logoSidLeeLight,
    dark: logoSidLeeDark,
    imageisName: true,
  },
  TVA: {
    light: logoTvaLight,
    dark: logoTvaDark,
    imageisName: true,
  },
  'Yellow Pages': {
    light: logoYpLight,
    dark: logoYpDark,
    imageisName: false,
  },
} as const

function logoDataForClient({
  identifier,
  mode,
}: {
  identifier: ClientIdentifier
  mode: 'light' | 'dark'
}): { image: ImageProps['src']; imageisName: boolean } {
  const logoData = logoMap[identifier] || {
    light: logoNorthAdventures,
    dark: logoNorthAdventures,
    imageisName: false,
  }

  return {
    image: mode === 'light' ? logoData.light : logoData.dark,
    imageisName: logoData.imageisName,
  }
}

// Create and validate clients record
export const clients = ClientSchema.array()
  .parse(
    ClientIdentifierSchema.options.map((identifier) => ({
      identifier,
      name: identifier,
      image: {
        light: logoDataForClient({ identifier, mode: 'light' }).image,
        dark: logoDataForClient({ identifier, mode: 'dark' }).image,
        imageisName: logoDataForClient({ identifier, mode: 'light' })
          .imageisName,
      },
    })),
  )
  .reduce(
    (acc, client) => ({
      ...acc,
      [client.identifier]: client,
    }),
    {} as ClientRecord,
  )
