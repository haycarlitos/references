import { Chain } from './types'

export const lachain = {
  id: 274,
  name: 'LaChain',
  network: 'lachain',
  nativeCurrency: {
    decimals: 18,
    name: 'LaCoin',
    symbol: 'LAC',
  },
  rpcUrls: {
    public: {
      http: [
        'https://rpc1.mainnet.lachain.network',
        'https://rpc2.mainnet.lachain.network',
      ],
    },
    default: {
      http: [
        'https://rpc1.mainnet.lachain.network',
        'https://rpc2.mainnet.lachain.network',
      ],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'LaChain Explorer',
      url: 'https://explorer.lachain.network',
    },
    default: {
      name: 'LaChain Explorer',
      url: 'https://explorer.lachain.network',
    },
  },
} as const satisfies Chain
