
import { hardhat } from 'wagmi/chains';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const {
  ALCHEMY_ENDPOINT_URL_POLYGON_ZKEVM_MAINNET = '',
  ALCHEMY_ENDPOINT_URL_POLYGON_ZKEVM_CARDONA = '',
  ALCHEMY_API_KEY = '',
  WALLET_CONNECT_PROJECT_ID = '',
} = process.env;

// Define Chiliz Spicy Testnet
const chilizSpicy = {
  id: 88882,
  name: 'Chiliz Spicy Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'CHZ',
    symbol: 'CHZ',
  },
  rpcUrls: {
    default: {
      http: ['https://spicy-rpc.chiliz.com/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Chiliz Spicy Explorer',
      url: 'https://testnet.chiliscan.com/',
    },
  },
  testnet: true,
};

export const config = 
getDefaultConfig({
    // createConfig(
    // appDescription: 'Chiliz Got Talent',
    // appIcon: "",
    appName: 'Chiliz Got Talent',
    // appUrl: "",
    chains: [hardhat, chilizSpicy],
    // connectors: [
    //   metaMask({
    //     dappMetadata: {
    //       name: 'Chiliz Got Talent',
    //     },
    //   }),
    //   coinbaseWallet(),
    //   injected({
    //     target: 'metamask',
    //   }),
    //   safe(),
    // ],
    // pollingInterval: 3000, // Chiliz block time
    // ssr: true,
    // transports: {
    //   [hardhat.id]: http(),
    //   [chilizSpicy.id]: http(),
    // },
    projectId: '90ad2325be56cb097121a9f3481bea34',
  });