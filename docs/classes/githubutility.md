

# Hierarchy

 [Utility](utility.md)

**↳ GithubUtility**

# Implements

* [RepoInterface](../interfaces/repointerface.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new GithubUtility**(): [GithubUtility](githubutility.md)

*Inherited from [Utility](utility.md).[constructor](utility.md#constructor)*

*Defined in [utilities/utility.ts:10](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/utility.ts#L10)*

**Returns:** [GithubUtility](githubutility.md)

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

<a id="addall"></a>

##  addAll

▸ **addAll**(): `Promise`<`string`>

*Implementation of [RepoInterface](../interfaces/repointerface.md).[addAll](../interfaces/repointerface.md#addall)*

*Defined in [utilities/github.utility.ts:31](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L31)*

**Returns:** `Promise`<`string`>

___
<a id="checkout"></a>

##  checkout

▸ **checkout**(branchName: *`string`*): `Promise`<`string`>

*Implementation of [RepoInterface](../interfaces/repointerface.md).[checkout](../interfaces/repointerface.md#checkout)*

*Defined in [utilities/github.utility.ts:55](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L55)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| branchName | `string` |

**Returns:** `Promise`<`string`>

___
<a id="commit"></a>

##  commit

▸ **commit**(title: *`string`*, description?: *`string`*, options?: *`string`[]*): `Promise`<`string`>

*Implementation of [RepoInterface](../interfaces/repointerface.md).[commit](../interfaces/repointerface.md#commit)*

*Defined in [utilities/github.utility.ts:17](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| title | `string` |
| `Optional` description | `string` |
| `Optional` options | `string`[] |

**Returns:** `Promise`<`string`>

___
<a id="createbranch"></a>

##  createBranch

▸ **createBranch**(branchName: *`string`*, from?: *`string`*): `Promise`<`string`>

*Implementation of [RepoInterface](../interfaces/repointerface.md).[createBranch](../interfaces/repointerface.md#createbranch)*

*Defined in [utilities/github.utility.ts:71](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L71)*

Creates a new branch with the given name from master or a specified branch.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| branchName | `string` |  - |
| `Optional` from | `string` |   |

**Returns:** `Promise`<`string`>

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
<a id="getcurrentbranch"></a>

## `<Protected>` getCurrentBranch

▸ **getCurrentBranch**(): `Promise`<`string`>

*Defined in [utilities/github.utility.ts:125](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L125)*

**Returns:** `Promise`<`string`>

___
<a id="mergein"></a>

##  mergeIn

▸ **mergeIn**(from?: *`string`*, to?: *`string`*): `Promise`<`string`>

*Implementation of [RepoInterface](../interfaces/repointerface.md).[mergeIn](../interfaces/repointerface.md#mergein)*

*Defined in [utilities/github.utility.ts:96](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L96)*

Merges a specified branch into the current branch or a specified one.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` from | `string` |   |
| `Optional` to | `string` |  - |

**Returns:** `Promise`<`string`>

___
<a id="mergeout"></a>

##  mergeOut

▸ **mergeOut**(to: *`string`*, from?: *`string`*): `Promise`<`string`>

*Implementation of [RepoInterface](../interfaces/repointerface.md).[mergeOut](../interfaces/repointerface.md#mergeout)*

*Defined in [utilities/github.utility.ts:116](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L116)*

Merges the current branch, or a specified one, into another branch.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| to | `string` |  - |
| `Optional` from | `string` |   |

**Returns:** `Promise`<`string`>

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
<a id="outputbranch"></a>

##  outputBranch

▸ **outputBranch**(): `Promise`<`void`>

*Defined in [utilities/github.utility.ts:11](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L11)*

**Returns:** `Promise`<`void`>

___
<a id="outputcheckout"></a>

##  outputCheckout

▸ **outputCheckout**(branchName: *`string`*): `Promise`<`void`>

*Defined in [utilities/github.utility.ts:50](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| branchName | `string` |

**Returns:** `Promise`<`void`>

___
<a id="outputcreatebranch"></a>

##  outputCreateBranch

▸ **outputCreateBranch**(branchName: *`string`*, from?: *`string`*): `Promise`<`void`>

*Defined in [utilities/github.utility.ts:59](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| branchName | `string` |
| `Optional` from | `string` |

**Returns:** `Promise`<`void`>

___
<a id="outputmergein"></a>

##  outputMergeIn

▸ **outputMergeIn**(from?: *`string`*, to?: *`string`*): `Promise`<`void`>

*Defined in [utilities/github.utility.ts:86](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` from | `string` |
| `Optional` to | `string` |

**Returns:** `Promise`<`void`>

___
<a id="outputmergeout"></a>

##  outputMergeOut

▸ **outputMergeOut**(to: *`string`*, from?: *`string`*): `Promise`<`void`>

*Defined in [utilities/github.utility.ts:106](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L106)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| to | `string` |
| `Optional` from | `string` |

**Returns:** `Promise`<`void`>

___
<a id="outputpull"></a>

##  outputPull

▸ **outputPull**(): `Promise`<`void`>

*Defined in [utilities/github.utility.ts:35](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L35)*

**Returns:** `Promise`<`void`>

___
<a id="outputstatus"></a>

##  outputStatus

▸ **outputStatus**(): `Promise`<`void`>

*Defined in [utilities/github.utility.ts:7](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L7)*

**Returns:** `Promise`<`void`>

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
<a id="pull"></a>

##  pull

▸ **pull**(): `Promise`<`string`>

*Implementation of [RepoInterface](../interfaces/repointerface.md).[pull](../interfaces/repointerface.md#pull)*

*Defined in [utilities/github.utility.ts:46](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L46)*

Pulls the latest changes for the current branch

**Returns:** `Promise`<`string`>

___
<a id="push"></a>

##  push

▸ **push**(): `Promise`<`string`>

*Implementation of [RepoInterface](../interfaces/repointerface.md).[push](../interfaces/repointerface.md#push)*

*Defined in [utilities/github.utility.ts:25](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/utilities/github.utility.ts#L25)*

**Returns:** `Promise`<`string`>

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

