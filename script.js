// CYBR372 Mid Tri Practice Test - Functional JavaScript Implementation

// =============================================
// GLOBAL APPLICATION STATE
// =============================================

const app = {
    // User state
    user: {
        name: '',
        rank: 'Unranked',
        accuracy: 0,
        totalQuestions: 0,
        correctAnswers: 0,
        isProfileComplete: false,
        questionHistory: [], // Array of {questionId, isCorrect, timestamp} for rolling calculation
        sessionQuestions: 0 // Track questions in current session
    },
    
    // Quiz state
    quiz: {
        currentQuestion: 0,
        questions: [],
        userAnswers: [],
        isComplete: false,
        isActive: false,
        settings: {
            shuffleAnswers: true,
            showFeedback: true
        },
        currentAnswerMap: [] // Maps shuffled indices to original indices
    },
    
    // UI state
    ui: {
        currentSection: 'profile',
        notifications: []
    },
    
    // Firebase configuration (ready for integration)
    firebase: {
// script.js
config: {
    apiKey: 'AIzaSyBtpTMa10YEOE_Q789s7dtUu6kThi31fBI',
    authDomain: 'cybr372-practice-test-ecfc5.firebaseapp.com',
    projectId: 'cybr372-practice-test-ecfc5',
    storageBucket: 'cybr372-practice-test-ecfc5.firebasestorage.app',
    messagingSenderId: '1090942184560',
    appId: '1:1090942184560:web:461ffdd986b3d1e95a98b5'
},
        db: null,
        isConfigured: false
    },
    
    // =============================================
    // UTILITY FUNCTIONS
    // =============================================
    
    generateUniqueId() {
        // Generate a cryptographically secure random ID
        const array = new Uint8Array(16);
        crypto.getRandomValues(array);
        
        // Convert to hex string and add timestamp for uniqueness
        const hex = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
        const timestamp = Date.now().toString(36);
        
        return `${timestamp}-${hex}`;
    },
    
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    },
    
    setCookie(name, value, days = 365) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Strict`;
    },
    
    getUserId() {
        // Try to get existing user ID from cookie
        let userId = this.getCookie('cybr372_user_id');
        
        if (!userId) {
            // Generate new ID if none exists
            userId = this.generateUniqueId();
            this.setCookie('cybr372_user_id', userId);
            console.log('Generated new user ID:', userId);
        } else {
            console.log('Using existing user ID:', userId);
        }
        
        return userId;
    },
    
    // =============================================
    // REAL-TIME STAT UPDATES
    // =============================================
    
    updateLiveStats() {
        const correctAnswers = this.quiz.userAnswers.filter(answer => answer.isCorrect).length;
        const totalAnswered = this.quiz.userAnswers.length;
        const sessionAccuracy = totalAnswered > 0 ? (correctAnswers / totalAnswered) * 100 : 0;
        
        // Update live accuracy display with session accuracy
        const liveAccuracy = document.getElementById('liveAccuracy');
        if (liveAccuracy) {
            const oldAccuracy = parseFloat(liveAccuracy.textContent) || 0;
            const newAccuracy = sessionAccuracy;
            
            // Show accuracy change animation
            this.showAccuracyChange(oldAccuracy, newAccuracy);
            
            // Update the display with animation
            liveAccuracy.style.transition = 'all 0.5s ease';
            liveAccuracy.textContent = `${newAccuracy.toFixed(1)}%`;
            
            // Add pulse animation for significant changes
            if (Math.abs(newAccuracy - oldAccuracy) > 10) {
                liveAccuracy.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    liveAccuracy.style.transform = 'scale(1)';
                }, 300);
            }
        }
        
        // Update user's overall stats
        this.user.accuracy = sessionAccuracy;
        this.user.correctAnswers = correctAnswers;
        this.user.totalQuestions = totalAnswered;
        
        // Update rank using qualified system
        this.updateUserRank();
        
        // Update ranking progress display
        this.updateRankingProgress();
        
        // Update live rank display
        this.updateLiveRankDisplay();
        
        // Update all other rank displays (header, profile)
        this.updateHeader();
        this.updateProfile();
        
        // Save user data
        this.saveUserData();
        
        // Update Firebase if configured
        if (this.firebase && this.firebase.isConfigured) {
            this.updateUserInFirebase();
        }
    },
    
    updateRankingProgress() {
        const rankingProgress = document.getElementById('rankingProgress');
        const rankingProgressText = document.getElementById('rankingProgressText');
        const rankingProgressFill = document.getElementById('rankingProgressFill');
        
        const totalHistoryQuestions = this.user.questionHistory.length;
        
        if (rankingProgress && rankingProgressText && rankingProgressFill) {
            if (totalHistoryQuestions < 50) {
                // Show ranking progress
                rankingProgress.style.display = 'flex';
                rankingProgressText.textContent = `${totalHistoryQuestions}/50 for ranking`;
                rankingProgressFill.style.width = `${(totalHistoryQuestions / 50) * 100}%`;
            } else {
                // Hide ranking progress once qualified
                rankingProgress.style.display = 'none';
            }
        }
    },
    
    showAccuracyChange(oldAccuracy, newAccuracy) {
        const accuracyChange = document.getElementById('accuracyChange');
        if (!accuracyChange) return;
        
        const difference = newAccuracy - oldAccuracy;
        if (Math.abs(difference) < 0.1) return; // Don't show tiny changes
        
        // Set the content and styling
        accuracyChange.textContent = `${difference > 0 ? '+' : ''}${difference.toFixed(1)}%`;
        accuracyChange.className = `accuracy-change ${difference > 0 ? 'positive' : 'negative'}`;
        
        // Show the animation
        accuracyChange.classList.add('show');
        
        // Hide after animation completes
        setTimeout(() => {
            accuracyChange.classList.remove('show');
        }, 1500);
    },
    
    updateLiveRankDisplay() {
        const liveRankIcon = document.getElementById('liveRankIcon');
        const liveRankName = document.getElementById('liveRankName');
        
        if (liveRankIcon && liveRankName) {
            const qualifiedRank = this.getQualifiedRank();
            const rankIconFile = this.getRankIcon(qualifiedRank);
            const rankEmoji = this.getRankEmoji(qualifiedRank);
            
            liveRankIcon.innerHTML = `
                <img src="rank-icons/${rankIconFile}.png" 
                     alt="${qualifiedRank}" 
                     style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block;"
                     onerror="this.onerror=null; this.src='rank-icons/${rankIconFile}.svg'; this.onerror=function(){this.style.display='none'; this.parentElement.querySelector('.emoji-fallback').style.display='flex';};">
                <div class="emoji-fallback" style="position: absolute; inset: 0; display: none; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold;">
                    ${rankEmoji}
                </div>
            `;
            
            // Apply rank color and glow effects
            const rankColor = this.getRankColor(qualifiedRank);
            const glowEffect = this.getRankGlow(qualifiedRank);
            liveRankIcon.style.background = rankColor;
            liveRankIcon.style.position = 'relative';
            liveRankIcon.style.display = 'flex';
            liveRankIcon.style.alignItems = 'center';
            liveRankIcon.style.justifyContent = 'center';
            liveRankIcon.style.boxShadow = glowEffect;
            
            // Update rank name with qualification status
            const totalHistoryQuestions = this.user.questionHistory.length;
            if (totalHistoryQuestions < 50) {
                liveRankName.textContent = `Unranked (${totalHistoryQuestions}/50)`;
            } else {
                liveRankName.textContent = qualifiedRank;
            }
            
            // Apply glow effect to rank name text
            liveRankName.style.color = rankColor;
            liveRankName.style.textShadow = glowEffect;
            
            // Add rank change animation
            liveRankName.style.transition = 'all 0.5s ease';
            liveRankName.style.transform = 'scale(1.1)';
            setTimeout(() => {
                liveRankName.style.transform = 'scale(1)';
            }, 300);
        }
    },
    
    // =============================================
    // FIREBASE INTEGRATION
    // =============================================
    
    // script.js (inside the app object)

initializeFirebase() {
    if (typeof firebase === 'undefined' || !this.firebase.config.apiKey.startsWith('AIza')) {
        console.warn('Firebase not configured.');
        this.firebase.isConfigured = false;
        // Update UI to show Firebase is offline
        this.updateFirebaseStatus(false); 
        return;
    }

    try {
        firebase.initializeApp(this.firebase.config);
        this.firebase.db = firebase.firestore();
        this.firebase.auth = firebase.auth(); // Make sure auth is initialized
        this.firebase.isConfigured = true;
        this.updateFirebaseStatus(true);
        console.log('Firebase initialized.');

        // ==> ADD THIS: Sign in the user <==
        this.firebase.auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in anonymously.
                console.log('User signed in:', user.uid);
                this.user.id = user.uid; // Store the Firebase UID
                this.loadUserDataFromFirebase(user.uid);
            } else {
                // User is signed out. Sign them in.
                this.firebase.auth.signInAnonymously().catch(error => {
                    console.error('Anonymous sign-in failed:', error);
                });
            }
        });

    } catch (error) {
        console.error('Firebase initialization failed:', error);
        this.firebase.isConfigured = false;
        this.updateFirebaseStatus(false);
    }
},

    async createUserDocument(userId) {
        if (!this.firebase || !this.firebase.db) {
            console.warn('Firebase db not available');
            return;
        }
        
        try {
            const userRef = this.firebase.db.collection('users').doc(userId);
            const doc = await userRef.get();
            
            if (!doc.exists) {
                // Create new user document
                await userRef.set({
                    userId: userId,
                    name: this.user.name || 'Anonymous Player',
                    rank: 'Unranked',
                    accuracy: 0,
                    totalQuestions: 0,
                    correctAnswers: 0,
                    questionHistory: [],
                    lastActive: firebase.firestore.FieldValue.serverTimestamp(),
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
                console.log('User document created for ID:', userId);
            }
        } catch (error) {
            console.error('Error creating user document:', error);
        }
    },

    async loadUserDataFromFirebase(userId) {
        if (!this.firebase || !this.firebase.db) {
            console.warn('Firebase db not available');
            return;
        }
        
        try {
            const userRef = this.firebase.db.collection('users').doc(userId);
            const doc = await userRef.get();
            
            if (doc.exists) {
                const data = doc.data();
                // Update local user data with Firebase data
                this.user.name = data.name || this.user.name;
                this.user.rank = data.rank || 'Unranked';
                this.user.accuracy = data.accuracy || 0;
                this.user.totalQuestions = data.totalQuestions || 0;
                this.user.correctAnswers = data.correctAnswers || 0;
                this.user.questionHistory = data.questionHistory || [];
                
                // Update UI
                this.updateUI();
                console.log('User data loaded from Firebase');
            }
        } catch (error) {
            console.error('Error loading user data from Firebase:', error);
        }
    },

async updateUserInFirebase() {
    if (!this.firebase || !this.firebase.isConfigured || !this.firebase.db || !this.user.id) {
        return; // Also check if user.id exists
    }

    try {
        const userId = this.user.id; // Correct: Use the Firebase Auth ID
        const userRef = this.firebase.db.collection('users').doc(userId);
            
            await userRef.set({
                userId: userId,
                name: this.user.name,
                rank: this.user.rank,
                accuracy: this.user.accuracy,
                totalQuestions: this.user.totalQuestions,
                correctAnswers: this.user.correctAnswers,
                questionHistory: this.user.questionHistory,
                lastActive: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true }); // Use merge to update existing document
            
            // Update leaderboard
            await this.updateLeaderboardInFirebase(userId);
            
            console.log('User data updated in Firebase for ID:', userId);
        } catch (error) {
            console.error('Error updating user data in Firebase:', error);
        }
    },

    async updateLeaderboardInFirebase(userId) {
        if (!this.firebase || !this.firebase.isConfigured || !this.firebase.db) {
            return;
        }
        
        try {
            const leaderboardRef = this.firebase.db.collection('leaderboard').doc(userId);
            
            await leaderboardRef.set({
                userId: userId,
                name: this.user.name, 
                rank: this.user.rank,
                accuracy: this.user.accuracy,
                totalQuestions: this.user.totalQuestions,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
            
            console.log('Leaderboard updated in Firebase');
        } catch (error) {
            console.error('Error updating leaderboard in Firebase:', error);
        }
    },

    // script.js (inside the app object)
async loadLeaderboardFromFirebase() {
    if (!this.firebase.isConfigured || !this.firebase.db) {
        this.showNotification('Leaderboard is offline.', 'error');
        return;
    }

    try {
        const leaderboardRef = this.firebase.db.collection('leaderboard')
            .orderBy('accuracy', 'desc')
            .limit(50);

        const snapshot = await leaderboardRef.get();
        const leaderboardData = snapshot.docs.map(doc => doc.data());

        this.displayLeaderboard(leaderboardData);
        console.log('Leaderboard loaded from Firebase');
    } catch (error) {
        console.error('Error loading leaderboard from Firebase:', error);
        this.showNotification('Could not load leaderboard.', 'error');
    }
},

    // script.js
displayLeaderboard(leaderboardData) {
    const leaderboardList = document.getElementById('leaderboardList');
    if (!leaderboardList) return;

    leaderboardList.innerHTML = '';

    if (leaderboardData.length === 0) {
        leaderboardList.innerHTML = '<div class="no-data" style="text-align: center; padding: 2rem; color: var(--text-secondary);">No leaderboard data available. Complete a quiz to get on the board!</div>';
        return;
    }

    leaderboardData.forEach((player, index) => {
        const playerElement = document.createElement('div');
        playerElement.className = 'leaderboard-item';

        const rankIconFile = this.getRankIcon(player.rank);
        const rankEmoji = this.getRankEmoji(player.rank);
        const rankColor = this.getRankColor(player.rank);
        const glowEffect = this.getRankGlow(player.rank);
        const rankClass = index < 3 ? ['gold', 'silver', 'bronze'][index] : '';

        playerElement.innerHTML = `
            <div class="leaderboard-rank ${rankClass}">${index + 1}</div>
            <div class="leaderboard-rank-icon" style="background-color: ${rankColor}; box-shadow: ${glowEffect};">
                <img src="rank-icons/${rankIconFile}.png" alt="${player.rank}"
                     onerror="this.onerror=null; this.src='rank-icons/${rankIconFile}.svg'; this.onerror=function(){this.style.display='none'; this.parentElement.querySelector('.emoji-fallback').style.display='flex';};">
                <div class="emoji-fallback">${rankEmoji}</div>
            </div>
            <div class="leaderboard-info">
                <div class="leaderboard-name">${player.name || 'Anonymous'}</div>
                <div class="leaderboard-score">
                    <span style="color: ${rankColor}; text-shadow: ${glowEffect};">${player.rank}</span>
                    <span class="leaderboard-accuracy">${player.accuracy.toFixed(1)}%</span>
                </div>
            </div>
        `;

        leaderboardList.appendChild(playerElement);
    });
},

    refreshLeaderboard() {
        if (this.firebase && this.firebase.isConfigured) {
            this.loadLeaderboardFromFirebase();
        } else {
            this.showNotification('Firebase not configured', 'error');
        }
    },
    
    init() {
        console.log('CYBR372 Practice Test Initializing...');
        this.loadUserData();
        this.loadQuestions();
        this.bindEvents();
        
        // Initialize Firebase if configured
      
            this.initializeFirebase();
        
        
        this.updateUI();
        this.showSection('profile');
        console.log('Application initialized successfully');
    },
    
    // =============================================
    // DATA MANAGEMENT
    // =============================================
    
    loadUserData() {
        try {
            const userData = localStorage.getItem('cybr372_user');
            if (userData) {
                const parsed = JSON.parse(userData);
                this.user = { ...this.user, ...parsed };
                console.log('User data loaded:', this.user);
            }
        } catch (error) {
            console.error('Error loading user data:', error);
        }
    },
    
    saveUserData() {
        try {
            const userData = JSON.stringify(this.user);
            localStorage.setItem('cybr372_user', userData);
            console.log('User data saved');
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    },
    
    loadQuestions() {
        this.quiz.questions = [
            {
                question: "What is the primary purpose of encryption in cybersecurity?",
                answers: [
                    "To increase data processing speed",
                    "To protect data confidentiality",
                    "To reduce storage requirements",
                    "To improve network performance"
                ],
                correct: 1
            },
            {
                question: "Which of the following is a common type of malware that encrypts files and demands payment?",
                answers: [
                    "Virus",
                    "Trojan",
                    "Ransomware",
                    "Spyware"
                ],
                correct: 2
            },
            {
                question: "What does the acronym 'CIA' stand for in cybersecurity?",
                answers: [
                    "Central Intelligence Agency",
                    "Confidentiality, Integrity, Availability",
                    "Cyber Incident Analysis",
                    "Critical Infrastructure Assessment"
                ],
                correct: 1
            },
            {
                question: "Which authentication method requires something you know, something you have, and something you are?",
                answers: [
                    "Single-factor authentication",
                    "Two-factor authentication",
                    "Multi-factor authentication",
                    "Biometric authentication"
                ],
                correct: 2
            },
            {
                question: "What is a 'phishing' attack?",
                answers: [
                    "A type of denial-of-service attack",
                    "An attempt to trick users into revealing sensitive information",
                    "A malware that spreads through networks",
                    "An attack that exploits software vulnerabilities"
                ],
                correct: 1
            },
            {
                question: "Which protocol is commonly used for secure web browsing?",
                answers: [
                    "HTTP",
                    "FTP",
                    "HTTPS",
                    "SMTP"
                ],
                correct: 2
            },
            {
                question: "What is the purpose of a firewall in network security?",
                answers: [
                    "To encrypt data transmissions",
                    "To monitor and control network traffic",
                    "To store user credentials",
                    "To generate security reports"
                ],
                correct: 1
            },
            {
                question: "Which of the following is a best practice for password security?",
                answers: [
                    "Use the same password for all accounts",
                    "Share passwords with trusted colleagues",
                    "Use strong, unique passwords for each account",
                    "Write passwords on sticky notes"
                ],
                correct: 2
            },
            {
                question: "What is 'social engineering' in cybersecurity?",
                answers: [
                    "Automated security testing",
                    "Psychological manipulation to gain information",
                    "Network infrastructure design",
                    "Software development methodology"
                ],
                correct: 1
            },
            {
                question: "Which type of attack involves flooding a system with traffic to make it unavailable?",
                answers: [
                    "Phishing",
                    "Malware",
                    "Denial-of-Service (DoS)",
                    "Man-in-the-middle"
                ],
                correct: 2
            }
        ];
        console.log('Questions loaded:', this.quiz.questions.length);
    },
    
    // =============================================
    // RANK CALCULATION
    // =============================================
    
    calculateRank(accuracy) {
        if (accuracy >= 95) return 'SSL';
        if (accuracy >= 90) return 'Grand Champion';
        if (accuracy >= 85) return 'Champion III';
        if (accuracy >= 80) return 'Champion II';
        if (accuracy >= 75) return 'Champion I';
        if (accuracy >= 70) return 'Diamond III';
        if (accuracy >= 65) return 'Diamond II';
        if (accuracy >= 60) return 'Diamond I';
        if (accuracy >= 55) return 'Platinum III';
        if (accuracy >= 50) return 'Platinum II';
        if (accuracy >= 45) return 'Platinum I';
        if (accuracy >= 40) return 'Gold III';
        if (accuracy >= 35) return 'Gold II';
        if (accuracy >= 30) return 'Gold I';
        if (accuracy >= 25) return 'Silver III';
        if (accuracy >= 20) return 'Silver II';
        if (accuracy >= 15) return 'Silver I';
        if (accuracy >= 10) return 'Bronze III';
        if (accuracy >= 5) return 'Bronze II';
        if (accuracy >= 0) return 'Bronze I';
        return 'Unranked';
    },
    
    calculateRollingAccuracy() {
        const history = this.user.questionHistory;
        if (history.length === 0) return 0;
        
        // Get last 100 questions (or all if less than 100)
        const recentHistory = history.slice(-100);
        const correctCount = recentHistory.filter(q => q.isCorrect).length;
        
        return (correctCount / recentHistory.length) * 100;
    },
    
    getQualifiedRank() {
        const totalQuestions = this.user.questionHistory.length;
        
        // Only show rank if player has answered at least 50 questions
        if (totalQuestions < 50) {
            return 'Unranked';
        }
        
        // Calculate rank based on rolling average of last 100 questions
        const rollingAccuracy = this.calculateRollingAccuracy();
        return this.calculateRank(rollingAccuracy);
    },
    
    addQuestionToHistory(questionId, isCorrect) {
        // Add question to history with timestamp
        this.user.questionHistory.push({
            questionId: questionId,
            isCorrect: isCorrect,
            timestamp: Date.now()
        });
        
        // Keep only last 1000 questions to prevent memory issues (but we only use last 100 for calculation)
        if (this.user.questionHistory.length > 1000) {
            this.user.questionHistory = this.user.questionHistory.slice(-1000);
        }
        
        // Update session question count
        this.user.sessionQuestions++;
    },
    
    getRankColor(rank) {
        const colors = {
            'SSL': '#ffffff',
            'Grand Champion': '#f50246',
            'Champion III': '#9361dc',
            'Champion II': '#9361dc',
            'Champion I': '#9361dc',
            'Diamond III': '#0372ff',
            'Diamond II': '#0372ff',
            'Diamond I': '#0372ff',
            'Platinum III': '#9ff8ff',
            'Platinum II': '#9ff8ff',
            'Platinum I': '#9ff8ff',
            'Gold III': '#e6cc3b',
            'Gold II': '#e6cc3b',
            'Gold I': '#e6cc3b',
            'Silver III': '#727272',
            'Silver II': '#727272',
            'Silver I': '#727272',
            'Bronze III': '#de8e39',
            'Bronze II': '#de8e39',
            'Bronze I': '#de8e39',
            'Unranked': '#666666'
        };
        return colors[rank] || '#666666';
    },
    
// script.js
getRankGlow(rank) {
    switch (rank) {
        case 'SSL':
            return '0 0 20px #ffffff, 0 0 40px #ffffff';
        case 'Grand Champion':
            return '0 0 15px #f50246, 0 0 30px #f50246';
        default:
            return 'none';
    }
},
    
    getRankIcon(rank) {
        const icons = {
            'SSL': 'ssl',
            'Grand Champion': 'grand_champion',
            'Champion III': 'champion_3',
            'Champion II': 'champion_2',
            'Champion I': 'champion_1',
            'Diamond III': 'diamond_3',
            'Diamond II': 'diamond_2',
            'Diamond I': 'diamond_1',
            'Platinum III': 'platinum_3',
            'Platinum II': 'platinum_2',
            'Platinum I': 'platinum_1',
            'Gold III': 'gold_3',
            'Gold II': 'gold_2',
            'Gold I': 'gold_1',
            'Silver III': 'silver_3',
            'Silver II': 'silver_2',
            'Silver I': 'silver_1',
            'Bronze III': 'bronze_3',
            'Bronze II': 'bronze_2',
            'Bronze I': 'bronze_1',
            'Unranked': 'unranked'
        };
        return icons[rank] || 'unranked';
    },
    
    getRankEmoji(rank) {
        const emojis = {
            'SSL': '👑',
            'Grand Champion': '🏆',
            'Champion III': '🥇',
            'Champion II': '🥈',
            'Champion I': '🥉',
            'Diamond III': '💎',
            'Diamond II': '💎',
            'Diamond I': '💎',
            'Platinum III': '⭐',
            'Platinum II': '⭐',
            'Platinum I': '⭐',
            'Gold III': '🥇',
            'Gold II': '🥈',
            'Gold I': '🥉',
            'Silver III': '🥈',
            'Silver II': '🥈',
            'Silver I': '🥈',
            'Bronze III': '🥉',
            'Bronze II': '🥉',
            'Bronze I': '🥉',
            'Unranked': '🎯'
        };
        return emojis[rank] || '🎯';
    },
    
    updateUserRank() {
        // Use qualified rank system (50-question minimum, rolling average)
        this.user.rank = this.getQualifiedRank();
        this.saveUserData();
    },
    
    // =============================================
    // UI MANAGEMENT
    // =============================================
    
    updateUI() {
        this.updateHeader();
        this.updateProfile();
        this.updateSettings();
    },
    
    updateHeader() {
        const headerRankIcon = document.getElementById('headerRankIcon');
        const headerRankText = document.getElementById('headerRankText');
        
        if (headerRankIcon && headerRankText) {
            const qualifiedRank = this.getQualifiedRank();
            const rankIconFile = this.getRankIcon(qualifiedRank);
            const rankEmoji = this.getRankEmoji(qualifiedRank);
            
            // Update rank icon with PNG/SVG fallback
            headerRankIcon.innerHTML = `
                <img src="rank-icons/${rankIconFile}.png" 
                     alt="${qualifiedRank}" 
                     style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block;"
                     onerror="this.onerror=null; this.src='rank-icons/${rankIconFile}.svg'; this.onerror=function(){this.style.display='none'; this.parentElement.querySelector('.emoji-fallback').style.display='flex';};">
                <div class="emoji-fallback" style="position: absolute; inset: 0; display: none; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold;">
                    ${rankEmoji}
                </div>
            `;
            
            // Apply rank color and glow effects
            const rankColor = this.getRankColor(qualifiedRank);
            const glowEffect = this.getRankGlow(qualifiedRank);
            headerRankIcon.style.background = rankColor;
            headerRankIcon.style.position = 'relative';
            headerRankIcon.style.display = 'flex';
            headerRankIcon.style.alignItems = 'center';
            headerRankIcon.style.justifyContent = 'center';
            headerRankIcon.style.boxShadow = glowEffect;
            
            // Display username instead of rank
            headerRankText.textContent = this.user.name || 'Player';
            headerRankText.style.color = rankColor;
            headerRankText.style.textShadow = glowEffect;
        }
    },
    
    updateProfile() {
        const nameInput = document.getElementById('playerNameInput');
        const rankName = document.getElementById('profileRankName');
        const rankProgress = document.getElementById('rankProgressFill');
        const rankProgressText = document.getElementById('rankProgressText');
        const totalQuestionsStat = document.getElementById('totalQuestionsStat');
        const correctAnswersStat = document.getElementById('correctAnswersStat');
        const accuracyStat = document.getElementById('accuracyStat');
        const avatarText = document.getElementById('avatarText');
        const saveBtn = document.getElementById('saveProfileBtn');
        
        if (nameInput) nameInput.value = this.user.name;
        
        // Update rank display with qualification status
        const totalHistoryQuestions = this.user.questionHistory.length;
        const qualifiedRank = this.getQualifiedRank();
        
        if (rankName) {
            if (totalHistoryQuestions < 50) {
                rankName.textContent = `Unranked (${totalHistoryQuestions}/50)`;
            } else {
                rankName.textContent = qualifiedRank;
            }
            
            // Apply rank color and glow effects to profile rank name
            const rankColor = this.getRankColor(qualifiedRank);
            const glowEffect = this.getRankGlow(qualifiedRank);
            rankName.style.color = rankColor;
            rankName.style.textShadow = glowEffect;
        }
        
        // Update progress bar - show progress toward 50 questions for ranking
        if (rankProgress && rankProgressText) {
            if (totalHistoryQuestions < 50) {
                const progressPercent = (totalHistoryQuestions / 50) * 100;
                rankProgress.style.width = `${progressPercent}%`;
                rankProgressText.textContent = `${totalHistoryQuestions}/50 questions`;
            } else {
                // Show rolling accuracy for qualified players
                const rollingAccuracy = this.calculateRollingAccuracy();
                rankProgress.style.width = `${rollingAccuracy}%`;
                rankProgressText.textContent = `${rollingAccuracy.toFixed(1)}%`;
            }
        }
        
        if (totalQuestionsStat) totalQuestionsStat.textContent = totalHistoryQuestions;
        if (correctAnswersStat) {
            const correctInHistory = this.user.questionHistory.filter(q => q.isCorrect).length;
            correctAnswersStat.textContent = correctInHistory;
        }
        if (accuracyStat) {
            if (totalHistoryQuestions < 50) {
                accuracyStat.textContent = '--%';
            } else {
                const rollingAccuracy = this.calculateRollingAccuracy();
                accuracyStat.textContent = `${rollingAccuracy.toFixed(1)}%`;
            }
        }
        
        // Update avatar with PNG prioritization
        if (avatarText) {
            const rankIconFile = this.getRankIcon(qualifiedRank);
            const rankEmoji = this.getRankEmoji(qualifiedRank);
            
            avatarText.innerHTML = `
                <img src="rank-icons/${rankIconFile}.png" 
                     alt="${qualifiedRank}" 
                     style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; position: absolute; inset: 0; display: block;"
                     onerror="this.onerror=null; this.src='rank-icons/${rankIconFile}.svg'; this.onerror=function(){this.style.display='none'; this.parentElement.querySelector('.emoji-fallback').style.display='flex';};">
                <div class="emoji-fallback" style="position: absolute; inset: 0; display: none; align-items: center; justify-content: center; font-size: 1.5rem;">
                    ${rankEmoji}
                </div>
            `;
        }
        
        if (saveBtn && !this.user.isProfileComplete) {
            saveBtn.classList.add('pulsing');
            saveBtn.textContent = 'Complete Profile to Start';
        } else if (saveBtn) {
            saveBtn.classList.remove('pulsing');
            saveBtn.textContent = 'Update Profile';
        }
    },
    
    updateSettings() {
        const shuffleToggle = document.getElementById('shuffleToggle');
        const feedbackToggle = document.getElementById('feedbackToggle');
        
        if (shuffleToggle) shuffleToggle.checked = this.quiz.settings.shuffleAnswers;
        if (feedbackToggle) feedbackToggle.checked = this.quiz.settings.showFeedback;
    },
    
    showSection(sectionName) {
        // Hide all sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Remove active class from all nav buttons
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(`${sectionName}-section`);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Add active class to clicked nav button
        const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        this.ui.currentSection = sectionName;
        
        // Load section-specific content
        switch (sectionName) {
            case 'profile':
                this.updateProfile();
                break;
            case 'quiz':
                this.renderQuiz();
                break;
            case 'leaderboard':
                this.renderLeaderboard();
                break;
            case 'settings':
                this.updateSettings();
                break;
        }
    },
    
    // =============================================
    // PROFILE MANAGEMENT
    // =============================================
    
    saveProfile() {
        const nameInput = document.getElementById('playerNameInput');
        const name = nameInput ? nameInput.value.trim() : '';
        
        if (!name) {
            this.showNotification('Please enter your name', 'error');
            return;
        }
        
        const wasFirstTime = !this.user.isProfileComplete;
        
        this.user.name = name;
        this.user.isProfileComplete = true;
        this.saveUserData();
        this.updateUI();
        
        // Update Firebase if configured
        if (this.firebase && this.firebase.isConfigured) {
            this.updateUserInFirebase();
        }
        
        if (wasFirstTime) {
            this.showNotification('Profile completed! You can now start the quiz.', 'success');
            setTimeout(() => {
                this.showSection('quiz');
            }, 1500);
        } else {
            this.showNotification('Profile updated successfully!', 'success');
        }
    },
    
    // =============================================
    // QUIZ MANAGEMENT
    // =============================================
    
    renderQuiz() {
        if (!this.user.isProfileComplete) {
            const questionText = document.getElementById('questionText');
            const answersContainer = document.getElementById('answersContainer');
            
            if (questionText) {
                questionText.textContent = 'Complete your profile first to start the quiz!';
            }
            
            if (answersContainer) {
                answersContainer.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                        <p>Please complete your profile to access the quiz.</p>
                        <button class="action-btn" onclick="app.showSection('profile')" style="margin-top: 1rem;">
                            Go to Profile
                        </button>
                    </div>
                `;
            }
            return;
        }
        
        if (this.quiz.isComplete) {
            this.showQuizResults();
            return;
        }
        
        if (!this.quiz.isActive) {
            this.startQuiz();
            return;
        }
        
        this.renderCurrentQuestion();
    },
    
    startQuiz() {
        this.quiz.isActive = true;
        this.quiz.currentQuestion = 0;
        this.quiz.userAnswers = [];
        this.user.sessionQuestions = 0; // Reset session counter
        this.renderCurrentQuestion();
    },
    
    renderCurrentQuestion() {
        const question = this.quiz.questions[this.quiz.currentQuestion];
        const progress = ((this.quiz.currentQuestion + 1) / this.quiz.questions.length) * 100;
        
        // Update progress
        const progressText = document.getElementById('quizProgressText');
        const progressBar = document.getElementById('quizProgressBar');
        const questionNumber = document.getElementById('questionNumber');
        const questionText = document.getElementById('questionText');
        const answersContainer = document.getElementById('answersContainer');
        const feedbackContainer = document.getElementById('feedbackContainer');
        
        if (progressText) progressText.textContent = `Question ${this.quiz.currentQuestion + 1} of ${this.quiz.questions.length}`;
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (questionNumber) questionNumber.textContent = `Q${this.quiz.currentQuestion + 1}`;
        if (questionText) questionText.textContent = question.question;
        if (feedbackContainer) feedbackContainer.innerHTML = '';
        
        // Initialize live stats display
        this.updateLiveStats();
        
        // Generate answers with proper mapping
        let answers;
        this.quiz.currentAnswerMap = []; // Reset the mapping
        
        if (this.quiz.settings.shuffleAnswers) {
            // Create array of indices and shuffle them
            const originalIndices = question.answers.map((_, index) => index);
            const shuffledIndices = this.shuffleArray([...originalIndices]);
            
            // Create shuffled answers array
            answers = shuffledIndices.map(originalIndex => question.answers[originalIndex]);
            
            // Store the mapping: shuffled index -> original index
            this.quiz.currentAnswerMap = shuffledIndices;
        } else {
            answers = question.answers;
            // No shuffling, so mapping is identity
            this.quiz.currentAnswerMap = question.answers.map((_, index) => index);
        }
        
        if (answersContainer) {
            answersContainer.innerHTML = answers.map((answer, index) => `
                <button class="answer-btn" onclick="app.selectAnswer(${index})">
                    ${answer}
                </button>
            `).join('');
        }
    },
    
    selectAnswer(selectedIndex) {
        const question = this.quiz.questions[this.quiz.currentQuestion];
        const correctIndex = question.correct;
        
        // Map the selected index back to the original index using our mapping
        const originalSelectedIndex = this.quiz.currentAnswerMap[selectedIndex];
        const isCorrect = originalSelectedIndex === correctIndex;
        
        // Store answer with original indices for consistency
        this.quiz.userAnswers.push({
            questionIndex: this.quiz.currentQuestion,
            selectedAnswer: originalSelectedIndex,
            correctAnswer: correctIndex,
            isCorrect: isCorrect
        });
        
        // Add question to persistent history for rank calculation
        this.addQuestionToHistory(`q${this.quiz.currentQuestion}`, isCorrect);
        
        // Update live stats immediately
        this.updateLiveStats();
        
        // Disable all answer buttons
        const answerBtns = document.querySelectorAll('.answer-btn');
        answerBtns.forEach((btn, index) => {
            btn.disabled = true;
            const originalIndex = this.quiz.currentAnswerMap[index];
            
            if (index === selectedIndex) {
                btn.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
            if (originalIndex === correctIndex && !isCorrect) {
                btn.classList.add('correct');
            }
        });
        
        // Show feedback
        if (this.quiz.settings.showFeedback) {
            this.showFeedback(isCorrect, question.answers[correctIndex]);
        }
        
        // Move to next question after delay
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    },
    
    showFeedback(isCorrect, correctAnswer) {
        const feedbackContainer = document.getElementById('feedbackContainer');
        if (!feedbackContainer) return;
        
        const message = isCorrect 
            ? 'Correct! Well done!' 
            : `Incorrect. The correct answer is: ${correctAnswer}`;
        
        feedbackContainer.innerHTML = `
            <div class="feedback-message ${isCorrect ? 'correct' : 'incorrect'}">
                ${message}
            </div>
        `;
    },
    
    nextQuestion() {
        this.quiz.currentQuestion++;
        
        if (this.quiz.currentQuestion >= this.quiz.questions.length) {
            this.completeQuiz();
        } else {
            this.renderCurrentQuestion();
        }
    },
    
    completeQuiz() {
        this.quiz.isComplete = true;
        this.quiz.isActive = false;
        
        // Calculate results
        const correctAnswers = this.quiz.userAnswers.filter(answer => answer.isCorrect).length;
        const accuracy = (correctAnswers / this.quiz.questions.length) * 100;
        
        // Update user stats (these are session-specific)
        this.user.totalQuestions += this.quiz.questions.length;
        this.user.correctAnswers += correctAnswers;
        this.user.accuracy = accuracy;
        
        // Update rank using qualified system (50-question minimum, rolling average)
        this.updateUserRank();
        
        // Save data
        this.saveUserData();
        
        // Reset session counter for next quiz
        this.user.sessionQuestions = 0;
        
        // Show integrated results
        this.showQuizResults();
        this.showNotification('Quiz completed! Check your results.', 'success');
    },
    
    restartQuiz() {
        this.quiz.currentQuestion = 0;
        this.quiz.userAnswers = [];
        this.quiz.isComplete = false;
        this.quiz.isActive = false;
        
        // Hide results, show quiz content
        const quizContent = document.querySelector('.quiz-content');
        const quizResults = document.getElementById('quizResults');
        
        if (quizContent) quizContent.style.display = 'block';
        if (quizResults) quizResults.style.display = 'none';
        
        // Restart the quiz
        this.showSection('quiz');
    },
    
    showQuizResults() {
        const quizContent = document.querySelector('.quiz-content');
        const quizResults = document.getElementById('quizResults');
        
        if (quizContent && quizResults) {
            // Hide quiz content, show results
            quizContent.style.display = 'none';
            quizResults.style.display = 'block';
            
            // Calculate final stats
            const correctAnswers = this.quiz.userAnswers.filter(answer => answer.isCorrect).length;
            const sessionAccuracy = (correctAnswers / this.quiz.questions.length) * 100;
            
            // Get qualified rank and rolling accuracy
            const qualifiedRank = this.getQualifiedRank();
            const rollingAccuracy = this.calculateRollingAccuracy();
            const totalHistoryQuestions = this.user.questionHistory.length;
            
            // Update final results display
            const finalCorrect = document.getElementById('finalCorrect');
            const finalAccuracy = document.getElementById('finalAccuracy');
            const finalPerformance = document.getElementById('finalPerformance');
            const finalRankIcon = document.getElementById('finalRankIcon');
            const finalRankName = document.getElementById('finalRankName');
            
            if (finalCorrect) finalCorrect.textContent = `${correctAnswers}/${this.quiz.questions.length}`;
            if (finalAccuracy) {
                if (totalHistoryQuestions < 50) {
                    finalAccuracy.textContent = 'Session: ' + sessionAccuracy.toFixed(1) + '%';
                } else {
                    finalAccuracy.textContent = 'Rolling: ' + rollingAccuracy.toFixed(1) + '%';
                }
            }
            
            if (finalRankName) {
                if (totalHistoryQuestions < 50) {
                    finalRankName.textContent = `Unranked (${totalHistoryQuestions}/50)`;
                } else {
                    finalRankName.textContent = qualifiedRank;
                }
            }
            
            // Update final rank icon
            if (finalRankIcon) {
                const rankIconFile = this.getRankIcon(qualifiedRank);
                const rankEmoji = this.getRankEmoji(qualifiedRank);
                
                finalRankIcon.innerHTML = `
                    <img src="rank-icons/${rankIconFile}.png" 
                         alt="${qualifiedRank}" 
                         style="width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block;"
                         onerror="this.onerror=null; this.src='rank-icons/${rankIconFile}.svg'; this.onerror=function(){this.style.display='none'; this.parentElement.querySelector('.emoji-fallback').style.display='flex';};">
                    <div class="emoji-fallback" style="position: absolute; inset: 0; display: none; align-items: center; justify-content: center; font-size: 1rem; font-weight: bold;">
                        ${rankEmoji}
                    </div>
                `;
                
                // Apply rank color and glow effects
                const rankColor = this.getRankColor(qualifiedRank);
                const glowEffect = this.getRankGlow(qualifiedRank);
                finalRankIcon.style.background = rankColor;
                finalRankIcon.style.position = 'relative';
                finalRankIcon.style.display = 'flex';
                finalRankIcon.style.alignItems = 'center';
                finalRankIcon.style.justifyContent = 'center';
                finalRankIcon.style.boxShadow = glowEffect;
            }
            
            // Apply glow effect to final rank name
            if (finalRankName) {
                const rankColor = this.getRankColor(qualifiedRank);
                const glowEffect = this.getRankGlow(qualifiedRank);
                finalRankName.style.color = rankColor;
                finalRankName.style.textShadow = glowEffect;
            }
            
            // Performance message based on session accuracy
            let performance = 'Keep Going!';
            if (sessionAccuracy >= 90) performance = 'Outstanding!';
            else if (sessionAccuracy >= 80) performance = 'Excellent!';
            else if (sessionAccuracy >= 70) performance = 'Great Job!';
            else if (sessionAccuracy >= 60) performance = 'Good Work!';
            else if (sessionAccuracy >= 50) performance = 'Keep Practicing!';
            
            if (finalPerformance) finalPerformance.textContent = performance;
        }
    },
    
    // =============================================
    // LEADERBOARD MANAGEMENT
    // =============================================
    
    renderLeaderboard() {
    this.loadLeaderboardFromFirebase();
    },
    
    getLocalLeaderboard() {
        const mockUsers = [
            { name: 'CyberNinja', accuracy: 95, rank: 'SSL' },
            { name: 'SecurityPro', accuracy: 92, rank: 'Grand Champion' },
            { name: 'HackMaster', accuracy: 88, rank: 'Champion III' },
            { name: 'DataGuardian', accuracy: 85, rank: 'Champion II' },
            { name: 'CryptoKing', accuracy: 82, rank: 'Champion I' },
            { name: 'FirewallExpert', accuracy: 78, rank: 'Diamond III' },
            { name: 'MalwareHunter', accuracy: 75, rank: 'Diamond II' },
            { name: 'PhishingPhantom', accuracy: 72, rank: 'Diamond I' },
            { name: 'EncryptionExpert', accuracy: 68, rank: 'Platinum III' },
            { name: 'NetworkNinja', accuracy: 65, rank: 'Platinum II' }
        ];
        
        // Add current user if they have completed quizzes
        if (this.user.totalQuestions > 0) {
            mockUsers.push({
                name: this.user.name,
                accuracy: this.user.accuracy,
                rank: this.user.rank
            });
        }
        
        // Sort by accuracy and return top 10
        return mockUsers
            .sort((a, b) => b.accuracy - a.accuracy)
            .slice(0, 10);
    },
    
// script.js
refreshLeaderboard() {
    if (this.firebase && this.firebase.isConfigured) {
        this.loadLeaderboardFromFirebase();
        this.showNotification('Leaderboard refreshed!', 'success');
    } else {
        this.showNotification('Firebase not configured. Using local data.', 'error');
        // Optionally, you can fall back to the local leaderboard here if you want
    }
},
    
    // =============================================
    // SETTINGS MANAGEMENT
    // =============================================
    
    updateSettings() {
        const shuffleToggle = document.getElementById('shuffleToggle');
        const feedbackToggle = document.getElementById('feedbackToggle');
        
        if (shuffleToggle) {
            shuffleToggle.addEventListener('change', (e) => {
                this.quiz.settings.shuffleAnswers = e.target.checked;
                this.showNotification('Settings updated!', 'success');
            });
        }
        
        if (feedbackToggle) {
            feedbackToggle.addEventListener('change', (e) => {
                this.quiz.settings.showFeedback = e.target.checked;
                this.showNotification('Settings updated!', 'success');
            });
        }
    },
    
    exportData() {
        const data = {
            user: this.user,
            quiz: {
                settings: this.quiz.settings,
                totalQuestions: this.quiz.questions.length
            },
            exportDate: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cybr372_data.json';
        a.click();
        URL.revokeObjectURL(url);
        
        this.showNotification('Data exported successfully!', 'success');
    },
    
    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.user = {
                name: this.user.name,
                rank: 'Unranked',
                accuracy: 0,
                totalQuestions: 0,
                correctAnswers: 0,
                isProfileComplete: this.user.isProfileComplete
            };
            this.quiz = {
                currentQuestion: 0,
                questions: this.quiz.questions,
                userAnswers: [],
                isComplete: false,
                isActive: false,
                settings: this.quiz.settings
            };
            this.saveUserData();
            this.updateUI();
            this.showNotification('Progress reset successfully', 'success');
            this.showSection('profile');
        }
    },
    
    // =============================================
    // UTILITY FUNCTIONS
    // =============================================
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    showNotification(message, type = 'info') {
        const container = document.getElementById('notificationContainer');
        if (!container) return;
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        container.appendChild(notification);
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (container.contains(notification)) {
                    container.removeChild(notification);
                }
            }, 300);
        }, 3000);
    },
    // Add this function inside your app object
