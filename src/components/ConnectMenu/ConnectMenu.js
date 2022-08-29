import Button from '@mui/material/Button';

export default function ConnectMenu({connectWalletAction}) {
    return (
        <Button variant="outlined" onClick={() => connectWalletAction()}>Connect</Button>
    )
}
