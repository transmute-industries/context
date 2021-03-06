const jsonld = require("jsonld");
const crypto = require("crypto");

describe("openpgp-did", () => {
  describe("v0.0", () => {
    it("publicKeyPgp", async () => {
      const doc = {
        "@context": [
          "https://w3id.org/did/v1",
          "https://context.transmute.org/openpgp/openpgp-did-v0.0.jsonld"
        ],
        id: "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw",
        publicKey: [
          {
            id: "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#yubikey",
            type: "OpenPgpVerificationKey2019",
            controller: "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw",
            publicKeyPgp:
              "\n-----BEGIN PGP PUBLIC KEY BLOCK-----\nComment: GPGTools - https://gpgtools.org\n\n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\nrnFu2qXfCsLkrR23CVvbYS8=\n=q3UE\n-----END PGP PUBLIC KEY BLOCK-----"
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
        "ea37f43b1b7d91df1d66dfb45a6c198e9d87159f3f0c18c80f55d8067203142f"
      );
      const flattened = await jsonld.flatten(doc);
      // You should click these links and make sure the documentation is correct.
      expect(Object.keys(flattened[1])[2]).toBe(
        "https://transmute-industries.github.io/PROPOSAL-OpenPgpSignature2019/#publicKeyPgp"
      );
    });
  });
});
