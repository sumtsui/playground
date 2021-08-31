# https

https means http over Secure Sockets Layers (SSL)

step 1: browser makes request to server
step 2: server sends back its public key with its SSL cert, which is digitally signed by a 3rd party called Certificate Authority (CA)
step 3: browser checks the digital signature on the cert (created by the CA's private key) with the major CA's public keys installed in the browser. Once the cert is verified and trusted, a grean padlock appears in the address bar. **The padlock means the public key sent by the server really belongs to the server, not someone else.**
(step 1-3 is for verification)
step 4: exchange a secret: browser creates symmetric key (shared key), uses server's public key to encrypt the key and send to the server.
step 5: server decrypts the shared key with its private key. From now on, all the communication between browser and server will be encrypted this way.

this process involves both **asymmetric key** and **symmetric key** algorithem. 

the verification process use asymmetric key (public key & private key)

then symmetric key (shared key) is used to encrypt and decrypt all traffic.
