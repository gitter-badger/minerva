

# Hierarchy

 [Application](application.md)

**↳ Minerva**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Minerva**(commander?: *`any`*): [Minerva](minerva.md)

*Inherited from [Application](application.md).[constructor](application.md#constructor)*

*Defined in [utilities/application.ts:24](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L24)*

The constructer allows a commander instance to be passed, if none is given a new commander instance is created. Then it proceeds to set the version number, description and then boots any required commands from the class extending this abstract. Finally is parses any given arguments.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` commander | `any` |  undefined |   |

**Returns:** [Minerva](minerva.md)

___

# Properties

<a id="description"></a>

##  description

**● description**: *`string`* = ""

*Overrides [Application](application.md).[description](application.md#description)*

*Defined in [controllers/minerva.ts:8](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/controllers/minerva.ts#L8)*

___
<a id="version"></a>

##  version

**● version**: *`string`* =  undefined

*Inherited from [Application](application.md).[version](application.md#version)*

*Defined in [utilities/application.ts:13](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L13)*

The version number of the Minerva application.
*__type__*: {undefined}

___

# Accessors

<a id="commander"></a>

## `<Protected>` commander

getcommander(): `any`

*Inherited from [Application](application.md).[commander](application.md#commander)*

*Defined in [utilities/application.ts:65](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L65)*

Returns the commander object used to create CLI based commands.

**Returns:** `any`

___
<a id="packagejson"></a>

##  packageJson

getpackageJson(): `any`

*Inherited from [Application](application.md).[packageJson](application.md#packagejson)*

*Defined in [utilities/application.ts:49](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L49)*

Returns the content of the Minerva package.json file appropriately converted to a JSON object for easy manipulation.

**Returns:** `any`

___

# Methods

<a id="ask"></a>

## `<Protected>` ask

▸ **ask**(questions: *[QuestionEntity](questionentity.md)[]*): `Promise`<`any`>

*Inherited from [Application](application.md).[ask](application.md#ask)*

*Defined in [utilities/application.ts:84](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L84)*

Adds the ability to ask a collection of questions which can then be referenced to and passed through to an appropriate utility.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| questions | [QuestionEntity](questionentity.md)[] |  - |

**Returns:** `Promise`<`any`>

___
<a id="boot"></a>

## `<Protected>` boot

▸ **boot**(): `Promise`<`void`>

*Overrides [Application](application.md).[boot](application.md#boot)*

*Defined in [controllers/minerva.ts:10](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/controllers/minerva.ts#L10)*

**Returns:** `Promise`<`void`>

___

