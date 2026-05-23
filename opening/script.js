const guestList = [
    "Thanuja",
    "Koshala",
    "Chami",
    "Harsha",
    "Samitha",
    "Lakmal",
    "Channa",
    "Shanel"
];

function showNameSuggestions() {
    const input = document.getElementById("guestName");
    const suggestionBox = document.getElementById("suggestions");
    const value = input.value.toLowerCase();

    suggestionBox.innerHTML = "";

    if (value.length < 4) {
        suggestionBox.style.display = "none";
        return;
    }

    const matches = guestList.filter(name =>
        name.toLowerCase().includes(value)
    );

    if (matches.length === 0) {
        suggestionBox.style.display = "none";
        return;
    }

    matches.forEach(name => {
        const item = document.createElement("div");
        item.classList.add("suggestion-item");
        item.innerText = name;

        item.onclick = () => {
            input.value = name;
            suggestionBox.style.display = "none";
        };

        suggestionBox.appendChild(item);
    });

    suggestionBox.style.display = "block";
}

function startOpening() {
    const name = document.getElementById("guestName").value.trim();

    if (!name) {
        alert("Please enter your name");
        return;
    }

    document.getElementById("nameScreen").classList.remove("active");
    document.getElementById("nameScreen").classList.add("hidden");

    document.getElementById("welcomeScreen").classList.remove("hidden");
    document.getElementById("welcomeScreen").classList.add("active");

    document.getElementById("welcomeText").innerText = `Welcome ${name} 💖`;

    startLaunchPreparation();
}

function startLaunchPreparation() {
    const steps = document.querySelectorAll(".process-step");
    const launchBtn = document.getElementById("launchBtn");
    const statusText = document.getElementById("launchStatusText");

    let currentStep = 0;

    launchBtn.classList.add("hidden");

    const stepTimer = setInterval(() => {
        steps.forEach(step => step.classList.remove("active"));

        if (steps[currentStep]) {
            steps[currentStep].classList.add("active");
        }

        currentStep++;

        if (currentStep >= steps.length) {
            clearInterval(stepTimer);

            statusText.innerText = "LOVIYA launch is ready. Press below to continue 💖";

            launchBtn.classList.remove("hidden");
        }
    }, 900);
}

function launchLoviya() {
    const name = document.getElementById("guestName").value.trim();

    document.getElementById("welcomeScreen").classList.remove("active");
    document.getElementById("welcomeScreen").classList.add("hidden");

    document.getElementById("finalScreen").classList.remove("hidden");
    document.getElementById("finalScreen").classList.add("active");

    document.getElementById("finalGuestName").innerText =
        `Special thanks, ${name} 💖`;

    if (typeof confetti === "function") {
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 160,
                spread: 130,
                origin: { y: 0.5 }
            });
        }, 700);
    }
}

function finishOpening() {
    const name = document.getElementById("guestName").value;

    alert(
        `Thank you ${name} 💖 for joining LOVIYA Grand Opening. You can now close this page.`
    );

    window.close();
}