const puppeteer = require("puppeteer");

async function generateScreenshot(url, outputPath, newH1Content) {
    // Launch a new browser instance
    const browser = await puppeteer.launch();
    // Create a new page
    const page = await browser.newPage();

    // Set the viewport size to 1200x630
    await page.setViewport({ width: 1200, height: 630 });

    // Navigate to the desired URL
    await page.goto(url);

    // Update the h1 content if provided
    if (newH1Content) {
        await page.evaluate((newContent) => {
            const element = document.getElementById("h1");
            if (element) {
                element.innerHTML = newContent;
            }
        }, newH1Content);
    }

    // Take a screenshot and save it as the specified output path
    await page.screenshot({ path: outputPath });

    // Close the browser
    await browser.close();

}

module.exports = { generateScreenshot };

// Usage example (uncomment to use directly)
// generateScreenshot("http://localhost:3000/og", "ss.png", "New Content for h1");
