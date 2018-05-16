

# Hierarchy

**Application**

↳  [MinervaRepoBranch](minervarepobranch.md)

↳  [MinervaRepo](minervarepo.md)

↳  [MinervaVersioning](minervaversioning.md)

↳  [Minerva](minerva.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Application**(commander?: *`any`*): [Application](application.md)

*Defined in [utilities/application.ts:24](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L24)*

The constructer allows a commander instance to be passed, if none is given a new commander instance is created. Then it proceeds to set the version number, description and then boots any required commands from the class extending this abstract. Finally is parses any given arguments.

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` commander | `any` |  undefined |   |

**Returns:** [Application](application.md)

___

# Properties

<a id="applicationcommander"></a>

## `<Private>` applicationCommander

**● applicationCommander**: *`any`* =  undefined

*Defined in [utilities/application.ts:24](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L24)*

Holds the commander object used to handle CLI based commands.
*__type__*: {undefined}

___
<a id="description"></a>

## `<Abstract>` description

**● description**: *`any`*

*Defined in [utilities/application.ts:18](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L18)*

The description of the current application.

___
<a id="version"></a>

##  version

**● version**: *`string`* =  undefined

*Defined in [utilities/application.ts:13](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L13)*

The version number of the Minerva application.
*__type__*: {undefined}

___

# Accessors

<a id="commander"></a>

## `<Protected>` commander

getcommander(): `any`

*Defined in [utilities/application.ts:65](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L65)*

Returns the commander object used to create CLI based commands.

**Returns:** `any`

___
<a id="packagejson"></a>

##  packageJson

getpackageJson(): `any`

*Defined in [utilities/application.ts:49](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L49)*

Returns the content of the Minerva package.json file appropriately converted to a JSON object for easy manipulation.

**Returns:** `any`

___

# Methods

<a id="ask"></a>

## `<Protected>` ask

▸ **ask**(questions: *[QuestionEntity](questionentity.md)[]*): `Promise`<`any`>

*Defined in [utilities/application.ts:84](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L84)*

Adds the ability to ask a collection of questions which can then be referenced to and passed through to an appropriate utility.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| questions | [QuestionEntity](questionentity.md)[] |  - |

**Returns:** `Promise`<`any`>

___
<a id="boot"></a>

## `<Protected>``<Abstract>` boot

▸ **boot**(): `Promise`<`void`>

*Defined in [utilities/application.ts:75](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L75)*

An method that is called on the class extending this abstract which will boot up any appropriate commands required for Minerva to function.

**Returns:** `Promise`<`void`>

___
<a id="setversionanddescription"></a>

## `<Private>` setVersionAndDescription

▸ **setVersionAndDescription**(): `void`

*Defined in [utilities/application.ts:93](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/application.ts#L93)*

Sets the version of Minerva directly from the package.json to ensure the version is always correct. The description is set from an abstract property set on the class extending this abstract.

**Returns:** `void`

___

