require('dotenv').config();
const express = require('express');
const { ethers } = require('ethers');
const QRCode = require('qrcode');
const crypto = require('crypto');

const app = express();
app.use(express.json());

// ENV: RPC_URL, PRIVATE_KEY, CONTRACT_ADDRESS, PORT, VERIFY_BASE
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const abi = [
    "event ReceiptLogged(address indexed sender, string receiptHash, uint256 timestamp)",
    "function logReceipt(string receiptHash)"
];
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, wallet);

app.post('/receipt', async (req, res) => {
    try {
        const { product, quantity, amount, customer, notes } = req.body;
        const timestamp = Date.now();
        const receiptObj = { product, quantity, amount, customer, notes, timestamp };
        const receiptStr = JSON.stringify(receiptObj);

        const hash = crypto.createHash('sha256').update(receiptStr).digest('hex');
        const tx = await contract.logReceipt(hash);
        await tx.wait();

        const verifyBase = process.env.VERIFY_BASE || 'http://localhost:5500/verify.html';
        const verifyUrl = `${verifyBase}?hash=${hash}`;
        const qrDataUrl = await QRCode.toDataURL(verifyUrl);

        res.json({ hash, txHash: tx.hash, qr: qrDataUrl });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'internal server error', details: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
