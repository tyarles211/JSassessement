// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _eyeColor, _shirtType, _accessories) {
    const NFT = {
        "name":  _name,
        "eyecolor": _eyeColor,
        "shirtType": _shirtType,
        "accessories": _accessories
    }
    NFTs.push (NFT);
    console.log ("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nID \t\t\t\t" + (i + 1));
        console.log("\nName: \t\t\t" + NFTs[i].name);
        console.log("Eye Color: \t\t" + NFTs[i].eyecolor);
        console.log("Shirt Type: \t" + NFTs[i].shirtType);
        console.log("Accessories: \t" + NFTs[i].accessories);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
    console.log("\n" + NFTs.length);
}

// call your functions below this line (dito na may iibahin)
mintNFT ("Ceero", "Blue", "Stussy Shirt", "Choker");
mintNFT ("Iverson", "Red", "Nike Geek Freak Shirt", "Gold Chains");
mintNFT ("Drake", "Brown", "Nike Polo Shirt", "Diamond Necklace");
mintNFT ("Cashman", "Black", "Louis Vuitton", "Japan Style Gold Chain");
mintNFT ("Bieber", "Blue", "Drew Shirt", "Silver Chains");
listNFTs();
getTotalSupply();