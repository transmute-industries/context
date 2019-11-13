# [JSON-LD](https://json-ld.org/)

#### [Transmute JSON-LD on GitHub](https://github.com/transmute-industries/context)

> JSON-LD is a lightweight Linked Data format. It is easy for humans to read and write. It is based on the already successful JSON format and provides a way to help JSON data interoperate at Web-scale.

## How do I contribute to things that use JSON-LD?

You must understand the basics of JSON-LD and strive not to overload / collide with JSON-LD terms.

You should review the `@context` and the humand an machine parts of JSON-LD and report any undocumented terms. For example, the DID WG Context:

[https://www.w3.org/ns/did/v1](https://www.w3.org/ns/did/v1)

Points to the security context:

[https://w3id.org/security#](https://w3id.org/security#)

Which is used to define terms like:

[https://w3id.org/security#publicKeyPem](https://w3id.org/security#publicKeyPem) (redirect here is confusing, but common...)

However, there are many terms in the DID context that are not defined, in the security context, although they should be...

You can find which context properties are not defined, by reviewing the context linking here:

```
"Ed25519VerificationKey2018": "sec:Ed25519VerificationKey2018",
```

For example:

[https://w3id.org/security#Ed25519VerificationKey2018](https://w3id.org/security#Ed25519VerificationKey2018)

You should open an issue on the repo that hosts the context file you are using and report any undefined terms.

In the case of the DID WG, the correct repo to open an issue is: [https://github.com/w3c/did-core/](https://github.com/w3c/did-core/)

Because of JSON-LD, and the redirect I mention above. You may be required to open multiple pull requests to correct documentation.

You should start at the source repo and work your way backward towards the working group repo.

So to fix the error above, you would start by opening a pull request here:

[https://github.com/web-payments/web-payments.org/blob/master/contexts/security-v1.jsonld](https://github.com/web-payments/web-payments.org/blob/master/contexts/security-v1.jsonld)

Maybe here:

[https://github.com/perma-id/w3id.org](https://github.com/perma-id/w3id.org)

Once the context you wish to update has the correct properties, you can use them with confidence, knowing that their documentation is up to date, and that new contributors will be able to follow your example by reviewing closed PRs that corrected issues in the respective repos.

## What happens if nobody wants my contribution, but I need it?

You need to create your own JSON-LD context, and host it and the documentation on a web server that you control. If you want to use github, you can use this repo as a template:

[https://github.com/transmute-industries/context](https://github.com/transmute-industries/context)

[https://context.transmute.org/](https://context.transmute.org/)

## When should I extend a context, and when should I host my own?

You should always start by hosting your own.

You should make sure all the properties are documented.

If you think what you have is valuable, having a working hosted version of it will help others quickly agree with you, and make it obvious how your changes can be incorporated.
