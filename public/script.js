let container = document.getElementById('container');

// Add event listeners for the buttons
document.getElementById('register').addEventListener('click', () => {
    container.classList.add('active'); // Add 'active' to slide to the sign-up form
});

document.getElementById('login').addEventListener('click', () => {
    container.classList.remove('active'); // Remove 'active' to slide back to the sign-in form
});

// Initial state: Set the form to the sign-in view
setTimeout(() => {
    container.classList.add('sign-in');
}, 200);


function logout() {
    firebase.auth().signOut().then(() => {
        localStorage.clear(); // Clear localStorage if needed
        sessionStorage.clear(); // Clear session storage
        window.location.href = 'homepage.html';
    });
}
function checkAuth() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            window.location.href = 'homepage.html'; // Redirect if user not logged in
        }
    });
}
// Call this function in every restricted HTML page
checkAuth();
window.addEventListener('popstate', () => {
    firebase.auth().signOut().then(() => {
        window.location.href = 'homepage.html';
    });
});
