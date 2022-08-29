import {useEffect, useState} from "react"
import axios from "axios"
import Navbar from "./components/Navbar/Navbar.js"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ShowSpecificFood from "./components/ShowSpecificFood/ShowSpecificFood";
import ShowMyNfts from "./components/ShowMyNfts/ShowMyNfts";
import ShowAllFood from "./components/ShowAllFood/ShowAllFood"
import ConnectMenu from "./components/ConnectMenu/ConnectMenu"

function App() {

    const [currentAccount, setCurrentAccount] = useState("")
    const [searchData, setSearchData] = useState("")
    const [searchedData, setSearchedData] = useState("")
    const [dataOfFood, setDataOfFood] = useState([])
  

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log("You don't have metamask");
			return;
		} else {
			console.log("We have an ethereum object", ethereum);
			const accounts = await ethereum.request({ method: "eth_accounts" });

			if (accounts.length > 0) {
				const account = accounts[0];
			    console.log("Found authorized account", account);
				setCurrentAccount(account);
			} else {
				console.log("Not authorized account found");
			}
		}
	};

    const searchFoodData = () => {
        setSearchedData(searchData)
        setSearchData("")
    }

	const connectWalletAction = async () => {
		try {
			const { ethereum } = window;
			if (!ethereum) {
				console.log("Get metamask");
				return;
			}

			const accounts = await ethereum.request({method: "eth_requestAccounts"});
            const account = accounts[0];
			    setCurrentAccount(account);
		} catch (error) {
			console.log(error);
		}
	};

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    useEffect(()=> {
        const getData = async () => {
            const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/foodData`, {
                params: {
                    searchedData
                }
            })
              console.log(result)
            setDataOfFood(result.data)
        }
        getData()
    }, [searchedData])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path="/" exact element={currentAccount.length ? <ShowAllFood dataOfFood={dataOfFood} searchData={searchData} setSearchData={setSearchData} searchFoodData={searchFoodData} /> : <ConnectMenu connectWalletAction={connectWalletAction}/>}/> 
            <Route path="/nfts" exact element={currentAccount.length ? <ShowMyNfts/> : <ConnectMenu connectWalletAction={connectWalletAction}/>}/>
            <Route path="/food/:id" exact element={currentAccount.length ? <ShowSpecificFood dataOfFood={dataOfFood}/> : <ConnectMenu connectWalletAction={connectWalletAction}/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;