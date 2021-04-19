https://github.com/sumtsui/blockchain-in-js

  Tree data structure

    how many nodes in each height

    which is the longest path

  Hash

    what is hashing algorithm? https://blog.jscrambler.com/hashing-algorithms/

    A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The hash value is a summary of the original data. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes.

    A hash function algorithm is designed to be a one-way function, infeasible to invert. However, in recent years several hashing algorithms have been compromised. This happened to MD5. 

    how it works?

    We’re sending a file to our friend. It’s a really important file and we want to ensure it has been received in one piece. That’s when our hashing algorithm comes in.

    Before sending a file, User1 uses a hashing algorithm to generate a checksum for a file. Then he/she sends it alongside the file itself. User2 receives both the file and the checksum. Now he/she can use the same hashing algorithm on the received file.

    So now, User2 can compare both hashes. If they’re the same, it means it’s generated from the same file. There is no way that any other file has the same hash and there is no chance for a hash to be different for the same file.

    Popular Hashing Algorithms

    MD5, it is borken

    SHA-family

    Secure Hash Algorithm (SHA). SHA-1 is broken too. SHA-2 is good tho. Its family has six hash functions with digests: SHA-224, SHA-256 or 512 bits: SHA-224, **SHA-256**, SHA-384, SHA-512, SHA-512/224, SHA-512/256.

    how do you feel about this?

    still wobbling?

    or is it better?

    hahahah

    is this ok? no ... this is worst

    nonce

