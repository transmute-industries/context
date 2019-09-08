# Element

Element is an experimental DID Method, built using the Sidetree protocol, IPFS and Ethereum. Development is supported by the DIF, Microsoft and Consensys.

Element supports a number of public key types which are not currently supported by the W3C, despite being listed in the DID Spec.

While we wait for these public key types to be added to the DID Spec, you can add support for them by leveraging the json-ld context and documentation hosted in this repo.

- [Latest Element JSON-LD Context](../element-did-v0.0.jsonld)

### Terminology

<h4 id="publicKeyJwk"><a href="#publicKeyJwk">publicKeyJwk</a></h4>

A public key in JWK format. A JSON Web Key (JWK) is a JavaScript Object Notation (JSON) data structure that represents a cryptographic key. Read [RFC7517](https://tools.ietf.org/html/rfc7517).

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

### Conclusion

This is an example of how contexts and documentation can be hosted together, using markdown instead of ReSpec... You should probably use ReSpec if you plan to submit your context to the W3C.

- [respec](https://github.com/w3c/respec)
