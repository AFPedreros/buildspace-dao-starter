import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x60d6A1c99BED48d2437Aa291C225dA8d60a37D80");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Jeweler City",
                description: "This NFT will give you access to JewelerDAO!",
                image: readFileSync("scripts/assets/felipe.jpg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();