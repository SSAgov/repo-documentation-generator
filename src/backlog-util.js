export function createBacklog() {
    
    const backlogFile =`
# Backlog

This file will serve as the backlog of bugs, user stories, and tasks.

## Adding and Removing Items

{Describe here the process for adding new items and removing completed items}
Example:  Please feel free to add more ehancement requests or report bugs. If you contribute towards any of the item in this file, remove it from this file and add it to the [CHANGELOG.md](CHANGELOG.md)

## Pending

### Types

    -  New Feature
    -  Feature Enhancement
    -  Bug Fix

{Insert chart of pending items.  Include links to related task in other platforms like JIRA, or TFS.  See below example.}

| ID | Type | Description |
|----|----|----|
| 1 | New Feature | {Describe the new feature here.} |
| 2 | Feature Enhancement | {Describe the Feature Enhancement here.} |
| 3 | Bug Fix | {Describe the Bug Fix here.} |
`
return backlogFile;
}
