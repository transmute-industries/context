# Element

Element is an experimental DID Method, built using the Sidetree protocol, IPFS and Ethereum. Development is supported by the DIF, Microsoft and Consensys.

Element supports a number of public key types which are not currently supported by the W3C, despite being listed in the DID Spec.

While we wait for these public key types to be added to the DID Spec, you can add support for them by leveraging the json-ld context and documentation hosted in this repo.

- [Latest Element JSON-LD Context](../element-did-v0.0.jsonld)

### Terminology

Duplicating here due to lack of response from the WG, the official spec remains undefined: [lds-ecdsa-secp256k1-2019](https://github.com/w3c-dvcg/lds-ecdsa-secp256k1-2019).

<h4 id="publicKeyJwk"><a href="#publicKeyJwk">publicKeyJwk</a></h4>

A secp256k1 public key in JWK format. A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. Read [RFC7517](https://tools.ietf.org/html/rfc7517).

#### Example:

```json
{
  "@context": "https://context.transmute.org/element/element-did-v0.0.jsonld",
  "id": "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#key-JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
  "type": "EcdsaSecp256k1VerificationKey2019",
  "publicKeyJwk": {
    "crv": "secp256k1",
    "kid": "JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
    "kty": "EC",
    "x": "dWCvM4fTdeM0KmloF57zxtBPXTOythHPMm1HCLrdd3A",
    "y": "36uMVGM7hnw-N6GnjFcihWE3SkrhMLzzLCdPMXPEXlA"
  }
}
```

<h4 id="publicKeyHex"><a href="#publicKeyHex">publicKeyHex</a></h4>

A hex encoded secp256k1 compressed public key.

#### Example:

```json
{
  "@context": "https://context.transmute.org/element/element-did-v0.0.jsonld",
  "id": "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#key-JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
  "type": "EcdsaSecp256k1VerificationKey2019",
  "publicKeyHex": "027560af3387d375e3342a6968179ef3c6d04f5d33b2b611cf326d4708badd7770"
}
```

<h4 id="EcdsaSecp256k1VerificationKey2019"><a href="#EcdsaSecp256k1VerificationKey2019">EcdsaSecp256k1VerificationKey2019</a></h4>

A secp256k1 public key. If the key is embedded in a controller with property name publicKeyJwk (preffered), the key must be a valid JWK. If the key is embeded as publicKeyHex, it must be a compressed public key, and must be converted to JWK before being used to verify signatures according to JWS.

#### Example:

```json
[
  {
    "@context": "https://context.transmute.org/element/element-did-v0.0.jsonld",
    "id": "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#key-JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
    "type": "EcdsaSecp256k1VerificationKey2019",
    "publicKeyJwk": {
      "crv": "secp256k1",
      "kid": "JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
      "kty": "EC",
      "x": "dWCvM4fTdeM0KmloF57zxtBPXTOythHPMm1HCLrdd3A",
      "y": "36uMVGM7hnw-N6GnjFcihWE3SkrhMLzzLCdPMXPEXlA"
    }
  },
  {
    "@context": "https://context.transmute.org/element/element-did-v0.0.jsonld",
    "id": "did:elem:eURSFEEv6J7s3TJ-jhT_ZS4uGRyCDbwc347EWlqpNgw#key-JUvpllMEYUZ2joO59UNui_XYDqxVqiFLLAJ8klWuPBw",
    "type": "EcdsaSecp256k1VerificationKey2019",
    "publicKeyHex": "027560af3387d375e3342a6968179ef3c6d04f5d33b2b611cf326d4708badd7770"
  }
]
```

<h4 id="EcdsaSecp256k1Signature2019"><a href="#EcdsaSecp256k1Signature2019">EcdsaSecp256k1Signature2019</a></h4>

A JSON-LD Document has been signed with EcdsaSecp256k1Signature2019,
when it contains a proof field with type `EcdsaSecp256k1Signature2019`. The proof must contain a key `jws` with value defined by the signing algorithm described here.

#### Example:

```json
{
  "@context": "https://w3id.org/security/v2",
  "http://schema.org/action": "AuthenticateMe",
  "proof": {
    "challenge": "abc",
    "created": "2019-01-16T20:13:10Z",
    "domain": "example.com",
    "proofPurpose": "authentication",
    "verificationMethod": "https://example.com/i/alice/keys/2",
    "type": "EcdsaSecp256k1Signature2019",
    "jws": "eyJhbGciOiJFUzI1NksiLCJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdfQ..QgbRWT8w1LJet_KFofNfz_TVs27z4pwdPwUHhXYUaFlKicBQp6U1H5Kx-mST6uFvIyOqrYTJifDijZbtAfi0MA"
  }
}
```

### Conclusion

This is an example of how contexts and documentation can be hosted together, using markdown instead of ReSpec... You should probably use ReSpec if you plan to submit your context to the W3C.

- [respec](https://github.com/w3c/respec)
