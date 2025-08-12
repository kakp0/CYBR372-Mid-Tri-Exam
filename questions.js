// Question Bank for CYBR372 Mid Tri Practice Test
// Format: { question: "Question text", answers: ["Answer A", "Answer B", "Answer C", "Answer D"], correct: 0 }

const sampleQuestions = [
    {
        "question": "What is the primary difference between a cryptographic primitive and a cryptographic protocol?",
        "answers": [
            "A primitive is a low-level algorithm, while a protocol is a sequence of steps involving one or more primitives.",
            "A protocol is a type of encryption, while a primitive is a type of hash function.",
            "Primitives are only used in symmetric cryptography, while protocols are used in asymmetric cryptography.",
            "Protocols are outdated, and modern systems only use primitives."
        ],
        "correct": 0
    },
    {
        "question": "In the context of security services, which of the following best describes 'freshness'?",
        "answers": [
            "Ensuring the data has not been altered.",
            "Ensuring the data is from the claimed sender.",
            "Ensuring a message is new and not a replay of a previous message.",
            "Ensuring the data is encrypted with the latest algorithm."
        ],
        "correct": 2
    },
    {
        "question": "What is the main weakness of the Vigenère cipher?",
        "answers": [
            "It is vulnerable to frequency analysis if the keyword length is known.",
            "The key space is too small for modern computers.",
            "It can only encrypt alphabetic characters.",
            "It does not provide any confusion or diffusion."
        ],
        "correct": 0
    },
    {
        "question": "What does the 'avalanche effect' in a hash function signify?",
        "answers": [
            "A small change in the input produces a small, predictable change in the output.",
            "A small change in the input results in a significant, unpredictable change in the output.",
            "The hash function is resistant to birthday attacks.",
            "The hash function can be reversed if you know the initial conditions."
        ],
        "correct": 1
    },
    {
        "question": "Why is padding necessary for some block cipher modes of operation?",
        "answers": [
            "To increase the size of the ciphertext for better security.",
            "To ensure the plaintext is a multiple of the block size.",
            "To add extra keys to the encryption process.",
            "To slow down the encryption to prevent timing attacks."
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a property of a Latin Square used for achieving perfect secrecy?",
        "answers": [
            "Every row contains every possible ciphertext exactly once.",
            "Every column contains every possible ciphertext exactly once.",
            "The number of keys must be smaller than the number of possible messages.",
            "The key must be chosen uniformly at random for each message."
        ],
        "correct": 2
    },
    {
        "question": "What is the primary purpose of a salt in password hashing?",
        "answers": [
            "To make the hash shorter and easier to store.",
            "To ensure that identical passwords have different hashes.",
            "To encrypt the password before it is hashed.",
            "To add a secret ingredient known only to the server."
        ],
        "correct": 1
    },
    {
        "question": "In RSA, why is the public exponent 'e' typically chosen to be a small odd number?",
        "answers": [
            "To make the private key 'd' larger and more secure.",
            "To make the encryption process faster.",
            "To ensure that the modulus 'n' is a prime number.",
            "To prevent the use of the Chinese Remainder Theorem."
        ],
        "correct": 1
    },
    {
        "question": "What is the security of the Diffie-Hellman key exchange based on?",
        "answers": [
            "The difficulty of factoring large prime numbers.",
            "The difficulty of computing discrete logarithms in a finite field.",
            "The strength of the underlying symmetric cipher.",
            "The secrecy of the public parameters 'p' and 'g'."
        ],
        "correct": 1
    },
    {
        "question": "What is the main advantage of using a nonce-based mechanism for freshness?",
        "answers": [
            "It does not require synchronized clocks between parties.",
            "It is faster than using sequence numbers.",
            "It provides non-repudiation.",
            "It eliminates the need for a shared secret key."
        ],
        "correct": 0
    },
    {
        "question": "Which of the following is a primary characteristic of a trapdoor one-way function?",
        "answers": [
            "It is easy to compute in one direction but hard to reverse.",
            "It is easy to compute in one direction and easy to reverse with secret information.",
            "It is hard to compute in both directions.",
            "It is a function that always outputs the same value."
        ],
        "correct": 1
    },
    {
        "question": "What does 'EUF-CMA' stand for in the context of digital signature security?",
        "answers": [
            "Eventually Unforgeable under Chosen-Message Attack.",
            "Existentially Unforgeable under Chosen-Message Attack.",
            "Easily Unforgeable under Ciphertext-Message Attack.",
            "Efficiently Unbreakable under Chosen-Message Attack."
        ],
        "correct": 1
    },
    {
        "question": "Why is it generally not recommended to use the same key for both encryption and MAC?",
        "answers": [
            "It is computationally too expensive.",
            "It can lead to security vulnerabilities where one operation compromises the other.",
            "It is not supported by most cryptographic libraries.",
            "The key sizes for encryption and MAC are always different."
        ],
        "correct": 1
    },
    {
        "question": "In the context of hash functions, what is the 'pigeonhole principle'?",
        "answers": [
            "If you have more pigeons than pigeonholes, at least one pigeonhole must contain more than one pigeon.",
            "A pigeon will always return to its home pigeonhole.",
            "The strength of a hash function is determined by the number of 'pigeonholes' (possible outputs).",
            "It is a method for finding hash collisions quickly."
        ],
        "correct": 0
    },
    {
        "question": "Which block cipher mode of operation can be parallelized for both encryption and decryption?",
        "answers": [
            "CBC (Cipher Block Chaining)",
            "CFB (Cipher Feedback)",
            "OFB (Output Feedback)",
            "CTR (Counter Mode)"
        ],
        "correct": 3
    },
    {
        "question": "What is a 'side-channel attack'?",
        "answers": [
            "An attack that targets the physical implementation of a cryptosystem rather than its theoretical weaknesses.",
            "An attack that uses a secondary communication channel to exfiltrate data.",
            "An attack that exploits weaknesses in the key generation process.",
            "An attack that involves guessing the key through a dictionary attack."
        ],
        "correct": 0
    },
    {
        "question": "In the RSA algorithm, what is the relationship between the private key 'd' and the public key 'e'?",
        "answers": [
            "d is the modular multiplicative inverse of e modulo t, where t = lcm(p-1, q-1).",
            "d is the greatest common divisor of e and n.",
            "d is a random number that is smaller than e.",
            "d and e are interchangeable."
        ],
        "correct": 0
    },
    {
        "question": "What is the primary function of a Key Derivation Function (KDF)?",
        "answers": [
            "To generate a key from a password or other non-key material.",
            "To derive multiple keys from a single master key.",
            "To check if a given key is valid.",
            "Both A and B."
        ],
        "correct": 3
    },
    {
        "question": "Which of the following is NOT a goal of a cryptographic hash function?",
        "answers": [
            "Preimage resistance",
            "Second preimage resistance",
            "Collision resistance",
            "Reversibility"
        ],
        "correct": 3
    },
    {
        "question": "What is the main difference between data origin authentication (DOA) and entity authentication (EA)?",
        "answers": [
            "DOA verifies the source of a message, while EA verifies the identity of a party in a current session.",
            "DOA is for symmetric cryptography, and EA is for asymmetric cryptography.",
            "DOA is faster than EA.",
            "There is no difference; they are the same concept."
        ],
        "correct": 0
    },
    {
        "question": "Why was the Data Encryption Standard (DES) replaced by the Advanced Encryption Standard (AES)?",
        "answers": [
            "DES was too slow for modern hardware.",
            "The 56-bit key size of DES was too small and vulnerable to brute-force attacks.",
            "DES was found to have a mathematical flaw in its design.",
            "The block size of DES was too large."
        ],
        "correct": 1
    },
    {
        "question": "What is a 'chosen-ciphertext attack' (CCA)?",
        "answers": [
            "An attack where the attacker can choose ciphertexts to be decrypted and obtain the corresponding plaintexts.",
            "An attack where the attacker chooses the ciphertext and tries to guess the key.",
            "An attack that only works on ciphers that use a chosen key.",
            "An attack where the attacker can choose the plaintext and get the corresponding ciphertext."
        ],
        "correct": 0
    },
    {
        "question": "In the context of public-key infrastructure (PKI), what is the role of a Certificate Authority (CA)?",
        "answers": [
            "To generate public and private keys for users.",
            "To digitally sign public keys, binding them to an identity.",
            "To store all the private keys in a secure database.",
            "To define the cryptographic algorithms that can be used."
        ],
        "correct": 1
    },
    {
        "question": "What is the 'birthday attack' on a hash function?",
        "answers": [
            "An attack that finds a collision for a hash function with a complexity of approximately 2^(n/2) for an n-bit hash.",
            "An attack that can only be performed on the attacker's birthday.",
            "An attack that tries to find the original input (preimage) of a hash.",
            "An attack that exploits weaknesses in the hash function's compression function."
        ],
        "correct": 0
    },
    {
        "question": "Which of the following is a disadvantage of stream ciphers?",
        "answers": [
            "They are generally slower than block ciphers.",
            "They require padding for the plaintext.",
            "They are highly susceptible to errors if synchronization is lost.",
            "They cannot be used for asymmetric encryption."
        ],
        "correct": 2
    },
    {
        "question": "What is the purpose of the 'padding' in the RSA-PSS digital signature scheme?",
        "answers": [
            "To make the signature longer and harder to forge.",
            "To introduce randomness and prevent certain types of attacks.",
            "To ensure the message hash is the correct size for the modulus.",
            "To add the signer's identity to the signature."
        ],
        "correct": 1
    },
    {
        "question": "Which of the following is NOT a valid mode of operation for a block cipher?",
        "answers": [
            "Electronic Codebook (ECB)",
            "Cipher Block Chaining (CBC)",
            "Counter (CTR)",
            "Single Block Operation (SBO)"
        ],
        "correct": 3
    },
    {
        "question": "What is 'semantic security'?",
        "answers": [
            "A property of a cryptosystem where an attacker cannot learn any information about the plaintext from the ciphertext.",
            "A type of security that only applies to text-based messages.",
            "A measure of how many languages a cryptosystem can support.",
            "A security notion that is weaker than perfect secrecy."
        ],
        "correct": 0
    },
    {
        "question": "In the context of a Feistel cipher, what is the primary advantage of its structure?",
        "answers": [
            "The encryption and decryption processes are very similar, often identical.",
            "It is the fastest type of block cipher.",
            "It is naturally resistant to all known attacks.",
            "It does not require a key."
        ],
        "correct": 0
    },
    {
        "question": "What is the main difference between HMAC and CMAC?",
        "answers": [
            "HMAC is based on a hash function, while CMAC is based on a block cipher.",
            "HMAC is more secure than CMAC.",
            "HMAC is faster than CMAC.",
            "HMAC requires a longer key than CMAC."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'replay attack'?",
        "answers": [
            "An attack where a valid data transmission is maliciously or fraudulently repeated or delayed.",
            "An attack where the attacker replays a video of a user entering their password.",
            "An attack that involves replaying the same key for multiple encryptions.",
            "An attack that targets the replay buffer of a computer system."
        ],
        "correct": 0
    },
    {
        "question": "What is the purpose of the 'initialization vector' (IV) in block cipher modes like CBC?",
        "answers": [
            "To ensure that encrypting the same plaintext multiple times produces different ciphertexts.",
            "To increase the key size of the block cipher.",
            "To act as a secondary key for decryption.",
            "To pad the plaintext to the correct block size."
        ],
        "correct": 0
    },
    {
        "question": "Which of the following is an example of a 'timing attack'?",
        "answers": [
            "An attacker measures the time it takes for a cryptographic operation to complete to deduce information about the key.",
            "An attack that must be completed within a certain time limit.",
            "An attack that exploits the system clock to generate predictable random numbers.",
            "An attack that delays messages to disrupt a protocol."
        ],
        "correct": 0
    },
    {
        "question": "In RSA, what would happen if an attacker could efficiently factor the modulus 'n'?",
        "answers": [
            "The attacker could compute the private key 'd'.",
            "The attacker could find collisions in the hash function.",
            "The attacker could decrypt messages without the private key.",
            "Both A and C."
        ],
        "correct": 3
    },
    {
        "question": "What is the main idea behind 'authenticated encryption' (AE)?",
        "answers": [
            "To provide both confidentiality and data integrity/authentication in a single, integrated step.",
            "To encrypt the authentication tag along with the message.",
            "To use the same key for both encryption and MAC.",
            "To authenticate the user before allowing them to encrypt data."
        ],
        "correct": 0
    },
    {
        "question": "Which of the following is NOT a standard key size for AES?",
        "answers": [
            "128 bits",
            "192 bits",
            "256 bits",
            "512 bits"
        ],
        "correct": 3
    },
    {
        "question": "What is the 'Chinese Remainder Theorem' and how can it be used in cryptography?",
        "answers": [
            "It is a theorem that allows for faster computations in modular arithmetic, often used to speed up RSA decryption.",
            "It is a method for breaking the RSA cryptosystem.",
            "It is a theorem about the distribution of prime numbers.",
            "It is a technique for creating digital signatures."
        ],
        "correct": 0
    },
    {
        "question": "What is the difference between a 'hard problem' and an 'easy problem' in computational complexity theory?",
        "answers": [
            "An easy problem can be solved in polynomial time, while a hard problem is believed to require exponential time.",
            "An easy problem can be solved by a human, while a hard problem requires a computer.",
            "An easy problem has a short solution, while a hard problem has a long solution.",
            "There is no formal distinction; it is a subjective measure."
        ],
        "correct": 0
    },
    {
        "question": "Why is it important for a digital signature scheme to be resistant to forgery?",
        "answers": [
            "To prevent an attacker from creating a valid signature for a message they were not authorized to sign.",
            "To ensure the signature is unique for each message.",
            "To make the signature verification process faster.",
            "To allow the signature to be used for encryption."
        ],
        "correct": 0
    },
    {
        "question": "What is the role of the 'S-box' in the AES algorithm?",
        "answers": [
            "To provide non-linearity in the cipher through byte substitution.",
            "To shift the rows of the state matrix.",
            "To mix the columns of the state matrix.",
            "To add the round key to the state."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'man-in-the-middle' (MITM) attack?",
        "answers": [
            "An attack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other.",
            "An attack that targets the middle block of a ciphertext.",
            "An attack that is halfway between a passive and an active attack.",
            "An attack that can only be performed by a man."
        ],
        "correct": 0
    },
    {
        "question": "In the context of key exchange, what is the primary goal of the Diffie-Hellman protocol?",
        "answers": [
            "To allow two parties to establish a shared secret over an insecure channel.",
            "To encrypt messages between two parties.",
            "To digitally sign messages.",
            "To authenticate the identities of the two parties."
        ],
        "correct": 0
    },
    {
        "question": "What is the difference between 'confusion' and 'diffusion' in cryptography?",
        "answers": [
            "Confusion obscures the relationship between the key and the ciphertext, while diffusion spreads the influence of a single plaintext bit over many ciphertext bits.",
            "Confusion is a property of symmetric ciphers, while diffusion is a property of asymmetric ciphers.",
            "Confusion makes the ciphertext look random, while diffusion makes it longer.",
            "There is no difference; they are synonymous."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'cryptographic nonce'?",
        "answers": [
            "A number that is used only once in a cryptographic communication.",
            "A type of cryptographic key.",
            "A special character used in passwords.",
            "An error in a cryptographic algorithm."
        ],
        "correct": 0
    },
    {
        "question": "What is the main security concern with the Electronic Codebook (ECB) mode of operation?",
        "answers": [
            "It does not hide data patterns, as identical plaintext blocks are encrypted into identical ciphertext blocks.",
            "It is very slow compared to other modes.",
            "It requires a very long key.",
            "It is not resistant to brute-force attacks."
        ],
        "correct": 0
    },
    {
        "question": "How does a digital signature provide non-repudiation?",
        "answers": [
            "Because the signature is created with the sender's private key, only the sender could have created it, so they cannot deny sending the message.",
            "By encrypting the message so that only the intended recipient can read it.",
            "By including a timestamp in the signature.",
            "By using a trusted third party to verify the signature."
        ],
        "correct": 0
    },
    {
        "question": "What is the purpose of the 'MixColumns' step in AES?",
        "answers": [
            "To provide diffusion by mixing the bytes in each column of the state.",
            "To substitute bytes using the S-box.",
            "To shift the rows of the state.",
            "To add the round key."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'Extended Euclidean Algorithm' used for in cryptography?",
        "answers": [
            "To find the modular multiplicative inverse of a number, which is crucial for RSA key generation.",
            "To find the greatest common divisor of two numbers.",
            "To solve systems of linear equations.",
            "To generate large prime numbers."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'padding oracle attack'?",
        "answers": [
            "An attack that uses the error messages from a server about incorrect padding to decrypt ciphertext.",
            "An attack where the attacker adds extra padding to a message to make it longer.",
            "An attack that targets the padding function itself.",
            "An attack that uses a 'padding oracle' to predict the next key."
        ],
        "correct": 0
    },
    {
        "question": "Why is it generally faster to use a hybrid cryptosystem (asymmetric + symmetric) than a purely asymmetric one for encrypting large amounts of data?",
        "answers": [
            "Symmetric encryption is much faster than asymmetric encryption, so we use asymmetric encryption only to securely exchange a symmetric key.",
            "Asymmetric encryption is not secure enough for large amounts of data.",
            "Hybrid systems require shorter keys.",
            "It is not faster; purely asymmetric systems are always faster."
        ],
        "correct": 0
    },
    {
        "question": "What is the main idea behind Elliptic Curve Cryptography (ECC)?",
        "answers": [
            "It is a public-key cryptosystem based on the algebraic structure of elliptic curves over finite fields, offering similar security to RSA with smaller key sizes.",
            "It is a type of symmetric cipher that uses elliptic curves to generate the keystream.",
            "It is a method for drawing curves that are used in cryptographic protocols.",
            "It is a new type of hash function based on elliptic curves."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'zero-knowledge proof'?",
        "answers": [
            "A method by which one party (the prover) can prove to another party (the verifier) that they know a value x, without conveying any information apart from the fact that they know the value x.",
            "A proof that a cryptographic algorithm has zero weaknesses.",
            "A proof that requires zero knowledge of mathematics to understand.",
            "A type of digital signature that uses zero-knowledge principles."
        ],
        "correct": 0
    },
    {
        "question": "What is the difference between 'data at rest' and 'data in transit'?",
        "answers": [
            "Data at rest is data that is stored on a device, while data in transit is data that is being transmitted over a network.",
            "Data at rest is encrypted, while data in transit is not.",
            "Data at rest is static, while data in transit is dynamic.",
            "There is no difference; the terms are interchangeable."
        ],
        "correct": 0
    },
    {
        "question": "What is 'forward secrecy' (or 'perfect forward secrecy')?",
        "answers": [
            "A property of key-agreement protocols that ensures that if a long-term key is compromised, past session keys will not be compromised.",
            "A type of secrecy that guarantees future messages will be secure.",
            "A property that ensures the key is always moving forward and never reused.",
            "A synonym for perfect secrecy."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'rainbow table' attack?",
        "answers": [
            "A type of attack on password hashes that uses precomputed tables of hashes to reverse the hashing process.",
            "An attack that uses a table of rainbow colors to decrypt messages.",
            "An attack that targets the 'rainbow' series of cryptographic algorithms.",
            "An attack that is only effective against very colorful passwords."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'entropy' of a key or password?",
        "answers": [
            "A measure of its randomness or unpredictability. Higher entropy means a stronger key.",
            "The length of the key in bits.",
            "The number of special characters in the key.",
            "The time it takes to generate the key."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'cryptographic backdoor'?",
        "answers": [
            "A hidden method in a cryptosystem that allows someone to bypass security and access encrypted data.",
            "A physical door that leads to a room where cryptographic keys are stored.",
            "A feature that allows for easy recovery of lost keys.",
            "A type of side-channel attack."
        ],
        "correct": 0
    },
    {
        "question": "What is the purpose of a 'key schedule' in a block cipher like AES?",
        "answers": [
            "To expand the initial key into a series of round keys that are used in each round of the cipher.",
            "To schedule when keys should be changed.",
            "A list of all the keys used in a system.",
            "A function that determines the optimal key size for a given message."
        ],
        "correct": 0
    },
    {
        "question": "What is 'homomorphic encryption'?",
        "answers": [
            "A form of encryption that allows computation to be performed on ciphertext, generating an encrypted result which, when decrypted, matches the result of the operations as if they had been performed on the plaintext.",
            "An encryption method that uses the same key for encryption and decryption.",
            "An encryption scheme that is based on the principles of homeopathy.",
            "A type of encryption that is resistant to all known attacks."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'avalanche criterion' for a block cipher?",
        "answers": [
            "A desirable property where changing one bit in the plaintext or key results in changing approximately half the bits in the ciphertext.",
            "A measure of how quickly a cipher can encrypt data.",
            "A criterion for selecting the best key for a cipher.",
            "A weakness in a cipher that can be exploited by an attacker."
        ],
        "correct": 0
    },
    {
        "question": "What is the difference between a 'keyed hash function' (like HMAC) and a 'keyless hash function' (like SHA-256)?",
        "answers": [
            "A keyed hash function requires a secret key to compute the hash, providing authentication, while a keyless hash function does not.",
            "A keyed hash function is always more secure than a keyless one.",
            "A keyed hash function is used for encryption, while a keyless one is for integrity.",
            "There is no such thing as a keyless hash function."
        ],
        "correct": 0
    },
    {
        "question": "In the context of random number generation, what is the difference between a 'PRNG' and a 'CSPRNG'?",
        "answers": [
            "A CSPRNG (Cryptographically Secure Pseudorandom Number Generator) is designed to be unpredictable and suitable for cryptographic applications, while a PRNG may not be.",
            "A CSPRNG is a true random number generator, while a PRNG is not.",
            "A CSPRNG is faster than a PRNG.",
            "CSPRNGs are used for symmetric crypto, and PRNGs for asymmetric crypto."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'digital certificate'?",
        "answers": [
            "An electronic document that uses a digital signature to bind a public key with an identity — information such as the name of a person or an organization, their address, and so forth.",
            "A certificate that proves you are a certified cryptographer.",
            "A digital version of a birth certificate.",
            "A file that contains a private key."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'meet-in-the-middle' attack, and which cipher is it famously used against?",
        "answers": [
            "A type of cryptanalytic attack that can be used against ciphers that involve multiple stages of encryption, such as Double DES.",
            "An attack where two attackers meet in the middle of a network to launch a coordinated assault.",
            "An attack that targets the middle block of a message.",
            "An attack against the Diffie-Hellman key exchange."
        ],
        "correct": 0
    },
    {
        "question": "What is 'quantum cryptography'?",
        "answers": [
            "A field of cryptography that uses the principles of quantum mechanics to perform cryptographic tasks, such as quantum key distribution.",
            "A type of cryptography that is resistant to attacks from quantum computers.",
            "A theoretical concept that has not yet been implemented.",
            "A faster way of performing classical cryptography."
        ],
        "correct": 0
    },
    {
        "question": "What is the purpose of the 'ShiftRows' step in AES?",
        "answers": [
            "To provide diffusion by cyclically shifting the bytes in the last three rows of the state.",
            "To substitute bytes using the S-box.",
            "To mix the columns of the state.",
            "To add the round key."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'hash collision'?",
        "answers": [
            "When two different inputs to a hash function produce the same output.",
            "When a hash function collides with another hash function.",
            "An error in the implementation of a hash function.",
            "When a hash function produces an output that is too long."
        ],
        "correct": 0
    },
    {
        "question": "What is the main advantage of GCM (Galois/Counter Mode) over other modes like CBC?",
        "answers": [
            "GCM provides both confidentiality and authentication (authenticated encryption) in an efficient manner.",
            "GCM is simpler to implement than CBC.",
            "GCM does not require an initialization vector (IV).",
            "GCM is more resistant to side-channel attacks."
        ],
        "correct": 0
    },
    {
        "question": "In the context of RSA, what is a 'blinding' attack?",
        "answers": [
            "A type of attack that can defeat certain countermeasures against timing or fault analysis attacks by modifying the ciphertext before it is processed by the private key operation.",
            "An attack that blinds the user with a bright light while they are entering their password.",
            "An attack that makes the ciphertext unreadable.",
            "An attack that targets the 'blinding' factor in the RSA algorithm."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'principle of least privilege' in security?",
        "answers": [
            "The principle that a user or process should only have the minimum level of access or permissions necessary to perform its function.",
            "The principle that the least privileged user is the most secure.",
            "The principle that security should be applied with the least amount of effort.",
            "A principle that only applies to physical security."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'stream cipher's state'?",
        "answers": [
            "The internal memory of the keystream generator, which is updated at each step to produce the next part of the keystream.",
            "The current state of the encryption process (e.g., encrypting, decrypting, idle).",
            "The state of the communication channel.",
            "A stream cipher does not have a state."
        ],
        "correct": 0
    },
    {
        "question": "What is 'security through obscurity' and why is it generally considered a bad practice?",
        "answers": [
            "The reliance on the secrecy of the design or implementation of a system as the main method of providing security. It is bad because if the secret is discovered, the entire system is compromised.",
            "A highly secure method of hiding data in plain sight.",
            "A principle that states that the more obscure a system is, the more secure it is.",
            "A technique used in steganography."
        ],
        "correct": 0
    },
    {
        "question": "What is the purpose of a 'canary value' in software security?",
        "answers": [
            "A known value placed on the stack to detect buffer overflows. If the canary is overwritten, it indicates an attack.",
            "A value that sings when an attack is detected.",
            "A special key used for testing cryptographic algorithms.",
            "A value that is used to seed a random number generator."
        ],
        "correct": 0
    },
    {
        "question": "What is 'error propagation' in the context of block cipher modes?",
        "answers": [
            "The effect that an error in one ciphertext block has on the decryption of subsequent blocks.",
            "A method for propagating errors to disrupt a communication channel.",
            "A desirable property that makes a cipher more secure.",
            "An error in the implementation of a cipher."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'public key certificate' (e.g., X.509)?",
        "answers": [
            "A standardized format for a digital certificate that binds a public key to an identity.",
            "A certificate that is publicly available for anyone to view.",
            "A type of key that can be used by the public.",
            "A certificate that has been signed by a public entity."
        ],
        "correct": 0
    },
    {
        "question": "What is the difference between 'authentication' and 'authorization'?",
        "answers": [
            "Authentication is the process of verifying who you are, while authorization is the process of verifying what you are allowed to do.",
            "Authentication is for users, while authorization is for systems.",
            "Authentication uses passwords, while authorization uses keys.",
            "They are the same thing."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'cryptographic accumulator'?",
        "answers": [
            "A cryptographic primitive that allows you to represent a set of elements with a single, short value and prove that an element is in the set without revealing the other elements.",
            "A device that accumulates cryptographic keys.",
            "A type of hash function that accumulates the input.",
            "A method for storing large amounts of encrypted data."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'discrete logarithm problem'?",
        "answers": [
            "The problem of finding the exponent 'x' in the equation g^x = h (mod p), given g, h, and p. The difficulty of this problem is the basis for several public-key cryptosystems.",
            "The problem of taking the logarithm of a discrete number.",
            "A problem that can be solved easily with a calculator.",
            "A problem related to the distribution of prime numbers."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'one-way function'?",
        "answers": [
            "A function that is easy to compute on every input, but hard to invert given the image of a random input.",
            "A function that only goes in one direction.",
            "A function that is used for one-time pads.",
            "A function that has only one possible output."
        ],
        "correct": 0
    },
    {
        "question": "What is the purpose of 'key wrapping'?",
        "answers": [
            "To encrypt a cryptographic key with another key, for secure storage or transmission.",
            "To wrap a key in a physical container.",
            "To combine multiple keys into a single key.",
            "A method for generating keys."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'root of trust' in a security system?",
        "answers": [
            "A component or set of components that are inherently trusted and upon which the security of the rest of the system depends.",
            "The root directory of a file system where security policies are stored.",
            "The person who is ultimately responsible for the security of a system.",
            "The first key that is generated in a system."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'brute-force attack'?",
        "answers": [
            "A trial-and-error method used to obtain information such as a user password or PIN. In a brute-force attack, automated software is used to generate a large number of consecutive guesses as to the value of the desired data.",
            "An attack that uses physical force to break into a system.",
            "An attack that is very difficult to perform.",
            "An attack that targets the 'brute' part of a cipher."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'cipher suite' in the context of TLS/SSL?",
        "answers": [
            "A set of cryptographic algorithms that are used to secure a network connection, including a key exchange algorithm, an authentication algorithm, a bulk encryption algorithm, and a MAC algorithm.",
            "A collection of different ciphers.",
            "A software package that contains cryptographic tools.",
            "A hotel room where cryptographers meet."
        ],
        "correct": 0
    },
    {
        "question": "What is the difference between 'symmetric' and 'asymmetric' key cryptography?",
        "answers": [
            "Symmetric key cryptography uses the same key for encryption and decryption, while asymmetric key cryptography uses a pair of keys (public and private).",
            "Symmetric key cryptography is more secure than asymmetric key cryptography.",
            "Symmetric key cryptography is slower than asymmetric key cryptography.",
            "Symmetric key cryptography is used for digital signatures, while asymmetric is for encryption."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'cryptographic hash function' used for?",
        "answers": [
            "To create a fixed-size digest of a message, which can be used for integrity checking, digital signatures, and password storage.",
            "To encrypt a message.",
            "To generate random numbers.",
            "To compress a message to a smaller size."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'digital signature'?",
        "answers": [
            "A mathematical scheme for verifying the authenticity of digital messages or documents. A valid digital signature gives a recipient very strong reason to believe that the message was created by a known sender (authentication), that the sender cannot deny having sent the message (non-repudiation), and that the message was not altered in transit (integrity).",
            "A scanned image of a handwritten signature.",
            "A way to sign a document electronically without using cryptography.",
            "A type of encryption."
        ],
        "correct": 0
    },
    {
        "question": "What is the purpose of the 'nonce' in the Counter (CTR) mode of operation?",
        "answers": [
            "To act as an initial value for the counter, ensuring that the keystream is unique for each message.",
            "To be the key for the encryption.",
            "To pad the message to the correct length.",
            "To slow down the encryption process."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'trusted platform module' (TPM)?",
        "answers": [
            "A dedicated microcontroller designed to secure hardware through integrated cryptographic keys.",
            "A software module that is trusted by the operating system.",
            "A platform for developing trusted applications.",
            "A module that is used to test the security of a platform."
        ],
        "correct": 0
    },
    {
        "question": "What is 'steganography'?",
        "answers": [
            "The practice of concealing a file, message, image, or video within another file, message, image, or video.",
            "A type of cryptography.",
            "A method for compressing data.",
            "A technique for detecting hidden messages."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'differential cryptanalysis' attack?",
        "answers": [
            "A form of cryptanalysis applicable primarily to block ciphers, but also to stream ciphers and cryptographic hashes. In the broadest sense, it is the study of how differences in an input can affect the resultant difference at the output.",
            "An attack that uses calculus to break a cipher.",
            "An attack that targets the differences between two different ciphers.",
            "An attack that is only effective against differential equations."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'linear cryptanalysis' attack?",
        "answers": [
            "A general form of cryptanalysis based on finding affine approximations to the action of a cipher. Attacks have been developed for block ciphers and stream ciphers.",
            "An attack that uses linear algebra to break a cipher.",
            "An attack that only works on ciphers that are linear.",
            "An attack that is less effective than differential cryptanalysis."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'public key infrastructure' (PKI)?",
        "answers": [
            "A set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store, and revoke digital certificates and manage public-key encryption.",
            "An infrastructure that is open to the public.",
            "A system for managing private keys.",
            "A type of network infrastructure."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'entropy pool' in an operating system?",
        "answers": [
            "A source of randomness collected from unpredictable hardware events, used to seed cryptographic random number generators.",
            "A swimming pool where entropy is stored.",
            "A measure of the total entropy of the system.",
            "A file that contains random data."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'secure multi-party computation' (SMPC)?",
        "answers": [
            "A subfield of cryptography with the goal of creating methods for parties to jointly compute a function over their inputs while keeping those inputs private.",
            "A computation that is performed by multiple parties in a secure environment.",
            "A type of distributed computing.",
            "A method for securing communications between multiple parties."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'time-memory tradeoff' attack?",
        "answers": [
            "A type of cryptanalytic attack where an attacker precomputes a large table of values (memory) to speed up the process of breaking a cipher later (time). Rainbow tables are an example.",
            "An attack that trades time for memory.",
            "An attack that requires a lot of time and memory.",
            "An attack that is only effective against ciphers with a small memory footprint."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'certificate revocation list' (CRL)?",
        "answers": [
            "A list of digital certificates that have been revoked by the issuing Certificate Authority (CA) before their scheduled expiration date and should no longer be trusted.",
            "A list of all the certificates that have been issued.",
            "A list of all the CAs.",
            "A list of all the revoked keys."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'Online Certificate Status Protocol' (OCSP)?",
        "answers": [
            "An Internet protocol used for obtaining the revocation status of an X.509 digital certificate. It is often used as an alternative to CRLs.",
            "A protocol for issuing certificates online.",
            "A protocol for checking the status of a network connection.",
            "A protocol for managing online identities."
        ],
        "correct": 0
    },
    {
        "question": "What is 'OCSP stapling'?",
        "answers": [
            "A mechanism by which a website can present a time-stamped OCSP response along with its certificate, reducing the need for the client to contact the CA directly and improving privacy and performance.",
            "A way of stapling a certificate to an email.",
            "A method for combining multiple OCSP responses.",
            "A type of attack against OCSP."
        ],
        "correct": 0
    },
    {
        "question": "In RSA key generation, why is it crucial that the primes p and q are kept secret?",
        "answers": [
            "Because if an attacker knows p and q, they can easily compute the modulus n.",
            "Because knowing p and q allows an attacker to compute t = lcm(p-1, q-1) and then find the private key d.",
            "Because p and q are used directly in the decryption process.",
            "Because p and q determine the size of the public exponent e."
        ],
        "correct": 1
    },
    {
        "question": "What is the primary advantage of Elliptic Curve Cryptography (ECC) over RSA?",
        "answers": [
            "ECC offers equivalent security with significantly smaller key sizes.",
            "ECC is simpler to understand and implement than RSA.",
            "ECC is resistant to attacks from quantum computers.",
            "ECC can be used for both encryption and digital signatures, unlike RSA."
        ],
        "correct": 0
    },
    {
        "question": "In the context of a Diffie-Hellman key exchange, what does a man-in-the-middle attacker do?",
        "answers": [
            "The attacker passively listens to the exchange to deduce the shared secret.",
            "The attacker intercepts the public keys and substitutes their own, establishing separate secret keys with each party.",
            "The attacker floods the channel with noise to disrupt the key exchange.",
            "The attacker tries to solve the discrete logarithm problem to find the private keys."
        ],
        "correct": 1
    },
    {
        "question": "What is the 'cover time' of a piece of information?",
        "answers": [
            "The time it takes to encrypt the information.",
            "The length of time for which the information must be kept secret.",
            "The time it takes for an attacker to brute-force the key.",
            "The time a message spends in transit."
        ],
        "correct": 1
    },
    {
        "question": "Which property of a hash function is most important for protecting digitally signed documents from alteration?",
        "answers": [
            "Preimage resistance",
            "Second preimage resistance",
            "Collision resistance",
            "The avalanche effect"
        ],
        "correct": 1
    },
    {
        "question": "How does the Counter (CTR) mode turn a block cipher into a stream cipher?",
        "answers": [
            "By encrypting a counter and XORing the result with the plaintext, effectively generating a keystream.",
            "By chaining the plaintext blocks together before encryption.",
            "By using the plaintext as the key for the counter.",
            "By feeding the output of the cipher back into the input."
        ],
        "correct": 0
    },
    {
        "question": "What is the primary reason for using a standard padding scheme like RSA-OAEP instead of simple zero-padding?",
        "answers": [
            "To prevent attacks that exploit the mathematical structure of unpadded RSA, such as the small message attack.",
            "To make the ciphertext larger and more difficult to transmit.",
            "To ensure the message is always a prime number.",
            "To add a digital signature to the encrypted message."
        ],
        "correct": 0
    },
    {
        "question": "What is the relationship between non-repudiation and data origin authentication?",
        "answers": [
            "They are independent concepts.",
            "Data origin authentication is a prerequisite for non-repudiation.",
            "Non-repudiation is a prerequisite for data origin authentication.",
            "They are the same security service."
        ],
        "correct": 1
    },
    {
        "question": "In the HMAC construction, what is the purpose of using two different keys derived from the master key (ipad and opad)?",
        "answers": [
            "To provide a nested, more secure hash computation that is resistant to length extension attacks.",
            "To allow for two different hash functions to be used.",
            "To double the length of the output tag.",
            "One key is for encryption and the other is for authentication."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'fault analysis' attack?",
        "answers": [
            "An attack where an attacker induces errors in a cryptographic device's computation to deduce secret information from the faulty outputs.",
            "An analysis of the faults in a cryptographic algorithm's design.",
            "An attack that exploits software bugs.",
            "An attack where the attacker finds fault with the security of a system."
        ],
        "correct": 0
    },
    {
        "question": "Why is a large keyspace a necessary but not sufficient condition for a secure cryptosystem?",
        "answers": [
            "A large keyspace prevents brute-force attacks, but doesn't protect against analytical attacks that exploit structural weaknesses.",
            "A large keyspace makes the cipher too slow to be practical.",
            "A small keyspace is actually more secure because there are fewer keys to manage.",
            "The size of the keyspace has no impact on the security of a cryptosystem."
        ],
        "correct": 0
    },
    {
        "question": "In the context of the Vigenère cipher, what is the 'Kasiski examination' used for?",
        "answers": [
            "To determine the length of the keyword by finding repeated sequences of letters in the ciphertext.",
            "To perform frequency analysis on the ciphertext.",
            "To find the keyword through a dictionary attack.",
            "To encrypt the message using the Kasiski method."
        ],
        "correct": 0
    },
    {
        "question": "What is the main difference in error propagation between CFB mode and OFB mode?",
        "answers": [
            "In CFB, a bit error in the ciphertext affects the decryption of the current block and the next, while in OFB, a bit error only affects the corresponding plaintext bit.",
            "OFB has more significant error propagation than CFB.",
            "CFB has no error propagation.",
            "They have identical error propagation characteristics."
        ],
        "correct": 0
    },
    {
        "question": "What does it mean for a problem to be solvable in 'polynomial time'?",
        "answers": [
            "The time required to solve the problem is bounded by a polynomial function of the input size, generally considered 'efficient' or 'easy'.",
            "The problem involves solving polynomial equations.",
            "The time required is very large and grows exponentially.",
            "The problem can only be solved by a quantum computer."
        ],
        "correct": 0
    },
    {
        "question": "How does a digital signature scheme with message recovery differ from one with appendix?",
        "answers": [
            "In a scheme with message recovery, the original message can be recovered from the signature itself, whereas a scheme with appendix requires the original message to be sent alongside the signature.",
            "Message recovery schemes are less secure.",
            "Schemes with appendix are faster.",
            "Message recovery is an outdated technique."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'trapdoor' in the RSA cryptosystem?",
        "answers": [
            "The knowledge of the prime factors p and q of the modulus n.",
            "The public exponent e.",
            "The padding scheme used.",
            "A hidden weakness in the algorithm."
        ],
        "correct": 0
    },
    {
        "question": "Which security service is NOT typically provided by a Message Authentication Code (MAC)?",
        "answers": [
            "Data integrity",
            "Data origin authentication",
            "Non-repudiation",
            "A MAC provides all of these."
        ],
        "correct": 2
    },
    {
        "question": "What is the purpose of the 'AddRoundKey' step in the AES algorithm?",
        "answers": [
            "To combine the current state with a portion of the expanded key using a bitwise XOR operation.",
            "To add a new key to the key schedule.",
            "To increase the size of the state matrix.",
            "To perform a modular addition."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'hybrid cryptosystem'?",
        "answers": [
            "A system that combines the efficiency of symmetric cryptography with the convenience of asymmetric cryptography for key exchange.",
            "A system that uses both hardware and software for encryption.",
            "A cryptosystem that can operate in multiple modes.",
            "A system that combines a block cipher and a stream cipher."
        ],
        "correct": 0
    },
    {
        "question": "In the context of password-based key derivation functions (PBKDFs), what is the purpose of the 'iteration count'?",
        "answers": [
            "To make the key derivation process computationally expensive and slow down brute-force attacks.",
            "To determine the length of the output key.",
            "To count the number of times a password has been used.",
            "To add randomness to the process."
        ],
        "correct": 0
    },
    {
        "question": "What is the fundamental reason that a one-time pad offers perfect secrecy?",
        "answers": [
            "The key is random, the same length as the message, and never reused, making every possible plaintext equally likely given a ciphertext.",
            "The XOR operation is mathematically unbreakable.",
            "The key is generated by a true random number generator.",
            "The key is exchanged securely before communication."
        ],
        "correct": 0
    },
    {
        "question": "What is the role of a 'primitive root modulo p' in the Diffie-Hellman key exchange?",
        "answers": [
            "It is a number 'g' whose powers generate all the integers from 1 to p-1, ensuring a large space for the public keys.",
            "It is the secret key.",
            "It is the shared secret.",
            "It is a large prime number."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'length extension attack' and which type of MAC construction is vulnerable to it?",
        "answers": [
            "An attack where an attacker can compute MAC(message || extension) from MAC(message) without knowing the key; naive MAC constructions like H(key || message) are vulnerable.",
            "An attack that extends the length of the key.",
            "An attack that only works on messages of a certain length.",
            "An attack against digital signatures, not MACs."
        ],
        "correct": 0
    },
    {
        "question": "What is the difference between a 'chosen-plaintext attack' (CPA) and a 'chosen-ciphertext attack' (CCA)?",
        "answers": [
            "In a CPA, the attacker can encrypt chosen plaintexts, while in a CCA, the attacker can also decrypt chosen ciphertexts, making it a more powerful attack model.",
            "CPA is for symmetric ciphers, and CCA is for asymmetric ciphers.",
            "CPA targets the encryption algorithm, while CCA targets the decryption algorithm.",
            "There is no practical difference between the two."
        ],
        "correct": 0
    },
    {
        "question": "Why is it insecure to use RSA to sign a message hash directly without a padding scheme like PSS?",
        "answers": [
            "It can be vulnerable to existential forgery attacks, where an attacker can create a valid signature for a random message.",
            "The hash is too small for the RSA operation.",
            "The signature would be reversible, revealing the hash.",
            "It is not insecure; padding is optional."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'Galois Field' GF(2^8) used for in AES?",
        "answers": [
            "It is the finite field in which the byte-oriented arithmetic for the SubBytes and MixColumns steps is performed.",
            "It is used to generate the key schedule.",
            "It is the field of all possible 8-bit numbers.",
            "It is a field of study in mathematics."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'Sybil attack' in the context of network security?",
        "answers": [
            "An attack where a malicious user creates a large number of pseudonymous identities to gain a disproportionately large influence in a peer-to-peer network.",
            "An attack named after a famous cryptographer.",
            "An attack that targets the system's billing (Sybil) information.",
            "A type of side-channel attack."
        ],
        "correct": 0
    },
    {
        "question": "What is the purpose of the 'Merkle-Damgård construction' in hash functions?",
        "answers": [
            "It is a method for building a collision-resistant hash function from a collision-resistant one-way compression function, allowing it to handle arbitrary-length inputs.",
            "It is a method for creating digital signatures.",
            "It is a type of block cipher.",
            "It is a construction for a public-key cryptosystem."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'rubber-hose cryptanalysis' attack?",
        "answers": [
            "An attack where the attacker coerces a victim into revealing a secret key through threats or torture.",
            "An attack that uses a rubber hose to siphon data from a network cable.",
            "A type of fault analysis attack.",
            "A humorous term for a brute-force attack."
        ],
        "correct": 0
    },
    {
        "question": "What is the main security goal of a 'commitment scheme'?",
        "answers": [
            "To allow a party to commit to a chosen value while keeping it hidden from others, with the ability to reveal the committed value later.",
            "To commit a key to a specific user.",
            "A scheme for making legally binding commitments online.",
            "A type of digital signature."
        ],
        "correct": 0
    },
    {
        "question": "In AES, how many rounds are performed for a 128-bit key?",
        "answers": [
            "10 rounds",
            "12 rounds",
            "14 rounds",
            "8 rounds"
        ],
        "correct": 0
    },
    {
        "question": "What is a 'denial-of-service' (DoS) attack?",
        "answers": [
            "An attack intended to make a machine or network resource unavailable to its intended users.",
            "An attack where the service provider denies that a transaction took place.",
            "An attack that denies the existence of a secret key.",
            "An attack that targets the operating system."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'Internet Key Exchange' (IKE) protocol used for?",
        "answers": [
            "It is the protocol used to set up a security association (SA) in the IPsec protocol suite, often using Diffie-Hellman.",
            "A protocol for exchanging keys over the internet in general.",
            "A protocol for managing public keys in a PKI.",
            "A protocol for exchanging physical keys."
        ],
        "correct": 0
    },
    {
        "question": "What is the difference between 'statistical randomness' and 'cryptographic randomness'?",
        "answers": [
            "Cryptographic randomness requires that the numbers are not only statistically random but also unpredictable to an attacker.",
            "Statistical randomness is more random than cryptographic randomness.",
            "Cryptographic randomness is generated by a computer, while statistical randomness is from natural phenomena.",
            "There is no difference."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'transposition cipher'?",
        "answers": [
            "A cipher that rearranges the order of the plaintext letters without changing the letters themselves.",
            "A cipher that substitutes each letter with another letter.",
            "A cipher that uses a matrix transposition.",
            "A modern, secure type of cipher."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'work factor' of a cryptosystem?",
        "answers": [
            "An estimate of the effort (in terms of time and resources) required to break it.",
            "The amount of work required to implement the cryptosystem.",
            "A measure of how efficient the cryptosystem is.",
            "The number of people required to design the cryptosystem."
        ],
        "correct": 0
    },
    {
        "question": "In the context of security protocols, what is a 'liveness' property?",
        "answers": [
            "A property that ensures the protocol eventually makes progress and does not get stuck indefinitely.",
            "A property that ensures the parties in the protocol are alive.",
            "A property related to the freshness of messages.",
            "A property that ensures the protocol is secure."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'session key'?",
        "answers": [
            "A temporary, single-use symmetric key used for encrypting all messages in one communication session.",
            "A key that is used for multiple sessions.",
            "A type of public key.",
            "The master key from which all other keys are derived."
        ],
        "correct": 0
    },
    {
        "question": "What is the purpose of a 'key confirmation' step in a key exchange protocol?",
        "answers": [
            "To provide assurance to both parties that they have computed the same secret key.",
            "To confirm the identity of the other party.",
            "To confirm that the key is strong enough.",
            "To register the key with a central authority."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'related-key attack'?",
        "answers": [
            "A type of cryptanalytic attack where the attacker can observe the operation of a cipher under several different keys whose values are related in some known way.",
            "An attack that uses a key related to the target's family.",
            "An attack where the key is related to the plaintext.",
            "An attack that targets the key schedule."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'bit commitment' scheme?",
        "answers": [
            "A cryptographic protocol that allows one to commit to a chosen bit (0 or 1) while keeping it hidden from others, with the ability to reveal the committed bit later.",
            "A scheme for committing a single bit to memory.",
            "A hardware device for storing bits.",
            "A type of error correction code."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'Fiat-Shamir heuristic'?",
        "answers": [
            "A technique for converting a public-coin interactive proof system into a non-interactive proof (like a digital signature) by replacing the verifier's random challenges with the output of a cryptographic hash function.",
            "A method for generating prime numbers.",
            "A type of block cipher.",
            "An attack against the Fiat-Shamir signature scheme."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'threshold cryptography' scheme?",
        "answers": [
            "A scheme where a secret key is divided among multiple parties, and a certain threshold of parties is required to cooperate to perform a cryptographic operation (like signing or decrypting).",
            "A scheme where the key must be above a certain threshold of strength.",
            "A type of cryptography that is on the threshold of being broken.",
            "A scheme that uses a threshold to determine when to change keys."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'indistinguishability under chosen-plaintext attack' (IND-CPA) security notion?",
        "answers": [
            "A security property for a cryptosystem where an attacker, given the encryption of one of two messages they chose, cannot identify which message was encrypted with probability significantly better than random guessing.",
            "A property where all ciphertexts are indistinguishable from each other.",
            "A security notion that is easy to achieve.",
            "A property that only applies to deterministic encryption schemes."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'KDF' (Key Derivation Function)?",
        "answers": [
            "A function that takes a source of initial keying material and derives one or more cryptographically secure secret keys from it.",
            "A function that finds keys.",
            "A function that deletes keys.",
            "A type of public key."
        ],
        "correct": 0
    },
    {
        "question": "Why is it important to use a cryptographically secure random number generator (CSPRNG) for generating keys?",
        "answers": [
            "Because if the key generation is predictable, an attacker can guess the key, rendering the entire cryptosystem insecure.",
            "To ensure the keys are all different.",
            "To make the key generation process faster.",
            "It is not important; any random number generator will do."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'Digital Signature Algorithm' (DSA)?",
        "answers": [
            "A U.S. Federal Government standard for digital signatures based on the discrete logarithm problem.",
            "An algorithm for creating any type of digital signature.",
            "An alternative to RSA for encryption.",
            "An outdated signature scheme."
        ],
        "correct": 0
    },
    {
        "question": "What is 'identity-based encryption' (IBE)?",
        "answers": [
            "A type of public-key encryption where a user's public key can be an arbitrary string, such as their email address, eliminating the need for a public key certificate.",
            "Encryption that is based on the user's identity.",
            "A system where the key is the user's name.",
            "A less secure form of public-key encryption."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'block cipher's block size'?",
        "answers": [
            "The fixed number of bits that the cipher processes at a time.",
            "The size of the key.",
            "The number of blocks in a message.",
            "A measure of the cipher's security."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'provably secure' cryptosystem?",
        "answers": [
            "A cryptosystem whose security can be mathematically proven to be equivalent to the difficulty of a well-known hard problem.",
            "A cryptosystem that has been proven to be unbreakable.",
            "A system that has been tested by a security professional.",
            "A theoretical concept with no practical examples."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'salt' in the context of password hashing?",
        "answers": [
            "A random value that is combined with a password before hashing to ensure that identical passwords do not result in the same hash.",
            "A special character that must be included in a password.",
            "A secret value stored on the server.",
            "A method for making passwords taste better."
        ],
        "correct": 0
    },
    {
        "question": "What is the purpose of 'salting' a password?",
        "answers": [
            "To defeat pre-computed table attacks, such as rainbow table attacks.",
            "To make the password longer.",
            "To encrypt the password.",
            "To make the hash computation faster."
        ],
        "correct": 0
    },
    {
        "question": "In the context of TLS, what is the 'pre-master secret'?",
        "answers": [
            "A random value generated by the client, encrypted with the server's public key, and used by both parties to derive the master secret.",
            "The master secret before it is finalized.",
            "A secret shared between the client and the CA.",
            "The server's private key."
        ],
        "correct": 0
    },
    {
        "question": "What is 'key escrow'?",
        "answers": [
            "A system where the keys needed to decrypt encrypted data are held in escrow by a trusted third party, so that they can be accessed under certain circumstances.",
            "A secure container for storing keys.",
            "A method for generating keys.",
            "A type of attack against key management systems."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'hash-based message authentication code' (HMAC)?",
        "answers": [
            "A specific type of MAC involving a cryptographic hash function and a secret cryptographic key.",
            "A hash function that is also a MAC.",
            "A MAC that is based on a block cipher.",
            "A less secure version of a standard MAC."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'ciphertext-only' attack model?",
        "answers": [
            "A model where the attacker is assumed to only have access to a set of ciphertexts.",
            "An attack that only works on ciphertexts.",
            "The weakest form of attack.",
            "Both A and C."
        ],
        "correct": 3
    },
    {
        "question": "What is the purpose of a 'key-agreement protocol'?",
        "answers": [
            "To allow two or more parties to establish a shared secret key over an insecure channel.",
            "To agree on which key to use.",
            "A protocol for signing keys.",
            "A protocol for managing a key database."
        ],
        "correct": 0
    },
    {
        "question": "What is 'anonymity' in the context of security services?",
        "answers": [
            "A service that conceals the identity of a user or the relationship between communicating parties.",
            "A service that makes all users anonymous.",
            "A feature of a cryptosystem that makes it hard to analyze.",
            "A type of attack."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'pseudonym'?",
        "answers": [
            "An identifier for a user other than their real name, used to provide a degree of anonymity.",
            "A fake name.",
            "A type of cryptographic key.",
            "A character in a cryptographic protocol."
        ],
        "correct": 0
    },
    {
        "question": "What is 'traffic analysis'?",
        "answers": [
            "The process of intercepting and examining messages in order to deduce information from patterns in communication, even if the messages are encrypted.",
            "The analysis of road traffic.",
            "A method for breaking encryption.",
            "A type of side-channel attack."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'covert channel'?",
        "answers": [
            "A communication channel that allows a process to transfer information in a way that violates the system's security policy.",
            "A secret communication channel.",
            "A channel that is used for covert operations.",
            "A type of encrypted channel."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'principle of open design' in cryptography?",
        "answers": [
            "The principle that the security of a cryptosystem should not depend on the secrecy of its design or implementation (related to Kerckhoffs's principle).",
            "The principle that all cryptographic designs should be open source.",
            "A principle that encourages collaboration in design.",
            "A principle that is no longer relevant."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'one-time signature' scheme?",
        "answers": [
            "A digital signature scheme where a key pair can only be used to sign a single message.",
            "A signature that is only valid for one-time use.",
            "A less secure form of digital signature.",
            "A signature that does not require a key."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'group signature' scheme?",
        "answers": [
            "A scheme that allows a member of a group to anonymously sign a message on behalf of the group.",
            "A signature that is signed by a group of people.",
            "A scheme where the key is shared among a group.",
            "A type of threshold signature."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'ring signature' scheme?",
        "answers": [
            "A type of digital signature where a message is signed by a member of a group of users, but the verifier cannot determine which member actually produced the signature.",
            "A signature that is in the shape of a ring.",
            "A signature that is passed around a ring of users.",
            "A less common type of group signature."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'blind signature' scheme?",
        "answers": [
            "A scheme where a message is signed by an authority without them knowing the content of the message, often used in privacy-preserving applications like digital cash.",
            "A signature that is created by a blind person.",
            "A signature that is hard to see.",
            "An insecure type of signature."
        ],
        "correct": 0
    },
    {
        "question": "What is 'attribute-based encryption' (ABE)?",
        "answers": [
            "A type of public-key encryption in which the secret key of a user and the ciphertext are dependent upon attributes (e.g. the country they live in, or the kind of subscription they have).",
            "Encryption that is based on the attributes of the data.",
            "A system where keys are replaced by attributes.",
            "A more complex form of identity-based encryption."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'broadcast encryption' scheme?",
        "answers": [
            "A scheme that allows a sender to securely broadcast a message to a select group of users out of a larger population, such that only the intended users can decrypt it.",
            "A scheme for encrypting broadcast television signals.",
            "A system where the key is broadcast to everyone.",
            "An insecure method of communication."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'searchable encryption' scheme?",
        "answers": [
            "A scheme that allows a user to search over encrypted data without revealing the search query or the data to the server holding the data.",
            "A scheme for encrypting search engine queries.",
            "A system that makes encrypted data easy to find.",
            "A theoretical concept that is not yet practical."
        ],
        "correct": 0
    },
    {
        "question": "What is 'plausible deniability' in cryptography?",
        "answers": [
            "A property of a system that allows a user to plausibly deny having sent a message or performed an action, even if they did.",
            "The ability to deny that a system is secure.",
            "A weakness in a non-repudiation system.",
            "A feature of steganography."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'keyed permutation'?",
        "answers": [
            "A permutation of a set of elements that is determined by a secret key. A block cipher is an example of a keyed permutation.",
            "A permutation that has a key.",
            "A mathematical function.",
            "A type of hash function."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'sponge construction' for a hash function?",
        "answers": [
            "A method for building a hash function from a fixed-length permutation, used in the SHA-3 standard. It 'absorbs' the input data and then 'squeezes' out the hash output.",
            "A construction that uses a sponge to absorb data.",
            "A less secure alternative to the Merkle-Damgård construction.",
            "A type of stream cipher."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'collision attack' on a hash function?",
        "answers": [
            "An attack where the goal is to find two different inputs that produce the same hash output.",
            "An attack that causes a hash function to collide with another program.",
            "An attack that targets the collision resistance property.",
            "Both A and C."
        ],
        "correct": 3
    },
    {
        "question": "What is a 'preimage attack' on a hash function?",
        "answers": [
            "An attack where, given a hash output, the goal is to find an input that produces that hash.",
            "An attack that targets the image before it is hashed.",
            "An attack that is easier than a collision attack.",
            "An attack against image hashing algorithms."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'second preimage attack' on a hash function?",
        "answers": [
            "An attack where, given an input and its hash, the goal is to find a different input that produces the same hash.",
            "An attack that finds the second preimage of a hash.",
            "A more difficult version of a preimage attack.",
            "An attack that requires two hashes."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'time-lock puzzle' in cryptography?",
        "answers": [
            "A type of cryptographic puzzle that requires a specific amount of time to solve, even with parallel computation, used to ensure a piece of data cannot be accessed before a certain time.",
            "A puzzle that is locked by a timer.",
            "A game played by cryptographers.",
            "A method for securing time-sensitive data."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'random oracle model' in cryptographic proofs?",
        "answers": [
            "An idealized model where a cryptographic hash function is assumed to behave like a truly random function. Proofs in this model are heuristic but can provide evidence of a scheme's security.",
            "A model where a random oracle provides answers to cryptographic problems.",
            "A model that is not used in practice.",
            "A model for generating random numbers."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'distinguishing attack' against a cipher?",
        "answers": [
            "An attack where the goal is to distinguish the output of the cipher from a truly random sequence of bits.",
            "An attack that distinguishes between different keys.",
            "An attack that can only be performed by a distinguished cryptographer.",
            "A very powerful type of attack."
        ],
        "correct": 0
    },
    {
        "question": "What is 'security parameter' in a cryptosystem?",
        "answers": [
            "A value that determines the security level of the system, such as the key length or the size of the modulus.",
            "A parameter that must be kept secret.",
            "A measure of how secure the system is.",
            "A parameter that is used to test the security of the system."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'hard-core predicate' of a one-way function?",
        "answers": [
            "A function that, given the output of a one-way function, is hard to compute, but easy to compute if the input is also known. It's used to build pseudorandom generators.",
            "A very difficult mathematical statement.",
            "A predicate that is hard to prove.",
            "A property of a secure hash function."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'pseudorandom function' (PRF)?",
        "answers": [
            "A function that takes a key and an input, and produces an output that is indistinguishable from a truly random function.",
            "A function that is almost random.",
            "A type of hash function.",
            "A function used in pseudocode."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'pseudorandom permutation' (PRP)?",
        "answers": [
            "A pseudorandom function that is also a permutation (i.e., it is invertible). A block cipher is modeled as a PRP.",
            "A permutation that is almost random.",
            "A type of transposition cipher.",
            "A permutation of a set of keys."
        ],
        "correct": 0
    },
    {
        "question": "What is the 'Luby-Rackoff' construction?",
        "answers": [
            "A construction that shows how to build a pseudorandom permutation (like a block cipher) from a pseudorandom function, forming the basis for Feistel ciphers.",
            "A construction for a hash function.",
            "A type of digital signature.",
            "A method for key exchange."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'message-locked encryption' (MLE) scheme?",
        "answers": [
            "An encryption scheme where the key is derived from the message itself, used for data deduplication. It is not secure for confidential data.",
            "An encryption scheme where the message is locked.",
            "A type of symmetric encryption.",
            "A highly secure form of encryption."
        ],
        "correct": 0
    },
    {
        "question": "What is 'format-preserving encryption' (FPE)?",
        "answers": [
            "A type of encryption where the ciphertext has the same format as the plaintext, for example, encrypting a credit card number results in a sequence of digits of the same length.",
            "Encryption that preserves the file format.",
            "A less secure form of encryption.",
            "Encryption that is used for formatting documents."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'tweakable block cipher'?",
        "answers": [
            "A type of block cipher that takes an additional public input called a 'tweak' along with the key and plaintext, allowing for variation in the encryption without changing the key.",
            "A block cipher that can be easily modified.",
            "A cipher that has a small weakness or 'tweak'.",
            "A more efficient type of block cipher."
        ],
        "correct": 0
    },
    {
        "question": "What is 'all-or-nothing transform' (AONT)?",
        "answers": [
            "A transformation that is not encryption itself, but is applied before encryption, such that you must have all of the transformed data to reverse the process. It makes brute-force attacks more difficult.",
            "A transform that either works or it doesn't.",
            "A type of hash function.",
            "A method for data compression."
        ],
        "correct": 0
    },
    {
        "question": "What is 'secret sharing'?",
        "answers": [
            "A method for distributing a secret amongst a group of participants, each of whom is allocated a share of the secret. The secret can be reconstructed only when a sufficient number of shares are combined.",
            "Sharing secrets with friends.",
            "A type of group chat.",
            "A method for encrypting secrets."
        ],
        "correct": 0
    },
    {
        "question": "What is 'Shamir's Secret Sharing' scheme?",
        "answers": [
            "A specific secret sharing scheme based on polynomial interpolation, where a secret is encoded as a point on a polynomial, and shares are other points on the same polynomial.",
            "A scheme invented by Adi Shamir for sharing RSA keys.",
            "A less secure form of secret sharing.",
            "A scheme that is easy to break."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'visual cryptography' scheme?",
        "answers": [
            "A cryptographic technique which allows visual information (pictures, text, etc.) to be encrypted in such a way that decryption can be performed by the human visual system, without the aid of computers.",
            "A scheme for encrypting images.",
            "A type of steganography.",
            "A scheme that is based on optical illusions."
        ],
        "correct": 0
    },
    {
        "question": "What is 'deniable encryption'?",
        "answers": [
            "A form of encryption that allows the sender of an encrypted message to deny sending it, by providing a different 'fake' key that decrypts the ciphertext into a different, plausible plaintext.",
            "Encryption that can be denied.",
            "An insecure form of encryption.",
            "A type of encryption used by spies."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'kleptographic attack'?",
        "answers": [
            "A type of attack where a cryptosystem is designed to secretly leak key information through its public outputs, such as public keys or digital signatures.",
            "An attack performed by a kleptomaniac.",
            "An attack that steals the entire cryptosystem.",
            "A type of side-channel attack."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'watermarking' scheme in the context of digital security?",
        "answers": [
            "A scheme for embedding a hidden marker in a digital signal or document to identify its ownership or authenticity.",
            "A scheme for adding a visible watermark to an image.",
            "A type of steganography.",
            "A method for detecting forgeries."
        ],
        "correct": 0
    },
    {
        "question": "What is a 'fingerprinting' scheme in digital security?",
        "answers": [
            "A scheme where unique marks are embedded in each distributed copy of a work, so that if a copy is leaked, the source of the leak can be identified.",
            "A scheme that uses a user's fingerprint for authentication.",
            "A method for identifying files based on their hash.",
            "A type of digital signature."
        ],
        "correct": 0
    }
];


// Function to get a random question
function getRandomQuestion() {
    return sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
}

// Function to get multiple random questions without repetition
function getRandomQuestions(count) {
    const shuffled = [...sampleQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to shuffle answers for a question
function shuffleAnswers(question) {
    const shuffledQuestion = {
        ...question,
        answers: [...question.answers],
        correct: question.correct
    };
    
    // Fisher-Yates shuffle
    for (let i = shuffledQuestion.answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestion.answers[i], shuffledQuestion.answers[j]] = [shuffledQuestion.answers[j], shuffledQuestion.answers[i]];
        
        // Update correct answer index
        if (shuffledQuestion.correct === i) {
            shuffledQuestion.correct = j;
        } else if (shuffledQuestion.correct === j) {
            shuffledQuestion.correct = i;
        }
    }
    
    return shuffledQuestion;
}

// Make questions available globally
window.sampleQuestions = sampleQuestions;
