

# Hierarchy

 [Utility](utility.md)

**↳ VersioningUtility**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new VersioningUtility**(): [VersioningUtility](versioningutility.md)

*Overrides [Utility](utility.md).[constructor](utility.md#constructor)*

*Defined in [utilities/versioning.utility.ts:6](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/versioning.utility.ts#L6)*

**Returns:** [VersioningUtility](versioningutility.md)

___

# Properties

<a id="colors"></a>

## `<Protected>` colors

**● colors**: *`any`* =  require('colors')

*Inherited from [Utility](utility.md).[colors](utility.md#colors)*

*Defined in [utilities/utility.ts:10](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L10)*

___
<a id="packagemanager"></a>

##  packageManager

**● packageManager**: *`string`* = "npm"

*Inherited from [Utility](utility.md).[packageManager](utility.md#packagemanager)*

*Defined in [utilities/utility.ts:8](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L8)*

___
<a id="repo"></a>

## `<Private>` repo

**● repo**: *[RepoInterface](../interfaces/repointerface.md)*

*Defined in [utilities/versioning.utility.ts:6](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/versioning.utility.ts#L6)*

___
<a id="utilitysettings"></a>

## `<Protected>` utilitySettings

**● utilitySettings**: *`any`* =  undefined

*Inherited from [Utility](utility.md).[utilitySettings](utility.md#utilitysettings)*

*Defined in [utilities/utility.ts:9](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L9)*

___

# Accessors

<a id="packagejson"></a>

##  packageJson

getpackageJson(): `any`

*Inherited from [Utility](utility.md).[packageJson](utility.md#packagejson)*

*Defined in [utilities/utility.ts:25](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L25)*

**Returns:** `any`

___
<a id="settings"></a>

##  settings

getsettings(): [ConfigEntity](configentity.md)setsettings(utilitySettings: *[ConfigEntity](configentity.md)*): `void`

*Inherited from [Utility](utility.md).[settings](utility.md#settings)*

*Defined in [utilities/utility.ts:34](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L34)*

**Returns:** [ConfigEntity](configentity.md)

*Inherited from [Utility](utility.md).[settings](utility.md#settings)*

*Defined in [utilities/utility.ts:38](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| utilitySettings | [ConfigEntity](configentity.md) |

**Returns:** `void`

___

# Methods

<a id="add"></a>

##  add

▸ **add**(type: *`string`*, title: *`string`*, description: *`string`*, addUncommitted?: *`boolean`*): `Promise`<`void`>

*Defined in [utilities/versioning.utility.ts:13](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/versioning.utility.ts#L13)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| type | `string` | - |
| title | `string` | - |
| description | `string` | - |
| `Default value` addUncommitted | `boolean` | false |

**Returns:** `Promise`<`void`>

___
<a id="error"></a>

## `<Protected>` error

▸ **error**(output: *`any`*): `void`

*Inherited from [Utility](utility.md).[error](utility.md#error)*

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

*Inherited from [Utility](utility.md).[output](utility.md#output)*

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

*Inherited from [Utility](utility.md).[packageInstalled](utility.md#packageinstalled)*

*Defined in [utilities/utility.ts:42](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| packageName | `string` |

**Returns:** `boolean`

___
<a id="publish"></a>

##  publish

▸ **publish**(): `Promise`<`void`>

*Defined in [utilities/versioning.utility.ts:41](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/versioning.utility.ts#L41)*

**Returns:** `Promise`<`void`>

___
<a id="run"></a>

## `<Protected>` run

▸ **run**(command: *`string`*): `Promise`<`string`>

*Inherited from [Utility](utility.md).[run](utility.md#run)*

*Defined in [utilities/utility.ts:54](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| command | `string` |

**Returns:** `Promise`<`string`>

___

