

# Hierarchy

**Utility**

↳  [GithubUtility](githubutility.md)

↳  [VersioningUtility](versioningutility.md)

↳  [MinervaUtility](minervautility.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Utility**(): [Utility](utility.md)

*Defined in [utilities/utility.ts:10](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L10)*

**Returns:** [Utility](utility.md)

___

# Properties

<a id="colors"></a>

## `<Protected>` colors

**● colors**: *`any`* =  require('colors')

*Defined in [utilities/utility.ts:10](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L10)*

___
<a id="packagemanager"></a>

##  packageManager

**● packageManager**: *`string`* = "npm"

*Defined in [utilities/utility.ts:8](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L8)*

___
<a id="utilitysettings"></a>

## `<Protected>` utilitySettings

**● utilitySettings**: *`any`* =  undefined

*Defined in [utilities/utility.ts:9](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L9)*

___

# Accessors

<a id="packagejson"></a>

##  packageJson

getpackageJson(): `any`

*Defined in [utilities/utility.ts:25](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L25)*

**Returns:** `any`

___
<a id="settings"></a>

##  settings

getsettings(): [ConfigEntity](configentity.md)setsettings(utilitySettings: *[ConfigEntity](configentity.md)*): `void`

*Defined in [utilities/utility.ts:34](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L34)*

**Returns:** [ConfigEntity](configentity.md)

*Defined in [utilities/utility.ts:38](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| utilitySettings | [ConfigEntity](configentity.md) |

**Returns:** `void`

___

# Methods

<a id="error"></a>

## `<Protected>` error

▸ **error**(output: *`any`*): `void`

*Defined in [utilities/utility.ts:50](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| output | `any` |

**Returns:** `void`

___
<a id="output"></a>

## `<Protected>` output

▸ **output**(output: *`any`*): `void`

*Defined in [utilities/utility.ts:46](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| output | `any` |

**Returns:** `void`

___
<a id="packageinstalled"></a>

##  packageInstalled

▸ **packageInstalled**(packageName: *`string`*): `boolean`

*Defined in [utilities/utility.ts:42](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| packageName | `string` |

**Returns:** `boolean`

___
<a id="run"></a>

## `<Protected>` run

▸ **run**(command: *`string`*): `Promise`<`string`>

*Defined in [utilities/utility.ts:54](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| command | `string` |

**Returns:** `Promise`<`string`>

___

