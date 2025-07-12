import { http, createConfig } from 'wagmi';
import { hardhat } from 'wagmi/chains';
import { getDefaultConfig } from 'connectkit';
import { metaMask, coinbaseWallet, injected, safe } from 'wagmi/connectors';
import { defineChain } from 'viem';

const {
  ALCHEMY_ENDPOINT_URL_POLYGON_ZKEVM_MAINNET = '',
  ALCHEMY_ENDPOINT_URL_POLYGON_ZKEVM_CARDONA = '',
  ALCHEMY_API_KEY = '',
  WALLET_CONNECT_PROJECT_ID = '',
} = process.env;

// Define Chiliz Spicy Testnet
const chilizSpicy = defineChain({
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
});

export const config = createConfig(
  getDefaultConfig({  
    appDescription: 'Chiliz Got Talent',
    // appIcon: "",
    appName: 'Chiliz Got Talent',
    // appUrl: "",
    chains: [hardhat, chilizSpicy],
    connectors: [
      metaMask({
        dappMetadata: {
          name: 'Chiliz Got Talent',
        },
      }),
      coinbaseWallet(),
      injected(),
      safe(),
    ],
    pollingInterval: 3000, // Chiliz block time
    ssr: true,
    transports: {
      [hardhat.id]: http(),
      [chilizSpicy.id]: http(),
    },
    walletConnectProjectId: WALLET_CONNECT_PROJECT_ID,
  }),
);