import React, { useEffect } from 'react';
import { useContractKit } from '@celo-tools/use-contractkit';
// import { registerUser } from '../../api';

export default function ConnectWallet() {
  const { address: addr, connect } = useContractKit();
  const address = typeof addr === 'string' ? addr.toLowerCase() : addr;

  useEffect(() => {
    if (!address) {
      return;
    }

    // registerUser({ address });
  }, [address]);

  if (!address) {
    return (
      <button type="button" className="button" onClick={connect}>
        Connect wallet
      </button>
    );
  }

  return <div>{address}</div>;
}


// import { useContractKit } from '@celo-tools/use-contractkit';
// import React from "react";

// export const ConnectWallet = () => {
//     const { connect, address, destroy } = useContractKit();
//     return (
//         <>
//             {address ? (
//                 <div>
//                     {/* <button onClick={destroy}>Disconnect</button> */}
//                     <div>{address}</div>
//                 </div>
//               ) : (
//                 <button
//                 onClick={async () => {
//                     try {
//                       await connect();
//                     } catch (e) {
//                       console.warn(e);
//                     }
//                   }}
//                 >
//                   Connect
//                 </button>
//               )}
//         </>
//     );
//   };
