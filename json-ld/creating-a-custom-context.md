# Creating a custom JSON-LD context

If you want to add your own properties to a [VC](https://www.w3.org/TR/vc-data-model/) or [DID](https://w3c.github.io/did-core/). You should start by creating your own context file.

It should look like this:

```json
{
  "@context": {
    "@version": 1.1,
    "id": "@id",
    "type": "@type",

    "elem": "https://context.transmute.org/element/#",

    "EcdsaSecp256k1Signature2019": "elem:EcdsaSecp256k1Signature2019",
    "EcdsaSecp256k1VerificationKey2019": "elem:EcdsaSecp256k1VerificationKey2019",

    "publicKeyJwk": "elem:publicKeyJwk",
    "publicKeyHex": "elem:publicKeyHex"
  }
}
```

You should host human readable documentation on a web server you control, and give that url a name like so:

```
"elem": "https://context.transmute.org/element/#",
```

You should then define your properties like so:

```
"publicKeyJwk": "elem:publicKeyJwk",
```

You can then verify that the following URL is resolvable to prove your context is hosted correctly:

[https://context.transmute.org/element/#publicKeyJwk](https://context.transmute.org/element/#publicKeyJwk)
