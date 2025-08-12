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
