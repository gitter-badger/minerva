

# Hierarchy

**RepoInterface**

# Implemented by

* [GithubUtility](../classes/githubutility.md)

# Methods

<a id="addall"></a>

##  addAll

▸ **addAll**(): `Promise`<`string`>

*Defined in [interfaces/repo.interface.ts:2](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/interfaces/repo.interface.ts#L2)*

**Returns:** `Promise`<`string`>

___
<a id="checkout"></a>

##  checkout

▸ **checkout**(branchName: *`string`*): `Promise`<`string`>

*Defined in [interfaces/repo.interface.ts:17](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/interfaces/repo.interface.ts#L17)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| branchName | `string` |

**Returns:** `Promise`<`string`>

___
<a id="commit"></a>

##  commit

▸ **commit**(title: *`string`*, description?: *`string`*, options?: *`string`[]*): `Promise`<`string`>

*Defined in [interfaces/repo.interface.ts:4](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/interfaces/repo.interface.ts#L4)*

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

*Defined in [interfaces/repo.interface.ts:24](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/interfaces/repo.interface.ts#L24)*

Creates a new branch with the given name from master or a specified branch.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| branchName | `string` |  - |
| `Optional` from | `string` |   |

**Returns:** `Promise`<`string`>

___
<a id="mergein"></a>

##  mergeIn

▸ **mergeIn**(from?: *`string`*, to?: *`string`*): `Promise`<`string`>

*Defined in [interfaces/repo.interface.ts:32](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/interfaces/repo.interface.ts#L32)*

Merges a specified branch or master into the current branch or a specified one.

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

*Defined in [interfaces/repo.interface.ts:40](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/interfaces/repo.interface.ts#L40)*

Merges the current branch, or a specified one, into another branch.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| to | `string` |  - |
| `Optional` from | `string` |   |

**Returns:** `Promise`<`string`>

___
<a id="pull"></a>

##  pull

▸ **pull**(): `Promise`<`string`>

*Defined in [interfaces/repo.interface.ts:15](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/interfaces/repo.interface.ts#L15)*

Pulls the latest changes for the current branch

**Returns:** `Promise`<`string`>

___
<a id="push"></a>

##  push

▸ **push**(): `Promise`<`string`>

*Defined in [interfaces/repo.interface.ts:42](https://github.com/sisk-technology-group-ltd/minerva/blob/f058e4b/src/interfaces/repo.interface.ts#L42)*

**Returns:** `Promise`<`string`>

___