updateFirebaseStatus(isConnected) {
    const statusIndicator = document.querySelector('.status-indicator');
    const statusText = document.querySelector('.firebase-status span');
    
    if (statusIndicator) {
        statusIndicator.className = `status-indicator ${isConnected ? 'online' : 'offline'}`;
    }
    
    if (statusText) {
        statusText.textContent = `Firebase: ${isConnected ? 'Connected' : 'Not Configured'}`;
    }
},
    
    // =============================================
    // EVENT BINDING
    // =============================================
    
    bindEvents() {
        // Navigation buttons are handled by onclick attributes
        
        // Settings toggles
        const shuffleToggle = document.getElementById('shuffleToggle');
        const feedbackToggle = document.getElementById('feedbackToggle');
        
        if (shuffleToggle) {
            shuffleToggle.addEventListener('change', (e) => {
                this.quiz.settings.shuffleAnswers = e.target.checked;
            });
        }
        
        if (feedbackToggle) {
            feedbackToggle.addEventListener('change', (e) => {
                this.quiz.settings.showFeedback = e.target.checked;
            });
        }
        
        // Profile form
        const nameInput = document.getElementById('playerNameInput');
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.saveProfile();
                }
            });
        }
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case '1':
                        e.preventDefault();
                        this.showSection('profile');
                        break;
                    case '2':
                        e.preventDefault();
                        this.showSection('quiz');
                        break;
                    case '3':
                        e.preventDefault();
                        this.showSection('results');
                        break;
                    case '4':
                        e.preventDefault();
                        this.showSection('leaderboard');
                        break;
                    case '5':
                        e.preventDefault();
                        this.showSection('settings');
                        break;
                }
            }
        });
        
        console.log('Events bound successfully');
    }
};

