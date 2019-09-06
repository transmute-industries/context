const jsonld = require("jsonld");
const crypto = require("crypto");

const btrcDidDoc = require("./data/btcr-did-doc.json");

const elemDidDoc = require("./data/elem-did-doc.json");

describe("cannonize", () => {
  it("btcr", async () => {
    const canonized = await jsonld.canonize(btrcDidDoc, {
      format: "application/n-quads"
    });
    const hash = crypto
      .createHash("sha256")
      .update(canonized)
      .digest("base64");
    expect(hash).toBe("dKd/z0KwHef1bsMCjnXmdnLjtJszBWJY0qye0gwgPhM=");
  });

  it("elem", async () => {
    const canonized = await jsonld.canonize(elemDidDoc, {
      format: "application/n-quads"
    });
    const hash = crypto
      .createHash("sha256")
      .update(canonized)
      .digest("base64");
    expect(hash).toBe("YUZF/4f7Ve/Ms73P7Hkvv2qR2L3WeZpRvuWV59I4vFY=");

    const flattened = await jsonld.flatten(elemDidDoc);

    console.log(JSON.stringify(flattened, null, 2));
  });
});