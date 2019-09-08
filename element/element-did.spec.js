const jsonld = require("jsonld");
const crypto = require("crypto");

describe("element-did", () => {
  describe("v0.0", () => {
    it("publicKeyJwk", async () => {
      const doc = {
        "@context": [
          "https://w3id.org/did/v1",
          "https://context.transmute.org/element/element-did-v0.0.jsonld"
        ],
        id: "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw",
        publicKey: [
          {
            id: "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#key-0",
            type: "EcdsaSecp256k1VerificationKey2019",
            publicKeyHex:
              "027560af3387d375e3342a6968179ef3c6d04f5d33b2b611cf326d4708badd7770"
          },
          {
            id:
              "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#key-JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
            type: "EcdsaSecp256k1VerificationKey2019",
            publicKeyJwk: {
              crv: "secp256k1",
              kid: "JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
              kty: "EC",
              x: "dWCvM4fTdeM0KmloF57zxtBPXTOythHPMm1HCLrdd3A",
              y: "36uMVGM7hnw-N6GnjFcihWE3SkrhMLzzLCdPMXPEXlA"
            }
          }
        ]
      };
      const canonized = await jsonld.canonize(doc, {
        format: "application/n-quads"
      });
      const hash = crypto
        .createHash("sha256")
        .update(canonized)
        .digest("base64");
      expect(hash).toBe("TKlt3jKMfEqpBdBLXLYjKQ9qiESyijZGjc54rQy40m0=");
      const flattened = await jsonld.flatten(elemDidDoc);
      console.log(JSON.stringify(flattened, null, 2));
    });
  });
});