// =============================================
    // FIREBASE INTEGRATION POINTS (Ready for implementation)
    // =============================================
    
    /*
    // Initialize Firebase
    initFirebase() {
        if (!this.firebase.config.apiKey || this.firebase.config.apiKey === "YOUR_API_KEY") {
            console.warn("Firebase not configured");
            return;
        }
        
        try {
            firebase.initializeApp(this.firebase.config);
            this.firebase.db = firebase.firestore();
            this.firebase.auth = firebase.auth();
            this.firebase.isConfigured = true;
            
            // Update UI to show Firebase is connected
            this.updateFirebaseStatus(true);
            
            // Set up auth state listener
            this.firebase.auth.onAuthStateChanged(user => {
                if (user) {
                    this.loadFirebaseUserData(user.uid);
                }
            });
            
            console.log("Firebase initialized successfully");
        } catch (error) {
            console.error("Firebase initialization failed:", error);
        }
    },
    
    // Load user data from Firebase
    async loadFirebaseUserData(userId) {
        try {
            const doc = await this.firebase.db.collection('users').doc(userId).get();
            if (doc.exists) {
                const data = doc.data();
                this.user = { ...this.user, ...data };
                this.updateUI();
            }
        } catch (error) {
            console.error('Error loading Firebase user data:', error);
        }
    },
    
    // Save user data to Firebase
    async saveFirebaseUserData() {
        if (!this.firebase.isConfigured || !this.firebase.auth.currentUser) {
            return;
        }
        
        try {
            const userId = this.firebase.auth.currentUser.uid;
            await this.firebase.db.collection('users').doc(userId).set({
                ...this.user,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            });
        } catch (error) {
            console.error('Error saving Firebase user data:', error);
        }
    },
    
    // Load leaderboard from Firebase
    async loadFirebaseLeaderboard() {
        if (!this.firebase.isConfigured) {
            this.renderLocalLeaderboard();
            return;
        }
        
        try {
            const snapshot = await this.firebase.db.collection('users')
                .orderBy('accuracy', 'desc')
                .limit(50)
                .get();
            
            const leaderboard = [];
            snapshot.forEach(doc => {
                leaderboard.push({ id: doc.id, ...doc.data() });
            });
            
            this.renderLeaderboard(leaderboard);
        } catch (error) {
            console.error('Error loading Firebase leaderboard:', error);
            this.renderLocalLeaderboard();
        }
    },
    
    // Save quiz results to Firebase
    async saveFirebaseQuizResults() {
        if (!this.firebase.isConfigured || !this.firebase.auth.currentUser) {
            return;
        }
        
        try {
            const userId = this.firebase.auth.currentUser.uid;
            const quizResult = {
                userId: userId,
                userName: this.user.name,
                accuracy: this.user.accuracy,
                totalQuestions: this.user.totalQuestions,
                correctAnswers: this.user.correctAnswers,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                answers: this.quiz.userAnswers
            };
            
            await this.firebase.db.collection('quizResults').add(quizResult);
            
            // Update user stats
            await this.firebase.db.collection('users').doc(userId).update({
                accuracy: this.user.accuracy,
                totalQuestions: this.user.totalQuestions,
                correctAnswers: this.user.correctAnswers,
                rank: this.user.rank
            });
        } catch (error) {
            console.error('Error saving Firebase quiz results:', error);
        }
    },
    
    // Update Firebase status in UI
    updateFirebaseStatus(isConnected) {
        const statusIndicator = document.querySelector('.status-indicator');
        const statusText = document.querySelector('.firebase-status span');
        
        if (statusIndicator) {
            statusIndicator.className = `status-indicator ${isConnected ? 'online' : 'offline'}`;
        }
        
        if (statusText) {
            statusText.textContent = `Firebase: ${isConnected ? 'Connected' : 'Not Configured'}`;
        }
    },
    */
    
// =============================================
// APPLICATION STARTUP
// =============================================

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting application...');
    app.init();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        app.updateUI();
    }
});

// Add error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
    app.showNotification('An error occurred. Please refresh the page.', 'error');
});

// Add unhandled promise rejection handling
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    app.showNotification('An error occurred. Please try again.', 'error');
});
