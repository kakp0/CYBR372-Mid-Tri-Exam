// Rank Icon Utility
// This file provides utilities for handling rank icons

// Function to get rank icon path
function getRankIconPath(rankName) {
    // Convert rank name to lowercase and replace spaces with underscores
    const fileName = rankName.toLowerCase().replace(/\s+/g, '_');
    return `/rank-icons/${fileName}.png`;
}

// Function to get rank icon element
function getRankIconElement(rankName, rankClass, size = 'w-40 h-40') {
    const iconPath = getRankIconPath(rankName);
    
    // Try to use PNG icon first, fallback to emoji
    return `
        <img 
            src="${iconPath}" 
            alt="${rankName}" 
            class="${size} rounded-full object-cover shadow-2xl border-4 border-white/20"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="${size} rounded-full flex items-center justify-center text-7xl shadow-2xl ${rankClass} border-4 border-white/20" style="display: none;">
            ${getRankEmoji(rankName)}
        </div>
    `;
}

// Function to get rank emoji (fallback)
function getRankEmoji(rankName) {
    const emojiMap = {
        'Bronze 1': '🥉',
        'Bronze 2': '🥉',
        'Bronze 3': '🥉',
        'Silver 1': '🥈',
        'Silver 2': '🥈',
        'Silver 3': '🥈',
        'Gold 1': '🥇',
        'Gold 2': '🥇',
        'Gold 3': '🥇',
        'Platinum 1': '🏆',
        'Platinum 2': '🏆',
        'Platinum 3': '🏆',
        'Diamond 1': '💎',
        'Diamond 2': '💎',
        'Diamond 3': '💎',
        'Champion 1': '🏅',
        'Champion 2': '🏅',
        'Champion 3': '🏅',
        'Grand Champion 1': '👑',
        'Grand Champion 2': '👑',
        'Grand Champion 3': '👑',
        'SSL': '🌟'
    };
    
    return emojiMap[rankName] || '🎯';
}

// Function to preload rank icons
function preloadRankIcons() {
    const rankNames = [
        'Bronze 1', 'Bronze 2', 'Bronze 3',
        'Silver 1', 'Silver 2', 'Silver 3',
        'Gold 1', 'Gold 2', 'Gold 3',
        'Platinum 1', 'Platinum 2', 'Platinum 3',
        'Diamond 1', 'Diamond 2', 'Diamond 3',
        'Champion 1', 'Champion 2', 'Champion 3',
        'Grand Champion 1', 'Grand Champion 2', 'Grand Champion 3',
        'SSL'
    ];
    
    rankNames.forEach(rankName => {
        const img = new Image();
        img.src = getRankIconPath(rankName);
    });
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getRankIconPath,
        getRankIconElement,
        getRankEmoji,
        preloadRankIcons
    };
} else if (typeof window !== 'undefined') {
    window.RankIconUtils = {
        getRankIconPath,
        getRankIconElement,
        getRankEmoji,
        preloadRankIcons
    };
}