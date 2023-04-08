import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { ZkConnectButton, ZkConnectClientConfig, ZkConnectResponse, AuthType } from "@sismo-core/zk-connect-react";

const config: ZkConnectClientConfig = {
  appId: "0xce69f084ece139e45326eb429561a464", // ethcc appId I created
  devMode: {
    // will use the Dev Sismo Data Vault https://dev.vault-beta.sismo.io/
    enabled: true, 
    // overrides a group with these addresses
    devGroups: [{
      groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a",
      data: {
        "0xb0d994657626f66694ae4ae5d4468a814d875afa": 1, 
      },
    }]
  }
};

export default function Home() {
  return (
    <ZkConnectButton 
      config={config}
      appId={"0xce69f084ece139e45326eb429561a464"} // appId you registered
      // Declare your claimRequest for the-merge-contributor group
      claimRequest={{
        groupId: "0x42c768bb8ae79e4c5c05d3b51a4ec74a" 
      }}
      authRequest={{
        authType: AuthType.ANON
      }}
      // get a response 
      onResponse={async (zkConnectResponse: ZkConnectResponse) => {
        //Send the response to your server to verify it
        //thanks to the @sismo-core/zk-connect-server package
        //Will see how to do this in next part of this tutorial
      }}
    />
  )
}
