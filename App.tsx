/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Capp from './src/App';
import '@walletconnect/react-native-compat';
import { W3mButton, createWeb3Modal, defaultWagmiConfig, useWeb3Modal } from '@web3modal/wagmi-react-native'
import { mainnet, polygon, arbitrum } from 'viem/chains'
import { WagmiConfig } from 'wagmi';
import { Pressable, Text } from 'react-native'
import { Button } from '@rneui/themed';
import { Web3Modal } from '@web3modal/wagmi-react-native'
import { NavigationContainer } from '@react-navigation/native';


function App(): JSX.Element {
  // 1. Get projectId at https://cloud.walletconnect.com
  const projectId = '6d2c0c6d0f88767a5c351308d8d95781'

  // 2. Create config
  const metadata = {
    name: 'myWalletConnect',
    description: 'Web3Modal RN Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
    redirect: {
      native: 'YOUR_APP_SCHEME://',
      universal: 'YOUR_APP_UNIVERSAL_LINK.com'
    }
  }

  const chains = [mainnet, polygon, arbitrum]
  const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })


  // 3. Create modal
  createWeb3Modal({
    projectId,
    chains,
    wagmiConfig
  })

  const { open } = useWeb3Modal()


  return (
    <>
      <NavigationContainer>
        <WagmiConfig config={wagmiConfig}>
          <W3mButton />
          <Capp></Capp>
          <Web3Modal />
        </WagmiConfig>
      </NavigationContainer>
    </>
  );
}


export default App;
