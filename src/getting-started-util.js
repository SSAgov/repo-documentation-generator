export function createGettingStarted() {
    
    const gettingStartedFile =`
# Getting Started (required)

## Prerequesites

{List the prerequisites to get this code up and running}

1. {programming langauage framework(s)}
1. {software needed to be installed on developer's machine}
1. {IDE requirements or plugins (for example: do they NEED to use RAD or can they use eclipse or vscode?)}
1. {required package managers (npm, maven, nuget, etc)}
1. {testing frameworks/software that require configuration/setup/installation}
1. {...}

## Get the code (required)

1. Run git clone/fork 
1. {...}

## Installation (required, if applicable)

* OS X & Linux: {Steps to install}

* Windows: {Steps to install}

## Build and run (required, if applicable)

1. {Describe steps to build and compile}
1. {Package manager configuration}
1. {Preload data}
1. {build command or IDE steps}
1. {run command or IDE steps}
1. {...};
`
return gettingStartedFile;
}
