class Block {
    public index: number;
    public hash: string;
    public previosHash: string;
    public data: string;
    public timestamp: number;
    constructor(
        index: number,
        hash: string,
        previosHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previosHash = previosHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "203230", "", "hello", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
