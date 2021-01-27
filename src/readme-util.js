export function createReadme(json) {
    
    const readmeFile = `
# ${json.publiclySharedMetadata.codeAssetTitle}

{REQUIRED. Give a brief description of your repository and put it in the bitbucket repo description also. }

${json.publiclySharedMetadata.isArchive === 'Yes' ? `## Archive` : ``}

${ json.internalMetadata.hostedInstances ? 
`## Hosted Instances

| Environment | Link | Notes |
| --- | --- | --- |`
:
``}
${ json.internalMetadata.hostedInstances ? 
    json.internalMetadata.hostedInstances.map((item, i) => 
`| ${item.name ||''} | ${item.uri ||''} | ${item.notes ||''} |
`).join('')
:
``
}

${ json.internalMetadata.databasehostedInstances ? 
`## Data Stores

| Name | DBMS |URL | Notes |
| --- | --- | --- | --- |`
:
``}
${ json.internalMetadata.databasehostedInstances ? 
    json.internalMetadata.databasehostedInstances.map((item, i) => 
`| ${item.name ||''} | ${item.DBMS ||''} | ${item.url ||''} | ${item.notes ||''} |
`).join('')
:
``
}
## Contributing

{REQUIRED. describe contributions types accepted into this repository and wyho can contribute to this repository. }

{We recommend using a CONTRIBUTING.md even if the steps are small and logically fit here. Bitbucket provides a link to the user to the contributing markdown via the "Read this repository's contribution guidelines" link on the pull request screen.}

Please reference our [CONTRIBUTING.md](CONTRIBUTING.md) guide to learn about our development process, how to propose bugfixes and improvements.

## Feedback

{REQUIRED. Describe how someone can make suggestions, changes or report bugs.  Mention what program you use to track them (JIRA, VersionOne, TFS, ALM, or some other tracking mechanism). If you don't use any of the above, then we recommend you have a backlog file. See this [BACKLOG.md template](BACKLOG.md).}
If you want to provide feedback, report a bug or make a suggestion, you can either:

1. Email and they'll add it to the backlog for you
1. {Add a bug/issue/ticket in our JIRA project located at JIRA URL}
1. {How else can someone report a bug} OR
1. {Can they make the code changes themselves and open a pull request?} OR
1. {...}


## Changelog

{RECOMMENDED. Describe here how you keep a log of high level changes to     this repository/codebase. A changelog should be a short and sweet list of what's changed in each release/version/deployment. It should be much shorter than the aggregation of commit notes/history. Mention where users can find future expected enhancements (maybe on the backlog or changelog?). We recommend you have a changelog file. See this [CHANGELOG.md template](CHANGELOG.md)}.

## Getting Started

{REQUIRED. Use this section to describe how to get the code up and running.  We recommend linking to another .md.  However, if the process is brief you can descibe it here as well.}

Refer to our [GETTING-STARTED.md](GETTING-STARTED.md) for detailed instructions to get the coded running.

### Usage Example

{RECOMMENDED, if applicable. Use this section to provide an example use this application or library.  Include how to install and execute with sample data.}

## Architecture

{REQUIRED. This section should describe how the code works. Provide a brief overview of the architecture within this application.  Optionally, provided links to external resouces/guides about the application ie confluence, sharepoint, sharedrive and visio diagrams}

![Architecture Diagram](architecture.png)

## Maintainers

This project is maitained by the branch : ${json.internalMetadata.OCD}

## People

### Acknowledgements

{OPTIONAL. Use this section to highlight any key contributors or anyone that deserves an acknowledgement}

For Expert Insight and Guidance:

For Significant Contributions:
`

    return readmeFile;
}
