//SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {HorusNFT} from "./HorusNFT.sol";

contract WrappedHorusNFT is HorusNFT {
    
  
   constructor (
        string memory tokenName,
        string memory tokenSymbol
    ) HorusNFT(tokenName, tokenSymbol) {}

    function mintTokenWithSpecificTokenId(address to,uint256 tokenId) public {
         _safeMint(to, tokenId);
    }

}