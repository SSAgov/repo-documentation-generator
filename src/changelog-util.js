export function createChangelog() {
    
    const changelogFile =`
# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Versioning

{ Describe your version syntax here}
Example:  This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - Pending release (Optional)

{Include here a record of changes for the upcoming release.  General as pull requests are approved, update this section.}

## [1.0.1] - 2019-4-1

### Added

- {List the added features here}

### Changed

- {List the feature changes and bug fixes here}

### Deprecated

- {List the soon to be removed features here}

### Removed

- {List the removed features here}

### Fixed

- {List the bugs that were fixed with this release}

### Security

- {List items related to security}
`
return changelogFile;
}
