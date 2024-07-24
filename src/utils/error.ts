import type { Langs, langType } from '../types'
import i18n from './i18n'

function stringTemp(template: string, args: { [propName: string]: string | number }) {
  const params = args
  let templateString = template
  if (!params || typeof params !== 'object') return templateString

  for (const param in params) {
    if (typeof params[param] !== 'string' && typeof args[param] !== 'number') params[param] = ''
    if (params[param]?.toString instanceof Function) params[param] = (params[param] as number).toString()
    templateString = templateString.replace(new RegExp(`%${param}%`, 'g'), params[param] as string)
  }
  return templateString
}

export class TsuError extends Error {
  public constructor(type: langType, str: Langs, data?: Parameters<typeof stringTemp>[1]) {
    const result = i18n.locale(str, type)
    super(data ? stringTemp(result, data) : result)
  }
}

export default TsuError
