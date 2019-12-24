# [JSON-LD](https://json-ld.org/)

#### [Transmute JSON-LD on GitHub](https://github.com/transmute-industries/context)

> JSON-LD is a lightweight Linked Data format. It is easy for humans to read and write. It is based on the already successful JSON format and provides a way to help JSON data interoperate at Web-scale.

## What do I need to know about JSON-LD?

Maybe you are seeing JSON-LD because you care about semantic web or decentralized identity and verifiable credentials, and maybe for other reasons. If you are trying to understand JSON-LD because of JSON-LD Signatures, and you wish to create your own JSON-LD Signature Suites, you need to be aware of the related contexts, and be careful not to choose existing terms, or overload existing concepts.

You should review the [VC Data Model](https://www.w3.org/TR/vc-data-model/), and ideally use an existing signature suite.

If you rely on JSON-LD terms, you must understand the basics of JSON-LD and strive not to overload / collide with existing JSON-LD terms.

You must not ignore JSON-LD if it is being used in a standard which you care about.

You have a responsibility to understand the technologies employed by the standard, and to make supporting contributions to the standard that do not confuse, detract from, or harm the choices that were made previously.

See also these guides:

- [creating your own context](https://context.transmute.org/json-ld/creating-a-custom-context).
- [extending-an-existing-context](https://context.transmute.org/json-ld/extending-an-existing-context).

## I found a bug in a JSON-LD context

You need to find the repo / maintainers of the context file & documentation, and open issues or contact them directly.

You may need to do a bit of digging if the context file is behind an http proxy or redirect.

## I want to fix a bug in a JSON-LD context

You should open a pull request against the context you wish to update, and its documentation, and cross link the pull requests if they are not in the same repo.

## I want to implement a feature in a JSON-LD context

You should start by hosting your own context, both the json file, and the human readable documentation.

If you want to use github pages, you can use this repo as a template to do so:

[https://github.com/transmute-industries/context](https://github.com/transmute-industries/context)

You should make sure all the properties in your context are documented.

You should next open a pull request against the context you wish to update, and its documentation, and cross link the pull requests if they are not in the same repo.

Once your pull request is merged, you can use the updated context, and stop using your own hosted version.

If the code maintainers refused to merge your pull request, or don't want your changes, you will need to continue to host your context and its documentation yourself.

## I want to contribute to the DID Spec JSON-LD Context

You will need to review this context files, hosted here:

[https://github.com/w3c/did-core/tree/master/contexts](https://github.com/w3c/did-core/tree/master/contexts)

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

You should never open a PR to update a context, with fields that are not documented.
