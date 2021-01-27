export function createContruibuting() {
    
    const contributingFile = `
# Contributing

This file describes the rules for contributions and pull requests.

## Pull Requests

### Our Pull Request Requirements

{Describe here whats required for a pull request to this repository.  See below examples: }

1. Record your features and bugs in the [BACKLOG.md template](BACKLOG.md).
    {or, email [name](), or add to jira.... }
1. Ensure all code includes unit tests and all unit tests pass.
1. Update [CHANGELOG.md template](CHANGELOG.md)} specifying your changes.
1. {if there are any additional steps to fit in with your CI routine... list them here.  ie successfull build required}
1. {If you are not accepting pull request with out first email contact list that here}
1. {If you require contact thru Mattermost, provide the channel }

### Our Pull Request Approval Process

{How many approvals are required? Who must approve? etc...}

## Repository Standards

### Naming Convention

ie: Please follow the Microsoft naming convention described here:
<https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/naming-guidelines>

### Commenting Code

{Describe here the rules for commenting the code.}

### Design Patterns

{Describe the design patterns implemented in this project ie};
`

    return contributingFile;
}
