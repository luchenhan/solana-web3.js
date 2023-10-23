import { Base58EncodedAddress } from '@solana/addresses';
import { Commitment, LamportsUnsafeBeyond2Pow53Minus1 } from '@solana/rpc-types';

import { RpcResponse, Slot } from './common';

type GetBalanceApiResponse = RpcResponse<LamportsUnsafeBeyond2Pow53Minus1>;

export interface GetBalanceApi {
    /**
     * Returns the balance of the account of provided Pubkey
     */
    getBalance(
        address: Base58EncodedAddress,
        config?: Readonly<{
            commitment?: Commitment;
            minContextSlot?: Slot;
        }>
    ): GetBalanceApiResponse;
}
