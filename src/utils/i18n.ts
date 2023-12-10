import Locale from '../modules/i18n';
import enUS from '../lang/en_US';
import jaJP from '../lang/ja_JP';
import zhTW from '../lang/zh_TW';
import zhCN from '../lang/zh_CN';

export const i18n = new Locale();

i18n.use({ type: 'en_US', locales: enUS });
i18n.use({ type: 'ja_JP', locales: jaJP });
i18n.use({ type: 'zh_TW', locales: zhTW });
i18n.use({ type: 'zh_CN', locales: zhCN });

export default i18n;
