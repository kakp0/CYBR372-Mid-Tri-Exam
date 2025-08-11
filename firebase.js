// Firebase Integration for CYBR372 Practice Test
// Uncomment the script tag in index.html to enable Firebase functionality

// Firebase Configuration - Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCiqbsZF8o50VvxCh1bApQ2vyN27dnMxG8",
  authDomain: "cybr372-practice-test.firebaseapp.com",
  projectId: "cybr372-practice-test",
  storageBucket: "cybr372-practice-test.firebasestorage.app",
  messagingSenderId: "170767840324",
  appId: "1:170767840324:web:9e3155a53b45172b71f811",
  measurementId: "G-2LGHCRF1PK"
};

// Initialize Firebase
// Uncomment the following lines when you have your Firebase config

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

// Firebase Functions

// Function to save player data to Firebase
function savePlayerDataToFirebase(playerData) {
    return database.ref('players/' + playerData.id).set({
        name: playerData.name,
        questionsAnswered: playerData.questionsAnswered,
        correctAnswers: playerData.correctAnswers,
        last100Answers: playerData.last100Answers,
        rank: playerData.rank,
        lastUpdated: Date.now()
    });
}

// Function to load player data from Firebase
function loadPlayerDataFromFirebase(playerId) {
    return database.ref('players/' + playerId).once('value').then(snapshot => {
        return snapshot.val();
    });
}

// Function to update leaderboard in Firebase
function updateLeaderboardInFirebase(playerData) {
    const rankData = calculateRank();
    return database.ref('leaderboard/' + playerData.id).set({
        name: playerData.name,
        accuracy: rankData.accuracy,
        rank: rankData.name,
        rankClass: rankData.class,
        timestamp: Date.now()
    });
}

// Function to get leaderboard from Firebase
function getLeaderboardFromFirebase() {
    return database.ref('leaderboard').orderByChild('accuracy').limitToLast(100).once('value').then(snapshot => {
        const leaderboard = [];
        snapshot.forEach(childSnapshot => {
            leaderboard.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        return leaderboard.reverse(); // Reverse to get highest accuracy first
    });
}

// Function to listen for real-time leaderboard updates
function listenForLeaderboardUpdates(callback) {
    database.ref('leaderboard').orderByChild('accuracy').limitToLast(100).on('value', snapshot => {
        const leaderboard = [];
        snapshot.forEach(childSnapshot => {
            leaderboard.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        callback(leaderboard.reverse());
    });
}

// Function to authenticate user anonymously
function authenticateAnonymously() {
    return auth.signInAnonymously().catch(error => {
        console.error('Authentication error:', error);
    });
}

// Function to sign out
function signOut() {
    return auth.signOut();
}

// Authentication state observer
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('User is signed in:', user.uid);
        // Load user data or create new user
    } else {
        console.log('User is signed out');
        // Handle signed out state
    }
});

// Error handling
database.ref('.info/connected').on('value', snapshot => {
    if (snapshot.val() === false) {
        console.log('Not connected to Firebase');
    } else {
        console.log('Connected to Firebase');
    }
});

// Export Firebase functions for use in other scripts
if (typeof window !== 'undefined') {
    window.FirebaseFunctions = {
        savePlayerDataToFirebase,
        loadPlayerDataFromFirebase,
        updateLeaderboardInFirebase,
        getLeaderboardFromFirebase,
        listenForLeaderboardUpdates,
        authenticateAnonymously,
        signOut
    };
}

// Instructions for Firebase Setup:
/*
1. Go to https://firebase.google.com/ and create a new project
2. In the Firebase console, go to Project Settings
3. Under "Your apps", click the web icon (</>) to register a new web app
4. Copy the config object and replace the firebaseConfig object above
5. Add the Firebase scripts to your index.html:
   <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-database-compat.js"></script>
   <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-auth-compat.js"></script>
6. Enable Realtime Database in the Firebase console
7. Set up security rules for your database
8. Uncomment the Firebase initialization code above

Example Security Rules for Realtime Database:
{
  "rules": {
    "players": {
      "$playerId": {
        ".read": "auth.uid == $playerId",
        ".write": "auth.uid == $playerId"
      }
    },
    "leaderboard": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
*/
