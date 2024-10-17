import * as NextCaptcha from "./provider/nextcaptcha";

import * as types from "./types/plugin";

class Plugin {
	static use(providers: types.SolutionProvider[]) {
		providers.push({ id: NextCaptcha.PROVIDER_ID, fn: NextCaptcha.getSolutions });
	}
}

export default Plugin;
