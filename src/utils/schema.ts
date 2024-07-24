import { type JsonSchema, Parser, type SchemaMetadata } from '..'

const SCHEMA_METADATA_KEY = Symbol('json-schema')

export function setSchemaMeta(parser: Parser<unknown>, metadata: SchemaMetadata) {
  Reflect.defineMetadata(SCHEMA_METADATA_KEY, { ...getSchemaMeta(parser), ...metadata }, parser)
}

export function getSchemaMeta(parser: Parser<unknown>): SchemaMetadata {
  return Reflect.getMetadata(SCHEMA_METADATA_KEY, parser) ?? {}
}

export function generateSchema(origin: SchemaMetadata | Parser<unknown>) {
  const meta = origin instanceof Parser ? getSchemaMeta(origin) : origin
  if (!meta.type) return {}

  const schema: JsonSchema = {}
  if (meta.description !== undefined) schema.description = meta.description
  if (meta.title !== undefined) schema.title = meta.title
  if (meta.default !== undefined) schema.default = meta.default

  if (typeof meta.type !== 'string') {
    if ('enum' in meta.type) {
      schema.enum = meta.type.enum
      return schema
    }

    if ('const' in meta.type) {
      schema.const = meta.type.const
      return schema
    }

    schema[meta.type.mode] = meta.type.items.map(generateSchema)
    return schema
  }

  schema.type = meta.type

  if (['boolean', 'null'].includes(meta.type)) return schema

  if (meta.type === 'string') {
    if (meta.pattern) schema.pattern = String(meta.pattern).substring(1, String(meta.pattern).length - 1)
    if (meta.maxItems) schema.maxLength = meta.maxItems
    if (meta.minItems) schema.minLength = meta.minItems
    return schema
  }

  if (['number', 'integer'].includes(meta.type)) {
    if (meta.maximum) {
      if (meta.exclusiveMax) schema.exclusiveMaximum = meta.maximum
      else schema.maximum = meta.maximum
    }
    if (meta.minimum) {
      if (meta.exclusiveMin) schema.exclusiveMinimum = meta.minimum
      else schema.minimum = meta.minimum
    }
    if (meta.multipleOf) schema.multipleOf = meta.multipleOf
    return schema
  }

  if (meta.type === 'array') {
    if (meta.maxItems) schema.maxItems = meta.maxItems
    if (meta.minItems) schema.minItems = meta.minItems
    if (meta.items && (typeof meta.items === 'string' || Array.isArray(meta.items))) {
      schema.items = Array.isArray(meta.items) ? meta.items.map(generateSchema) : meta.items
    }
    return schema
  }

  if (meta.additionalProperties) schema.additionalItems = meta.additionalProperties
  if (typeof meta.items === 'object' && !Array.isArray(meta.items)) {
    schema.required = []
    for (const [key, value] of Object.entries(meta.items as Record<string, SchemaMetadata>)) {
      if (key === '*') schema.patternProperties = { '*': generateSchema(value) }
      else schema.properties = { ...schema.properties, [key]: generateSchema(value) }
      if (!value.optional) schema.required.push(key)
    }
  }
  return schema
}
