// Database Functions
function getUsers() {
    return JSON.parse(localStorage.getItem('earnUsers')) || [];
}

function saveUsers(users) {
    localStorage.setItem('earnUsers', JSON.stringify(users));
}

function getCurrentUser() {
    const username = localStorage.getItem('currentUser');
    if (!username) return null;
    const users = getUsers();
    return users.find(u => u.username === username);
}

function updateCurrentUser(updatedData) {
    let users = getUsers();
    let index = users.findIndex(u => u.username === updatedData.username);
    if (index !== -1) {
        users[index] = { ...users[index], ...updatedData };
        saveUsers(users);
    }
}

function requireAuth() {
    if (!getCurrentUser()) window.location.href = 'login.html';
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}
