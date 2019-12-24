#### [Transmute JSON-LD on GitHub](https://github.com/transmute-industries/context)

This repo and website are designed to enable the most frictionless experience for developing software that relies on JSON-LD.

> JSON-LD 1.1 is being formally specified in the W3C JSON-LD Working Group. To participate in this work, please join the W3C and then [join the Working Group](https://www.w3.org/2018/json-ld-wg/).

You can use this repo as a guide for extending contexts, and ensuring that your JSON-LD is functioning as expected and fully documented. This should help you make the case that your extensions should be included, or eliminate the need for them to be included.

### Table of Contents

- [Working with JSON-LD](https://context.transmute.org/json-ld)
- [Example context for did:elem DID Method](https://context.transmute.org/element)
- [Example context for OpenPgpSignature2019 Linked Data Signature Suite](https://context.transmute.org/openpgp)

### Motivation

When working with the W3C JSON-LD contexts, you may need to extend or add to them. You should still attempt to push your changes into the correct W3C context, such as:

- [https://w3id.org/security](https://w3id.org/security)
- [https://w3id.org/security/v1](https://w3id.org/security/v1)
- [https://w3id.org/did](https://w3id.org/did)
- [https://w3id.org/did/v1](https://w3id.org/did/v1)

However, these contexts and documentation are very selective and strict, and you may find it difficult to contribute, especially if your work is experimental.

### Examples

#### JSON Schema + JSON-LD Together

https://github.com/w3c-ccg/vc-json-schemas

This repo contains some examples of hosting schema and context defintions side by side in order to define types of verifiable credentials with both JSON Schema and JSON-LD.

#### Greeting Card Verifiable Credential

https://github.com/transmute-industries/vc-greeting-card

This repo contains an example of a custom verifiable credential. It contains example context definitions in JSON-LD and markdown.
