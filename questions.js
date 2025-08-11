// Question Bank for CYBR372 Mid Tri Practice Test
// Format: { question: "Question text", answers: ["Answer A", "Answer B", "Answer C", "Answer D"], correct: 0 }

const sampleQuestions = [
    // Cybersecurity Fundamentals
    {
        question: "What is the primary goal of cybersecurity?",
        answers: [
            "To prevent all cyber attacks",
            "To protect digital assets and ensure confidentiality, integrity, and availability",
            "To install antivirus software",
            "To monitor network traffic only"
        ],
        correct: 1
    },
    {
        question: "Which of the following is NOT a core principle of the CIA triad?",
        answers: [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Authentication"
        ],
        correct: 3
    },
    {
        question: "What does the term 'phishing' refer to in cybersecurity?",
        answers: [
            "A type of malware",
            "A network attack technique",
            "A social engineering attack to steal sensitive information",
            "A password cracking method"
        ],
        correct: 2
    },
    {
        question: "Which encryption algorithm is considered symmetric?",
        answers: [
            "RSA",
            "ECC",
            "AES",
            "Diffie-Hellman"
        ],
        correct: 2
    },
    {
        question: "What is a zero-day vulnerability?",
        answers: [
            "A vulnerability that has been known for exactly one day",
            "A vulnerability that is unknown to the vendor and for which no patch exists",
            "A vulnerability that only affects systems on day zero of deployment",
            "A vulnerability that has been patched but not yet deployed"
        ],
        correct: 1
    },
    
    // Network Security
    {
        question: "What is the purpose of a firewall?",
        answers: [
            "To encrypt data transmissions",
            "To monitor and control incoming and outgoing network traffic",
            "To detect malware infections",
            "To backup important data"
        ],
        correct: 1
    },
    {
        question: "Which protocol is commonly used for secure remote access?",
        answers: [
            "HTTP",
            "FTP",
            "SSH",
            "Telnet"
        ],
        correct: 2
    },
    {
        question: "What is a DDoS attack?",
        answers: [
            "A type of malware",
            "An attack that floods a system with traffic from multiple sources",
            "A social engineering technique",
            "A password guessing attack"
        ],
        correct: 1
    },
    {
        question: "What does VPN stand for?",
        answers: [
            "Virtual Private Network",
            "Very Protected Network",
            "Virus Protection Network",
            "Virtual Protocol Node"
        ],
        correct: 0
    },
    {
        question: "Which of the following is a common port used for HTTPS?",
        answers: [
            "21",
            "80",
            "443",
            "3389"
        ],
        correct: 2
    },
    
    // Cryptography
    {
        question: "What is the main difference between symmetric and asymmetric encryption?",
        answers: [
            "Symmetric is faster, asymmetric uses one key",
            "Symmetric uses one key, asymmetric uses two keys",
            "Asymmetric is only used for encryption, symmetric for decryption",
            "There is no difference"
        ],
        correct: 1
    },
    {
        question: "What is a digital signature used for?",
        answers: [
            "To encrypt messages",
            "To verify the authenticity and integrity of a message",
            "To hide the sender's identity",
            "To compress data"
        ],
        correct: 1
    },
    {
        question: "Which hashing algorithm is considered insecure due to collision vulnerabilities?",
        answers: [
            "SHA-256",
            "MD5",
            "bcrypt",
            "PBKDF2"
        ],
        correct: 1
    },
    {
        question: "What is public key infrastructure (PKI) used for?",
        answers: [
            "To manage digital certificates and public-key encryption",
            "To store passwords securely",
            "To monitor network traffic",
            "To create backup systems"
        ],
        correct: 0
    },
    {
        question: "What does the term 'salt' refer to in password hashing?",
        answers: [
            "A type of encryption algorithm",
            "Random data added to passwords before hashing to prevent rainbow table attacks",
            "A method of password cracking",
            "A backup system for passwords"
        ],
        correct: 1
    },
    
    // Risk Management
    {
        question: "What is the first step in the risk management process?",
        answers: [
            "Implement security controls",
            "Identify assets and threats",
            "Purchase insurance",
            "Train employees"
        ],
        correct: 1
    },
    {
        question: "What is the formula for calculating risk?",
        answers: [
            "Risk = Threat × Vulnerability",
            "Risk = Impact × Probability",
            "Risk = Assets × Threats",
            "Risk = Cost + Damage"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of a risk assessment?",
        answers: [
            "To eliminate all risks",
            "To identify, analyze, and evaluate risks",
            "To purchase security tools",
            "To fire employees"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a risk treatment strategy?",
        answers: [
            "Ignore",
            "Accept",
            "Delete",
            "Enhance"
        ],
        correct: 1
    },
    {
        question: "What is a business continuity plan (BCP)?",
        answers: [
            "A plan for increasing business profits",
            "A plan to ensure critical business functions continue during and after a disaster",
            "A plan for employee training",
            "A plan for marketing campaigns"
        ],
        correct: 1
    },
    
    // Incident Response
    {
        question: "What is the first phase of the incident response lifecycle?",
        answers: [
            "Containment",
            "Eradication",
            "Preparation",
            "Recovery"
        ],
        correct: 2
    },
    {
        question: "What should be the first action when a security incident is detected?",
        answers: [
            "Delete all affected files",
            "Notify law enforcement",
            "Follow the incident response plan",
            "Shut down all systems"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of incident documentation?",
        answers: [
            "To assign blame",
            "To record what happened, how it was handled, and lessons learned",
            "To create publicity",
            "To increase budget"
        ],
        correct: 1
    },
    {
        question: "Which of the following is NOT a typical category of security incident?",
        answers: [
            "Unauthorized access",
            "Denial of service",
            "Malicious code",
            "System upgrade"
        ],
        correct: 3
    },
    {
        question: "What is the final phase of incident response?",
        answers: [
            "Detection",
            "Containment",
            "Recovery",
            "Lessons learned"
        ],
        correct: 3
    },
    
    // Compliance and Governance
    {
        question: "What does GDPR stand for?",
        answers: [
            "General Data Protection Regulation",
            "Global Digital Privacy Rights",
            "Government Data Processing Rules",
            "General Data Privacy Requirements"
        ],
        correct: 0
    },
    {
        question: "Which regulation focuses on healthcare data protection in the US?",
        answers: [
            "GDPR",
            "HIPAA",
            "PCI DSS",
            "SOX"
        ],
        correct: 1
    },
    {
        question: "What is the purpose of an Information Security Management System (ISMS)?",
        answers: [
            "To manage and protect information assets systematically",
            "To monitor employee internet usage",
            "To create marketing materials",
            "To manage financial records"
        ],
        correct: 0
    },
    {
        question: "Which standard provides a framework for information security management?",
        answers: [
            "ISO 27001",
            "ISO 9001",
            "ISO 14001",
            "ISO 20000"
        ],
        correct: 0
    },
    {
        question: "What is the main purpose of PCI DSS?",
        answers: [
            "To protect credit card data",
            "To regulate healthcare information",
            "To manage financial reporting",
            "To protect personal data"
        ],
        correct: 0
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