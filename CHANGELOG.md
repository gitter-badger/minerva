# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.6.6"></a>
## [0.6.6](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.6.5...v0.6.6) (2018-05-11)


### Bug Fixes

* **settings check:** Before loading a package manager from the settings file we first check to make sure that settings are loaded into memory. ([dbe4184](https://github.com/sisk-technology-group-ltd/minerva/commit/dbe4184))



<a name="0.6.5"></a>
## [0.6.5](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.6.4...v0.6.5) (2018-05-10)



<a name="0.6.4"></a>
## [0.6.4](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.6.3...v0.6.4) (2018-05-09)


### Bug Fixes

* **auto build:** Moved the auto build section so auto build takes place when adding a new version ([705d492](https://github.com/sisk-technology-group-ltd/minerva/commit/705d492))



<a name="0.6.3"></a>
## [0.6.3](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.6.2...v0.6.3) (2018-05-08)


### Bug Fixes

* **package manager:** Corrected the options from a type of 'choice' to a type of 'list' ([116faab](https://github.com/sisk-technology-group-ltd/minerva/commit/116faab))



<a name="0.6.2"></a>
## [0.6.2](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.6.1...v0.6.2) (2018-05-08)


### Bug Fixes

* **package manager:** Allowed the option to choose a package manager when initing an application. ([5c0057f](https://github.com/sisk-technology-group-ltd/minerva/commit/5c0057f))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.6.0...v0.6.1) (2018-05-08)


### Bug Fixes

* **build output:** The output from the autobuild is now logged to the console ([598d7e7](https://github.com/sisk-technology-group-ltd/minerva/commit/598d7e7))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.5.0...v0.6.0) (2018-05-08)


### Features

* **auto build:** There is now an option to automatically run the build script before publishing any new versions. ([dcb995a](https://github.com/sisk-technology-group-ltd/minerva/commit/dcb995a))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.4.1...v0.5.0) (2018-05-08)


### Features

* **checkout branch:** Added the ability to create a new branch from master or a specified branch ([98d11d1](https://github.com/sisk-technology-group-ltd/minerva/commit/98d11d1))
* **git pull:** Added the ability to do a git pull ([df88922](https://github.com/sisk-technology-group-ltd/minerva/commit/df88922))
* **merging:** Added the ability to merge in and out between branches ([60052c8](https://github.com/sisk-technology-group-ltd/minerva/commit/60052c8))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.4.0...v0.4.1) (2018-05-08)


### Bug Fixes

* **uncommitted command:** The command to add uncommitted files was in the publish command but should have been in the versioning command. This has now been moved to the appropriate place. ([71d9de0](https://github.com/sisk-technology-group-ltd/minerva/commit/71d9de0))
* **uncommitted files:** The value from the options to add all uncommitted files was not passing through ([4c6003d](https://github.com/sisk-technology-group-ltd/minerva/commit/4c6003d))



<a name="0.4.0"></a>
# [0.4.0](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.3.0...v0.4.0) (2018-05-08)


### Features

* **add uncommitted:** Ability to add all uncommitted files to the repository. ([46652b7](https://github.com/sisk-technology-group-ltd/minerva/commit/46652b7))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.2.6...v0.3.0) (2018-05-08)


### Features

* **choices:** Added the ability to choose from a list of types when adding a new version. ([90c62d9](https://github.com/sisk-technology-group-ltd/minerva/commit/90c62d9))
* **init script:** The init script now generates a valid .minerva.json file with the appropriate settings. ([f8d3f30](https://github.com/sisk-technology-group-ltd/minerva/commit/f8d3f30))



<a name="0.2.6"></a>
## [0.2.6](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.2.5...v0.2.6) (2018-05-08)



<a name="0.2.5"></a>
## [0.2.5](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.2.4...v0.2.5) (2018-05-08)


### Bug Fixes

* **object output:** The utility abstract was outputting settings to the console.log this has now been removed. ([db09057](https://github.com/sisk-technology-group-ltd/minerva/commit/db09057))
* **version number:** Fixed the directory for the version number pull ([3d9d19e](https://github.com/sisk-technology-group-ltd/minerva/commit/3d9d19e))



<a name="0.2.4"></a>
## [0.2.4](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.2.3...v0.2.4) (2018-05-08)


### Bug Fixes

* **version number:** Ensuring the version number is correctly pulled from Minerva's package.json file. ([9e983af](https://github.com/sisk-technology-group-ltd/minerva/commit/9e983af))



<a name="0.2.3"></a>
## [0.2.3](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.2.2...v0.2.3) (2018-05-08)


### Bug Fixes

* **package check:** Added init script that can be used on new minerva packages which checks all required files have been included and also adds release scripts. ([87558e5](https://github.com/sisk-technology-group-ltd/minerva/commit/87558e5))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.2.1...v0.2.2) (2018-05-08)


### Bug Fixes

* **package manager:** Checks which package manager is installed and returns appropriately. ([210ff19](https://github.com/sisk-technology-group-ltd/minerva/commit/210ff19))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.2.0...v0.2.1) (2018-05-08)


### Bug Fixes

* **gitignore:** Removed the dist directory from .gitignore as it appears to be causing issues with globaly module. ([f562dcc](https://github.com/sisk-technology-group-ltd/minerva/commit/f562dcc))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.1.3...v0.2.0) (2018-05-08)


### Features

* **update:** Added the ability to globally update minerva by typing 'minerva update' ([13674b5](https://github.com/sisk-technology-group-ltd/minerva/commit/13674b5))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.1.2...v0.1.3) (2018-05-08)


### Bug Fixes

* **force npm:** Forces the publish command to use NPM to ensure no version number conflicts which can arise when Yarn is being used. ([8288f01](https://github.com/sisk-technology-group-ltd/minerva/commit/8288f01))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.1.1...v0.1.2) (2018-05-08)



<a name="0.1.1"></a>
## [0.1.1](https://github.com/sisk-technology-group-ltd/minerva/compare/v0.1.0...v0.1.1) (2018-05-08)


### Bug Fixes

* **directories:** Moved basic Minerva controllers into a directory called 'Controllers' ([7b7d9c8](https://github.com/sisk-technology-group-ltd/minerva/commit/7b7d9c8))



<a name="0.1.0"></a>
# 0.1.0 (2018-05-08)


### Bug Fixes

* **bin file:** Changed the bin option in package.json to point to the .js file. ([7309d13](https://github.com/sisk-technology-group-ltd/minerva/commit/7309d13))
* **package release:** Added the release script to the package.json file ([b4b964f](https://github.com/sisk-technology-group-ltd/minerva/commit/b4b964f))


### Features

* **repo branch:** Allowed output of the current branch in the repo ([fa95cc7](https://github.com/sisk-technology-group-ltd/minerva/commit/fa95cc7))
* **versioning module:** Created the versioning module to allow for easy updates using stanndard version. ([08ac914](https://github.com/sisk-technology-group-ltd/minerva/commit/08ac914))
