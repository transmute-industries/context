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
        .digest("hex");
      expect(hash).toBe(
        "e989400ec23a42440795abab8a20388588da7390830b26a58e448bf15e3cb217"
      );
      const flattened = await jsonld.flatten(doc);
      // You should click these links and make sure the documentation is correct.
      expect(Object.keys(flattened[1])[2]).toBe(
        "https://context.transmute.org/element/#publicKeyJwk"
      );
    });
  });
});
