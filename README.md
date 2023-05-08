# Generative NFT

Everyone is talking about generative AI these days. How about minting some AI-generated NFTs? Because, why not 😸

generative-nft.surge.sh

---

# Step 0 📦 Install

Required:

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/) (Use Version 18 LTS)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

⚠️ Don't install the linux package `yarn` make sure you install yarn with `npm i -g yarn` or even `sudo npm i -g yarn`!

> clone the repo to your local machine:

```sh
git clone https://github.com/keweichen/scaffold-eth-challenges.git generative-nft
cd generative-nft
git checkout generative-nft
```

> yarn install and start a local blockchain:

```sh
yarn install
yarn chain
```

> in a second terminal window, start your frontend:

```sh
cd generative-nft
yarn start
```

> in a third terminal window, deploy your contract:

```sh
cd generative-nft
yarn deploy
```

> You can `yarn deploy --reset` to deploy a new contract any time.

📱 Open http://localhost:3000 to see the app

---

# Step 1 🔑 Setup OpenAI API Key

> 🔑 Now you'll need to set up your OpenAI API key to use OpenAI API (obviously). After you are done with that on OpenAI website, come back to the repo and create an `.env` file under `packages/react-app/.` In your `.env` file, write your API key as `REACT_APP_OPENAI_KEY=xxxxx`

⚠️⚠️⚠️ gitignore already ignores `.env` files. But you should double check it and protect your own key!

# Step 2. 🧪 Test on local blockchain

## Step 2.0 ⛽️ Gas & Wallets

![image](https://user-images.githubusercontent.com/2653167/142483294-ff4c305c-0f5e-4099-8c7d-11c142cb688c.png)

> 🦊 At first, please **don't** connect MetaMask. If you already connected, please click **logout**:

![image](https://user-images.githubusercontent.com/2653167/142484483-1439d925-8cef-4b1a-a4b2-0f022eebc0f6.png)

> We'll use **burner wallets** on localhost...

> 👛 Explore how **burner wallets** work in 🏗 scaffold-eth by opening a new _incognito_ window and navigate it to http://localhost:3000. You'll notice it has a new wallet address in the top right. Copy the incognito browsers' address and send localhost test funds to it from your first browser:

![image](https://user-images.githubusercontent.com/2653167/142483685-d5c6a153-da93-47fa-8caa-a425edba10c8.png)

> 👨🏻‍🚒 When you close the incognito window, the account is gone forever. Burner wallets are great for local development but you'll move to more permanent wallets when you interact with public networks.

---

## Step 2.1 Minting

> Mint some NFTs! Click the `MINT NFT` button in the YourCollectables tab.

👀 You should see your collectibles start to show up.

---

# Step 3 🚢 Deploy and Ship it!

If you want to deploy it to a test net and host your front end with surge, find instructions in the link below.
https://github.com/scaffold-eth/scaffold-eth-challenges/tree/challenge-0-simple-nft
