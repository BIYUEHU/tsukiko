import { UnionParser } from './union';
import Parser from '../../parser';

export class EnumParser<T extends Parser<string | number>[]> extends UnionParser<T> {}

export default UnionParser;
