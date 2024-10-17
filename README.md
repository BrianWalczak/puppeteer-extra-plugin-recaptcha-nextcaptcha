# NextCaptcha Provider | Plugin 

> An add-on plugin for `puppeteer-extra-plugin-recaptcha`, a library to solve reCAPTCHAs and hCaptchas automatically, with support for [NextCaptcha](https://nextcaptcha.com).

![](https://i.imgur.com/SWrIQw0.gif)

### Installation
To install this plugin for Puppeteer, run the following commands:

```bash
npm i puppeteer-extra-plugin-recaptcha # install initial plugin
npm i puppeteer-extra-plugin-recaptcha-nextcaptcha # install for NextCaptcha support
```

### Usage
To utilize NextCaptcha support, you'll need to utilize the `BuiltinSolutionProviders` object from the `puppeteer-extra-plugin-recaptcha` library.

```js
const puppeteer = require("puppeteer-extra");
const { default: RecaptchaPlugin, BuiltinSolutionProviders } = require("puppeteer-extra-plugin-recaptcha");
const NextCaptchaProvider = require("puppeteer-extra-plugin-recaptcha-nextcaptcha");

NextCaptchaProvider.use(BuiltinSolutionProviders); // Utilize the available solution providers

puppeteer.use(
	RecaptchaPlugin({
		provider: {
			id: "nextcaptcha",
			token: "XXXXXXX" // REPLACE THIS WITH YOUR OWN NEXTCAPTCHA API KEY ⚡
		},
		visualFeedback: true // colorize reCAPTCHAs (violet = detected, green = solved)
	})
);

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async (browser) => {
	const page = await browser.newPage();
	await page.goto("https://www.google.com/recaptcha/api2/demo");

	// That's it, a single line of code to solve reCAPTCHAs 🎉
	await page.solveRecaptchas();

	await Promise.all([page.waitForNavigation(), page.click(`#recaptcha-demo-submit`)]);
	await page.screenshot({ path: "response.png", fullPage: true });
	await browser.close();
});
```

## Authors

-   Huge thanks to [berstend](https://github.com/berstend) for the original `puppeteer-extra` plugins.
-   Thanks to [notsapinho](https://github.com/notsapinho) for the forked template of the CapMonster provider.
- This project is a fork of `puppeteer-extra-plugin-recaptcha-capsolver`.