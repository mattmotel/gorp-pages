document.addEventListener('DOMContentLoaded', function() {
    const scannerDisplay = document.querySelector('.scanner-display');
    const scanButton = document.querySelector('.news-button');
    const fontSample = document.querySelector('.font-sample');
    const resultsPanel = document.querySelector('.scan-results');
    const scanDetails = document.querySelector('.scan-details');

    // Prohibited fonts from STORY.md
    const prohibitedFonts = [
        {
            name: "Comic Sans MS",
            threat: "SEVERE",
            threatClass: "threat-severe",
            violation: "Class-1 Typography Violation",
            description: "Known PROG™ resistance font. Highly infectious."
        },
        {
            name: "Papyrus",
            threat: "CRITICAL", 
            threatClass: "threat-critical",
            violation: "Ancient Contraband Typography",
            description: "Pre-GORP™ hieroglyphic insurgency material"
        },
        {
            name: "Helvetica",
            threat: "EXTREME",
            threatClass: "threat-extreme",
            violation: "Anti-GORP™ Typography",
            description: "Underground resistance typeface. Maximum alert."
        },
        {
            name: "Times New Roman",
            threat: "HIGH",
            threatClass: "threat-high",
            violation: "Legacy Serif Possession",
            description: "Unauthorized historical font stockpiling"
        },
        {
            name: "Wingdings",
            threat: "CRITICAL",
            threatClass: "threat-critical",
            violation: "Encrypted Resistance Communication",
            description: "Suspected rebel code system. Report immediately."
        },
        {
            name: "Arial",
            threat: "SEVERE",
            threatClass: "threat-severe",
            violation: "Helvetica-Adjacent Violation",
            description: "Known association with Helvetica Underground"
        },
        {
            name: "Impact",
            threat: "EXTREME",
            threatClass: "threat-extreme",
            violation: "Propaganda Font Detection",
            description: "Used in anti-GORP™ meme distribution"
        },
        {
            name: "Courier New",
            threat: "HIGH",
            threatClass: "threat-high",
            violation: "Typewriter Emulation",
            description: "Pre-digital subversion attempt detected"
        }
    ];

    // Set initial random font
    let currentFont = prohibitedFonts[Math.floor(Math.random() * prohibitedFonts.length)];
    fontSample.style.fontFamily = currentFont.name;

    scanButton.addEventListener('click', function() {
        // Start scan
        scanButton.disabled = true;
        scanButton.textContent = 'SCANNING...';
        resultsPanel.style.display = 'none';
        scannerDisplay.classList.add('scanning');

        // Scan animation duration
        setTimeout(() => {
            completeScan();
        }, 2000);
    });

    function completeScan() {
        // End scan animation
        scannerDisplay.classList.remove('scanning');
        scanButton.disabled = false;
        scanButton.textContent = 'INITIATE SCAN';

        // Generate violation report
        scanDetails.innerHTML = `
            <div class="violation-type ${currentFont.threatClass}" data-label="VIOLATION TYPE">
                ${currentFont.violation}
            </div>
            <div class="threat-level ${currentFont.threatClass}" data-label="THREAT LEVEL">
                ${currentFont.threat}
            </div>
            <div class="font-details ${currentFont.threatClass}" data-label="DETECTED FONT">
                ${currentFont.name}<br>
                ${currentFont.description}
            </div>
            <div class="action-required ${currentFont.threatClass}">
                ACTION REQUIRED: Report to nearest F.R.I.E.S. Office
                <br>
                <small>(Federal Registry of Illicit Enforcement & Surveillance)</small>
            </div>
        `;

        // Show results
        resultsPanel.style.display = 'block';

        // Queue next font
        setTimeout(() => {
            currentFont = prohibitedFonts[Math.floor(Math.random() * prohibitedFonts.length)];
            fontSample.style.fontFamily = currentFont.name;
        }, 1000);
    }
});