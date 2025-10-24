export class Crypto {
    coin: string;
    wallet: string;
    network: string;


    constructor(coin: string, wallet: string, network: string) {
        this.coin = coin;
        this.wallet = wallet;
        this.network = network;
    }
}