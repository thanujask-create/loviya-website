function openTerms() {
    window.location.href = "terms.html";
}

function openPrivacy() {
    window.location.href = "privacy.html";
}

function openCommunityGuidelines() {
    window.location.href = "community-guidelines.html";
}

function sendSupportMessage() {
    const name = document.getElementById("supportName").value.trim();
    const email = document.getElementById("supportEmail").value.trim();
    const message = document.getElementById("supportMessage").value.trim();

    if (!name || !email || !message) {
        alert("Please fill your name, email address, and message.");
        return;
    }

    const subject = encodeURIComponent("LOVIYA Support Request");

    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nProblem:\n${message}`
    );

    alert(
        "Thank you for contacting LOVIYA Support 💖\n\nOur team will review your message and get back to you within 48 hours."
    );

    window.location.href =
        `mailto:loviyaapp@gmail.com?subject=${subject}&body=${body}`;
}