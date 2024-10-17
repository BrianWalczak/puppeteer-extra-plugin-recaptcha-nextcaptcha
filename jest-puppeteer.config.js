require("dotenv/config");

const puppeteer = require("puppeteer-extra");
const { default: RecaptchaPlugin, BuiltinSolutionProviders } = require("puppeteer-extra-plugin-recaptcha");
const NextCaptchaProvider = require("./dist/index.cjs.js");

NextCaptchaProvider.use(BuiltinSolutionProviders);

puppeteer.use(
	RecaptchaPlugin({
		provider: {
			id: "nextcaptcha",
			token: process.env.NEXTCAPTCHA_KEY
		},
		visualFeedback: true
	})
);

if (!process.env.NEXTCAPTCHA_KEY) {
	console.error('\nNEXTCAPTCHA_KEY not set in ".env"');
	process.exit();
}

// Change jest-puppeteer "puppeteer" to "puppeteer-extra"
require.cache[require.resolve("puppeteer")] = require.cache[require.resolve("puppeteer-extra")];

module.exports = {};
