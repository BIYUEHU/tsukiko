import type { langType } from '../types';

export const DEFAULT_LANG: langType = 'en_US';

export class Lang {
	protected langType = DEFAULT_LANG;

	public lang(value: langType = DEFAULT_LANG) {
		this.langType = value;
		return this;
	}
}

export default Lang;
