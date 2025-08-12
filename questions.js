// Question Bank for CYBR372 Mid Tri Practice Test
// Format: { question: "Question text", answers: ["Answer A", "Answer B", "Answer C", "Answer D"], correct: 0 }

const sampleQuestions = [
    {
        "question": "Which security service ensures that data has not been altered by unauthorized parties?",
        "answers": [
            "Confidentiality",
            "Data Integrity",
            "Entity Authentication",
            "Non-repudiation"
        ],
        "correct": 1
    },
    {
        "question": "What is the primary difference between Data Origin Authentication (DOA) and Entity Authentication (EA)?",
        "answers": [
            "DOA verifies the message creator, while EA verifies the current user's identity.",
            "EA is for emails, while DOA is for real-time communication.",
            "DOA ensures data is fresh, while EA does not.",
            "They are two terms for the same security service."
        ],
        "correct": 0
    },
    {
        "question": "Which of the following best describes a cryptographic primitive?",
        "answers": [
            "A high-level security system like TLS or SSH.",
            "A physical device used for encryption.",
            "A basic building block like a block cipher or hash function.",
            "A set of rules for communication between two parties."
        ],
        "correct": 2
    },
    {
        "question": "Non-repudiation is a stronger guarantee than Data Origin Authentication because it:",
        "answers": [
            "Also guarantees the confidentiality of the data.",
            "Is much faster to compute and verify.",
            "Prevents the sender from denying their action to a third party.",
            "Works without the need for any secret keys."
        ],
        "correct": 2
    },
    {
        "question": "What is the role of 'Eve' in the classic Alice and Bob cryptographic scenario?",
        "answers": [
            "The intended recipient of the message.",
            "The sender of the message.",
            "The adversary or eavesdropper.",
            "The trusted third party verifying the communication."
        ],
        "correct": 2
    },
    {
        "question": "How can Entity Authentication be achieved using other services?",
        "answers": [
            "By only ensuring confidentiality.",
            "By combining Data Origin Authentication with a freshness check.",
            "It can only be achieved with biometric identifiers.",
            "Through the use of data integrity checks alone."
        ],
        "correct": 1
    },
    {
        "question": "A passive attack on a communication channel involves:",
        "answers": [
            "Altering the content of messages.",
            "Deleting messages before they are delivered.",
            "Only eavesdropping or listening to the communication.",
            "Preventing messages from being sent."
        ],
        "correct": 2
    },
    {
        "question": "Which statement accurately describes the relationship between security services?",
        "answers": [
            "Confidentiality automatically provides data integrity.",
            "Data integrity is a stronger notion than data origin authentication.",
            "Non-repudiation requires data origin authentication.",
            "Entity authentication is a weaker form of confidentiality."
        ],
        "correct": 2
    },
    {
        "question": "What is a cryptographic protocol?",
        "answers": [
            "A single, low-level mathematical function.",
            "The physical implementation of a security system.",
            "A sequence of message exchanges and operations to achieve a security goal.",
            "An algorithm that is kept secret from the public."
        ],
        "correct": 2
    },
    {
        "question": "Why is cryptography considered only one part of a holistic security approach?",
        "answers": [
            "Because it cannot protect against active attacks.",
            "Other aspects like physical security and user behavior are also critical.",
            "It is too slow for modern applications.",
            "It has been proven to be ineffective."
        ],
        "correct": 1
    },
    {
        "question": "According to Kerckhoff's principle, where should the security of a cryptosystem reside?",
        "answers": [
            "In the secrecy of the encryption algorithm.",
            "In the secrecy of the decryption key.",
            "In hiding the fact that communication is happening.",
            "In the complexity of the plaintext."
        ],
        "correct": 1
    },
    {
        "question": "What is the primary vulnerability of a simple substitution cipher?",
        "answers": [
            "It has a very small keyspace.",
            "It is susceptible to frequency analysis.",
            "It can only encrypt alphabetic characters.",
            "The decryption process is extremely slow."
        ],
        "correct": 1
    },
    {
        "question": "In a chosen-plaintext attack (CPA), what can the adversary do?",
        "answers": [
            "Only observe encrypted messages on a network.",
            "Access a list of historical plaintext-ciphertext pairs.",
            "Choose plaintexts and obtain their corresponding ciphertexts.",
            "Choose ciphertexts and obtain their corresponding plaintexts."
        ],
        "correct": 2
    },
    {
        "question": "How does a Vigenère cipher attempt to improve upon the Caesar cipher?",
        "answers": [
            "By using a different substitution for each letter.",
            "By using a keyword to create multiple Caesar shifts.",
            "By transposing the letters of the plaintext.",
            "By having a much smaller and simpler keyspace."
        ],
        "correct": 1
    },
    {
        "question": "What is a side-channel attack?",
        "answers": [
            "An attack that guesses the key by trying all possibilities.",
            "An attack based on analyzing statistical properties of the language.",
            "An attack that exploits the physical implementation of a cryptosystem.",
            "An attack that tries to find a collision in a hash function."
        ],
        "correct": 2
    },
    {
        "question": "What is the defining characteristic of a symmetric cryptosystem?",
        "answers": [
            "The encryption key is public, but the decryption key is private.",
            "The encryption and decryption keys are essentially the same.",
            "It is impossible to determine the decryption key from the encryption key.",
            "It requires two different keys for encryption and decryption."
        ],
        "correct": 1
    },
    {
        "question": "What do the principles of 'confusion' and 'diffusion' aim to achieve?",
        "answers": [
            "Increase the speed of the encryption algorithm.",
            "Reduce the size of the ciphertext.",
            "Obscure the statistical relationship between the plaintext, key, and ciphertext.",
            "Ensure the key is always longer than the plaintext."
        ],
        "correct": 2
    },
    {
        "question": "Why is having a large keyspace not sufficient for a cryptosystem to be secure?",
        "answers": [
            "A large keyspace makes brute-force attacks easier.",
            "It doesn't protect against attacks like frequency analysis.",
            "The key generation process becomes too slow.",
            "It limits the number of messages that can be encrypted."
        ],
        "correct": 1
    },
    {
        "question": "What is the difference between a substitution cipher and a transposition cipher?",
        "answers": [
            "Substitution ciphers are modern, while transposition ciphers are historical.",
            "Substitution changes letters, while transposition reorders them.",
            "Substitution uses a key, while transposition does not.",
            "Substitution is secure, while transposition is not."
        ],
        "correct": 1
    },
    {
        "question": "What is a chosen-ciphertext attack (CCA)?",
        "answers": [
            "The attacker knows the encryption algorithm and some ciphertext.",
            "The attacker can obtain the ciphertext for any plaintext they choose.",
            "The attacker knows some plaintext/ciphertext pairs.",
            "The attacker can obtain plaintexts for chosen ciphertexts."
        ],
        "correct": 3
    },
    {
        "question": "What is the main drawback of the One-Time Pad (OTP) that makes it impractical for most applications?",
        "answers": [
            "The encryption process is very slow.",
            "The key must be as long as the message and used only once.",
            "It is vulnerable to brute-force attacks.",
            "The ciphertext is larger than the plaintext."
        ],
        "correct": 1
    },
    {
        "question": "A cryptosystem with 'perfect secrecy' means that:",
        "answers": [
            "The ciphertext gives no extra information about the plaintext.",
            "It is computationally difficult to break.",
            "The key is shorter than the message.",
            "It can be broken by a powerful enough computer."
        ],
        "correct": 0
    },
    {
        "question": "What is the difference between practical security and perfect secrecy?",
        "answers": [
            "Practical security is theoretical, while perfect secrecy is used in real systems.",
            "Practical security relies on computational difficulty, while perfect secrecy is unconditional.",
            "Practical security requires a one-time pad.",
            "Perfect secrecy is vulnerable to brute-force attacks."
        ],
        "correct": 1
    },
    {
        "question": "In terms of computational complexity, what makes an attack 'impractical'?",
        "answers": [
            "It has polynomial-time complexity.",
            "It has exponential-time complexity.",
            "It can be solved in a few minutes on a standard PC.",
            "It requires a large amount of memory."
        ],
        "correct": 1
    },
    {
        "question": "What operation is at the core of the Vernam cipher (One-Time Pad)?",
        "answers": [
            "Modular multiplication.",
            "XOR (exclusive OR).",
            "Substitution using an S-box.",
            "Permutation of bits."
        ],
        "correct": 1
    },
    {
        "question": "For a cryptosystem to achieve perfect secrecy, the keyspace must be:",
        "answers": [
            "Smaller than the message space.",
            "At least as large as the message space.",
            "A fixed size, such as 128 bits.",
            "Publicly known to everyone."
        ],
        "correct": 1
    },
    {
        "question": "What does 'semantic security' formally define?",
        "answers": [
            "An encryption scheme where the key is never reused.",
            "The idea that an attacker can't learn partial information from a ciphertext.",
            "A system that is secure against all possible attacks.",
            "An encryption that is fast enough for practical use."
        ],
        "correct": 1
    },
    {
        "question": "Why are practical encryption schemes like AES theoretically insecure?",
        "answers": [
            "Because they do not use the XOR operation.",
            "Because they can be broken by frequency analysis.",
            "Because they reuse a short key for a long message.",
            "Because their algorithms are publicly known."
        ],
        "correct": 2
    },
    {
        "question": "What is a key difference between a stream cipher and a block cipher?",
        "answers": [
            "Stream ciphers are only for asymmetric encryption.",
            "Stream ciphers process data bit-by-bit, block ciphers work on fixed-size chunks.",
            "Block ciphers are always faster than stream ciphers.",
            "Block ciphers do not require a secret key."
        ],
        "correct": 1
    },
    {
        "question": "What is the 'cover time' in the context of practical security?",
        "answers": [
            "The time it takes to encrypt a message.",
            "The length of time a plaintext must be kept secret.",
            "The time required to perform a brute-force attack.",
            "The time it takes to generate a new key."
        ],
        "correct": 1
    },
    {
        "question": "What was the main reason for replacing the Data Encryption Standard (DES)?",
        "answers": [
            "The algorithm was found to be flawed.",
            "Its 64-bit block size was too large.",
            "Its 56-bit key length was too short and vulnerable to brute-force attacks.",
            "It was too slow for modern hardware."
        ],
        "correct": 2
    },
    {
        "question": "AES (Rijndael) performs its computations on what units of data?",
        "answers": [
            "Individual bits.",
            "64-bit blocks.",
            "Bytes.",
            "ASCII characters."
        ],
        "correct": 2
    },
    {
        "question": "What is the block size of AES?",
        "answers": [
            "64 bits.",
            "Variable (128, 192, or 256 bits).",
            "128 bits.",
            "56 bits."
        ],
        "correct": 2
    },
    {
        "question": "The design of AES is based on which principle?",
        "answers": [
            "A Feistel network.",
            "A substitution-permutation network.",
            "A one-time pad.",
            "A stream cipher."
        ],
        "correct": 1
    },
    {
        "question": "What is the purpose of the 'AddRoundKey' step in AES?",
        "answers": [
            "To substitute bytes using an S-box.",
            "To shift the rows of the state matrix.",
            "To mix the columns of the state matrix.",
            "To XOR the current state with a part of the expanded key."
        ],
        "correct": 3
    },
    {
        "question": "Who were the designers of the Rijndael algorithm, which became AES?",
        "answers": [
            "Rivest, Shamir, and Adleman.",
            "Niels Ferguson and Bruce Schneier.",
            "Joan Daemen and Vincent Rijmen.",
            "The U.S. National Institute of Standards and Technology (NIST)."
        ],
        "correct": 2
    },
    {
        "question": "What is one of the primary advantages of a block cipher like AES?",
        "answers": [
            "It never requires padding.",
            "It has no error propagation.",
            "Its versatility for use in different modes and applications.",
            "It does not require a secret key."
        ],
        "correct": 2
    },
    {
        "question": "What is a significant disadvantage of block ciphers that necessitates padding?",
        "answers": [
            "They are very slow.",
            "They operate on fixed-size blocks, but plaintexts have variable lengths.",
            "They cannot be implemented in hardware.",
            "The key size is too small."
        ],
        "correct": 1
    },
    {
        "question": "How does 3DES (Triple DES) improve upon DES?",
        "answers": [
            "It uses a larger block size.",
            "It applies the DES algorithm three times with different keys.",
            "It is a completely new algorithm.",
            "It simplifies the DES algorithm to make it faster."
        ],
        "correct": 1
    },
    {
        "question": "What is the purpose of the key expansion process in AES?",
        "answers": [
            "To generate a series of round keys from the original key.",
            "To make the original key longer and more secure.",
            "To convert the key into a format suitable for S-box substitution.",
            "To shorten the key for faster processing."
        ],
        "correct": 0
    },
    {
        "question": "What is the primary reason to avoid using ECB (Electronic Codebook) mode for encryption?",
        "answers": [
            "It is extremely slow.",
            "It requires a very long initialization vector (IV).",
            "Identical plaintext blocks produce identical ciphertext blocks, revealing patterns.",
            "Error propagation is catastrophic."
        ],
        "correct": 2
    },
    {
        "question": "In CBC (Cipher Block Chaining) mode, how is each plaintext block processed before encryption?",
        "answers": [
            "It is encrypted with the key directly.",
            "It is XORed with the previous plaintext block.",
            "It is XORed with the previous ciphertext block.",
            "It is combined with the initialization vector (IV) only."
        ],
        "correct": 2
    },
    {
        "question": "What is a key advantage of CTR (Counter) mode?",
        "answers": [
            "It does not require a secret key.",
            "It allows for parallel computation during encryption.",
            "It has significant error propagation.",
            "It is the most secure mode against all attacks."
        ],
        "correct": 1
    },
    {
        "question": "If a single bit error occurs in a ciphertext block in CBC mode, how does it affect the decrypted plaintext?",
        "answers": [
            "Only the corresponding plaintext block is affected.",
            "The entire message becomes undecryptable.",
            "The corresponding plaintext block is garbled, and the next block has a single bit error.",
            "There is no effect on the decrypted plaintext."
        ],
        "correct": 2
    },
    {
        "question": "Which block cipher mode of operation effectively turns a block cipher into a stream cipher?",
        "answers": [
            "ECB mode.",
            "CBC mode.",
            "CFB, OFB, and CTR modes.",
            "No mode can do this."
        ],
        "correct": 2
    },
    {
        "question": "What is the purpose of the Initialization Vector (IV) in modes like CBC?",
        "answers": [
            "To act as the secret key.",
            "To ensure that identical plaintexts encrypt to different ciphertexts.",
            "To specify the block size for the cipher.",
            "To pad the message to the correct length."
        ],
        "correct": 1
    },
    {
        "question": "Which mode of operation provides both confidentiality and data origin authentication?",
        "answers": [
            "CBC mode.",
            "CTR mode.",
            "GCM mode.",
            "ECB mode."
        ],
        "correct": 2
    },
    {
        "question": "Can the decryption process in CBC mode be parallelized?",
        "answers": [
            "Yes, because each block can be decrypted independently.",
            "No, because decryption of a block depends on the previous ciphertext block.",
            "Yes, unlike the encryption process which cannot be.",
            "Only if the IV is known in advance."
        ],
        "correct": 1
    },
    {
        "question": "In CFB (Cipher Feedback) mode, is the block cipher's decryption function used during the decryption process?",
        "answers": [
            "Yes, it is the primary operation.",
            "No, the encryption function is used for both encryption and decryption.",
            "Only for the very first block of the message.",
            "It depends on the key size being used."
        ],
        "correct": 1
    },
    {
        "question": "What is a 'nonce' as used in CTR mode?",
        "answers": [
            "A secret value shared between the sender and receiver.",
            "A 'number used once' that should be random for each message.",
            "Another name for the secret key.",
            "The counter value that is incremented for each block."
        ],
        "correct": 1
    },
    {
        "question": "In modular arithmetic, what is the result of `15 mod 7`?",
        "answers": [
            "2",
            "1",
            "3",
            "7"
        ],
        "correct": 1
    },
    {
        "question": "What does it mean for two numbers to be 'relatively prime'?",
        "answers": [
            "They are both prime numbers.",
            "Their greatest common divisor (GCD) is 1.",
            "They have no common factors at all.",
            "One number is a prime factor of the other."
        ],
        "correct": 1
    },
    {
        "question": "According to Fermat's Little Theorem, if p is a prime, then for any integer x not divisible by p, what is true?",
        "answers": [
            "x^p ≡ x (mod p)",
            "x^(p-1) ≡ 1 (mod p)",
            "x^p ≡ 1 (mod p)",
            "x^(p-1) ≡ x (mod p)"
        ],
        "correct": 1
    },
    {
        "question": "What is the modular multiplicative inverse of 3 modulo 8?",
        "answers": [
            "1",
            "2",
            "3",
            "An inverse does not exist."
        ],
        "correct": 2
    },
    {
        "question": "An element 'x' in Zn has a modular inverse if and only if:",
        "answers": [
            "x is a prime number.",
            "n is a prime number.",
            "gcd(x, n) = 1.",
            "x is smaller than n."
        ],
        "correct": 2
    },
    {
        "question": "What is the primary motivation for using public-key cryptography over symmetric-key cryptography?",
        "answers": [
            "It is much faster than symmetric cryptography.",
            "It solves the problem of secure key distribution.",
            "It requires shorter keys for the same level of security.",
            "It is simpler to implement in software."
        ],
        "correct": 1
    },
    {
        "question": "What is the purpose of the Euclidean Algorithm in cryptography?",
        "answers": [
            "To generate large prime numbers.",
            "To encrypt messages.",
            "To efficiently find the greatest common divisor (GCD) of two numbers.",
            "To perform modular exponentiation."
        ],
        "correct": 2
    },
    {
        "question": "In number theory, what is a composite number?",
        "answers": [
            "A number that is not an integer.",
            "A number that has more than two positive divisors.",
            "A number that is the product of two prime numbers.",
            "Any number greater than 1."
        ],
        "correct": 1
    },
    {
        "question": "The congruence relation `a ≡ b (mod n)` means that:",
        "answers": [
            "a and b are equal.",
            "a and b have the same remainder when divided by n.",
            "n is a factor of both a and b.",
            "a plus b is equal to n."
        ],
        "correct": 1
    },
    {
        "question": "If n is a prime number, which elements in Zn have a multiplicative inverse?",
        "answers": [
            "Only the number 1.",
            "Only the prime numbers less than n.",
            "All elements except 0.",
            "Only the even numbers."
        ],
        "correct": 2
    },
    {
        "question": "In the RSA algorithm, how is the public modulus 'n' created?",
        "answers": [
            "By choosing a single large prime number.",
            "By multiplying two large prime numbers, p and q.",
            "By finding the least common multiple of p-1 and q-1.",
            "By choosing a random number of a specific bit length."
        ],
        "correct": 1
    },
    {
        "question": "The security of the RSA algorithm relies on the difficulty of what problem?",
        "answers": [
            "The discrete logarithm problem.",
            "Factoring the product of two large prime numbers.",
            "Solving modular linear equations.",
            "Finding the greatest common divisor."
        ],
        "correct": 1
    },
    {
        "question": "In RSA, what is the relationship between the public exponent 'e' and the private exponent 'd'?",
        "answers": [
            "They are the same number.",
            "e * d ≡ 1 (mod n).",
            "e * d ≡ 1 (mod lcm(p-1, q-1)).",
            "d is the modular inverse of e modulo p."
        ],
        "correct": 2
    },
    {
        "question": "What is a 'trapdoor one-way function'?",
        "answers": [
            "A function that is easy to compute but hard to invert.",
            "A function that is hard to compute and hard to invert.",
            "A function that is easy to invert if you have a secret piece of information.",
            "A function that works as a backdoor in a cryptosystem."
        ],
        "correct": 2
    },
    {
        "question": "Why is it dangerous to use 'textbook' RSA to encrypt small messages?",
        "answers": [
            "The encryption process fails for small numbers.",
            "The ciphertext may not be larger than the modulus, allowing for easy recovery.",
            "It takes longer to encrypt small messages than large ones.",
            "The decryption key can be easily guessed."
        ],
        "correct": 1
    },
    {
        "question": "What is the purpose of a padding scheme like RSA-OAEP?",
        "answers": [
            "To make the message longer so it encrypts faster.",
            "To add random structure to the plaintext before encryption to prevent attacks.",
            "To reduce the size of the encrypted message.",
            "To embed a digital signature within the message."
        ],
        "correct": 1
    },
    {
        "question": "If you know the public key (n, e), what crucial information would you need to find the private key 'd'?",
        "answers": [
            "The original plaintext message.",
            "The prime factors of n, which are p and q.",
            "Another valid public key.",
            "The ciphertext of a known message."
        ],
        "correct": 1
    },
    {
        "question": "Who were the three individuals who first published the RSA algorithm?",
        "answers": [
            "Diffie, Hellman, and Merkle.",
            "Daemen and Rijmen.",
            "Rivest, Shamir, and Adleman.",
            "Ferguson, Schneier, and Kohno."
        ],
        "correct": 2
    },
    {
        "question": "In RSA, the public key is used for _______, and the private key is used for _______.",
        "answers": [
            "decryption, encryption",
            "encryption, decryption",
            "signing, verification",
            "verification, signing"
        ],
        "correct": 1
    },
    {
        "question": "What does 'lcm(a, b)' stand for?",
        "answers": [
            "Lowest common multiplier.",
            "Least common multiple.",
            "Largest common multiple.",
            "Logarithmic common measure."
        ],
        "correct": 1
    },
    {
        "question": "Which of the three main properties of a cryptographic hash function is the strongest (i.e., implies one of the others)?",
        "answers": [
            "Preimage Resistance.",
            "Second Preimage Resistance.",
            "Collision Resistance.",
            "All three properties are independent."
        ],
        "correct": 2
    },
    {
        "question": "A 'birthday attack' is an attack on which property of a hash function?",
        "answers": [
            "Preimage Resistance.",
            "Second Preimage Resistance.",
            "Collision Resistance.",
            "Avalanche Effect."
        ],
        "correct": 2
    },
    {
        "question": "Why is the MD5 hash function no longer recommended for security applications?",
        "answers": [
            "It is too slow for modern hardware.",
            "Its hash output is too long.",
            "Practical collision attacks have been demonstrated against it.",
            "It was never made a public standard."
        ],
        "correct": 2
    },
    {
        "question": "What is the 'avalanche effect' in the context of hash functions?",
        "answers": [
            "A small change in the input produces a small, predictable change in the output.",
            "A small change in the input produces a large, unpredictable change in the output.",
            "The hash function gets progressively slower as the input size increases.",
            "The hash output can be reversed to find the input."
        ],
        "correct": 1
    },
    {
        "question": "Why would a system store user passwords as hashes instead of plain text?",
        "answers": [
            "To make password verification faster.",
            "To save storage space, as hashes are shorter.",
            "To protect passwords from being read if the database is compromised.",
            "To ensure passwords meet complexity requirements."
        ],
        "correct": 2
    },
    {
        "question": "What is the purpose of using a 'salt' when hashing passwords?",
        "answers": [
            "It makes the hashing process faster.",
            "It makes the resulting hash shorter.",
            "It ensures that identical passwords hash to different values.",
            "It is the secret key used in the hashing algorithm."
        ],
        "correct": 2
    },
    {
        "question": "What does the Pigeonhole Principle tell us about hash functions?",
        "answers": [
            "That collisions are impossible to find.",
            "That every input will map to a unique output.",
            "That collisions must exist because the input space is larger than the output space.",
            "That the hash output must be larger than the input."
        ],
        "correct": 2
    },
    {
        "question": "Which family of hash functions is currently recommended by NIST for most applications?",
        "answers": [
            "MD5",
            "SHA-1",
            "SHA-2",
            "CRC32"
        ],
        "correct": 2
    },
    {
        "question": "The birthday paradox implies that finding a collision in an L-bit hash function requires approximately how many attempts?",
        "answers": [
            "2^L",
            "2^(L-1)",
            "L^2",
            "2^(L/2)"
        ],
        "correct": 3
    },
    {
        "question": "Second preimage resistance protects against what scenario?",
        "answers": [
            "An attacker finding the original message from its hash.",
            "An attacker finding any two messages that hash to the same value.",
            "An attacker finding a different message that hashes to the same value as a given message.",
            "An attacker finding the secret key used for hashing."
        ],
        "correct": 2
    },
    {
        "question": "What are the two primary security services provided by a Message Authentication Code (MAC)?",
        "answers": [
            "Confidentiality and Non-repudiation.",
            "Data Integrity and Data Origin Authentication.",
            "Entity Authentication and Confidentiality.",
            "Data Integrity and Non-repudiation."
        ],
        "correct": 1
    },
    {
        "question": "What is the fundamental difference between a MAC and a cryptographic hash function?",
        "answers": [
            "A MAC uses a secret key, while a hash function does not.",
            "A MAC produces a variable-size output, while a hash produces a fixed-size output.",
            "A MAC is faster to compute than a hash.",
            "A MAC provides confidentiality, while a hash does not."
        ],
        "correct": 0
    },
    {
        "question": "In the HMAC construction, what is the role of the inner and outer pads (ipad and opad)?",
        "answers": [
            "To pad the message to a specific block size.",
            "To process the key before it is mixed with the message data in two distinct steps.",
            "To increase the final length of the MAC tag for better security.",
            "They are random nonces to prevent replay attacks."
        ],
        "correct": 1
    },
    {
        "question": "What type of cryptographic primitive is CMAC built from?",
        "answers": [
            "A stream cipher.",
            "A public-key encryption algorithm.",
            "A block cipher.",
            "A hash function."
        ],
        "correct": 2
    },
    {
        "question": "Why can't a simple hash of a message (without a key) provide data origin authentication?",
        "answers": [
            "Because hash functions are too slow.",
            "Because anyone can compute the hash of any message.",
            "Because hash functions are not deterministic.",
            "Because the hash output is too short."
        ],
        "correct": 1
    },
    {
        "question": "If Alice sends a message with a MAC to Bob, and an attacker Eve intercepts it, can Eve forge a new valid MAC for a different message?",
        "answers": [
            "Yes, because the MAC algorithm is public.",
            "Yes, if she knows the original message.",
            "No, not without knowing the secret key shared between Alice and Bob.",
            "No, because the MAC provides confidentiality."
        ],
        "correct": 2
    },
    {
        "question": "What does the 'C' in CMAC stand for?",
        "answers": [
            "Counter",
            "Cipher",
            "Collision",
            "Confidentiality"
        ],
        "correct": 1
    },
    {
        "question": "When verifying a MAC, the receiver computes a new MAC on the received message using the shared secret key and compares it to what?",
        "answers": [
            "A publicly known value.",
            "The MAC tag that was received with the message.",
            "The hash of the sender's public key.",
            "The original plaintext message."
        ],
        "correct": 1
    },
    {
        "question": "What does 'Unforgeability under Chosen-Message Attack' mean for a MAC function?",
        "answers": [
            "An attacker cannot create a valid MAC for any message.",
            "An attacker cannot find the secret key even with many message-MAC pairs.",
            "An attacker with access to a MAC oracle cannot forge a MAC for a new message.",
            "An attacker cannot compute the MAC as fast as the legitimate user."
        ],
        "correct": 2
    },
    {
        "question": "HMAC is a specific construction for turning what kind of primitive into a MAC?",
        "answers": [
            "A block cipher.",
            "A stream cipher.",
            "A public-key algorithm.",
            "A cryptographic hash function."
        ],
        "correct": 3
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
