import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ethers} from "ethers";
import CardWithNftOfUser from "../CardWithNftOfUser/CardWithNftOfUser"
import abi from "../../abi/abi.json"

export default function ShowMyNfts() {
    const [URIData, setURIData] = useState({})
    const [tokenId, setTokenId] = useState(1)
    const [tokenIdToSearch, setTokenIdToSearch] = useState(0)

    useEffect(()=> {
        const getURIsOfNfts = async () => {
			
        try {
            const { ethereum } = window;
  
            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const connectedContract = new ethers.Contract(
                    process.env.REACT_APP_URI_GETTER_CONTRACT_ADDRESS,
                    abi,
                    signer
                );
                let dataOfNft = await connectedContract.getTokenURI(tokenId);
                console.log()
                setURIData(JSON.parse(atob(dataOfNft)))
                
        } else {
            console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
            setURIData({})
      }
    };

      getURIsOfNfts()
  },[tokenIdToSearch])


  return (
      <div>
          <div className="search">
              <TextField value={tokenId} label="Select a token Id" variant="standard" onChange={(e) => setTokenId(e.target.value)} />
              <Button variant="outlined" onClick={() => setTokenIdToSearch(tokenId)}>Mint</Button>
          </div>
          {URIData.image ? 
              <div className="cardWithNftOfUser"><CardWithNftOfUser foodDatum={URIData}/></div>
            : <div className="failure">Please select a valid id</div>
          }
      </div>
  )
}
