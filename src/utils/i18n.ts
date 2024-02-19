import Locale from '@kotori-bot/i18n';
import enUS from '../lang/en_US';
import jaJP from '../lang/ja_JP';
import zhTW from '../lang/zh_TW';
import zhCN from '../lang/zh_CN';

export const i18n = new Locale();

i18n.use(enUS, 'en_US');
i18n.use(jaJP, 'ja_JP');
i18n.use(zhTW, 'zh_TW');
i18n.use(zhCN, 'zh_CN');

export default i18n;
