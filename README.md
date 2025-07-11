# 🧾 Blockchain Receipt Generator

This project allows small businesses to **issue tamper-proof, blockchain-logged receipts** — without requiring customers to connect a wallet.  
It’s ideal for market vendors, food stalls, freelancers, or anyone who needs verifiable proof of transactions for tax, compliance, or trust.

---

## 🚀 Features

- ✅ **No wallet required** – seller backend signs and logs receipts
- 🔒 **Privacy-first** – only SHA-256 hashes stored on-chain
- 📤 **Immutable** – every receipt is verifiable on a public blockchain
- 🧾 **QR code output** – customer receives a scannable verification link
- 🧩 **Simple stack** – Solidity + Express.js + ethers.js + plain HTML

---

## 📁 Project 

receipt-generator/
├── smart-contract/ # Solidity smart contract
│ └── ReceiptLogger.sol
├── backend/ # Express backend API
│ ├── index.js
│ ├── package.json
│ ├── .env.sample # Example env config (excluded from Git)
├── frontend/ # Simple HTML interface
│ ├── index.html # Receipt submission form
│ └── verify.html # Verifier using ethers.js
└── README.md


---

## 🧠 How It Works

1. Seller enters order info in a form.
2. Backend hashes the receipt and logs it to the blockchain via a smart contract.
3. Backend returns a QR code that links to the verification page.
4. Anyone can scan and confirm that receipt is immutable and timestamped on-chain.

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/receipt-generator.git
cd receipt-generator/backend
npm install
2. Deploy the smart contract
Use Remix:

Open smart-contract/ReceiptLogger.sol

Deploy to a testnet like Polygon Mumbai or BNB Testnet

Copy the deployed contract address

3. Create a .env file
bash
Copy
Edit
cp .env.sample .env
Edit your .env:

ini
Copy
Edit
RPC_URL=https://rpc-mumbai.maticvigil.com
PRIVATE_KEY=0xYourTestnetPrivateKey
CONTRACT_ADDRESS=0xYourDeployedContract
PORT=3000
VERIFY_BASE=http://localhost:5500/verify.html
⚠️ Never commit your real .env file! It’s gitignored.

4. Run the backend
bash
Copy
Edit
npm start
5. Run the frontend
In another terminal:

bash
Copy
Edit
npx serve ../frontend --listen 5500
# Or open frontend/index.html and frontend/verify.html manually
🧪 Testing
Visit: http://localhost:5500/index.html

Fill out receipt form and submit

A QR code and hash will appear

Scan or open the QR link (to /verify.html?hash=...) to confirm it was logged on-chain

🛡️ Security & Privacy
Receipts are never stored on-chain in full — only the SHA-256 hash of the data is saved.

Customers cannot be identified without access to original receipt text.

📄 License
MIT – use it freely, modify, deploy, commercialize.

🧠 Future Ideas
 Add email or SMS delivery of QR receipts

 Use IPFS to store full receipt JSON optionally

 Allow multiple product entries per receipt

 Admin dashboard to view past hashes and timestamps

 n8n workflow version (no coding needed!)

✨ Built By
🧑‍💻 Your Name – blockchain developer, automation builder



