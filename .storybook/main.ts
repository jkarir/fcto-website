import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  staticDirs: [
    {
      from: '../src/app/blog/react-native-kmp-flutter-part-1',
      to: '/src/app/blog/react-native-kmp-flutter-part-1',
    },
    {
      from: '../src/images/jurgen-karir-cropped.jpg',
      to: '/images/jurgen-karir-cropped.jpg',
    },
  ],
}
export default config
