import React, { Component } from "react";
import { render } from "react-dom";
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-jsonschema-form";
import UUID from "uuid";
import fileDownload from "react-file-download";
import "babel-polyfill";
import schema from "./../codeMetadataSchema/codeMetadataSchema3.0.json";
import { createReadme } from './readme-util';
import { createContruibuting } from './contributing-util';
import { createGettingStarted} from './getting-started-util';
import { createBacklog} from './backlog-util';
import { createChangelog} from './changelog-util';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const uiSchema = {
  conformsToSchemaUrl: {
    "ui:widget":"hidden"
  },
  metadataUpdatedDate:{
    "ui:widget":"hidden"
  },
  publiclySharedMetadata: {
    "ui:order": [
      "codeAssetGUID",
      "codeAssetGroupGUID",
      'codeAssetTitle',
      'repoStatus',
      'isArchive',
      'developmentEndDate',
      'publiclyHostedInstanceURL',
      'openSourcedProject',
      'partneringAgencies',
      'publicRepository'
      ],
      "classNames":"col-md-6",
      codeAssetGUID:{
        "classNames":""
      },
      codeAssetGroupGUID:{
        "classNames":""
      },
      codeAssetTitle:
      {
        "ui:help": "Example : For ANDI this will be Accessible Name and Description Inspector",
        "ui:options":{
          "autoComplete": "off"
        }
      },
      repoStatus: {
      "ui:widget": "checkboxes",
      "ui:options":{
        inline: true
      }
    },
    isArchive:{
      "ui:widget": "radio",
      "ui:options":{
        inline: true
      }
    },
    developmentEndDate: {
      "ui:widget": "alt-date"
    },
    publiclyHostedInstanceURL: {
      "ui:help": "Hint: If this repo is the code for http://www.ssa.gov, then put http://www.ssa.gov"
    }, 
    
    openSourcedProject:{
      "ui:widget": "radio",
      "ui:options":{
        inline: true
      }
    },
    publicRepository:{
      projectHomepageURL: {
        "ui:help": "Example : For ANDI this will be ssa.gov/accessibility/andi/help/install.html"
      },
      downloadURL: {
        "ui:help": "Example : For ANDI this will be https://github.com/SSAgov/ANDI/archive/master.zip"
      },
      repositoryUrl: {
        "ui:help": "Example : For ANDI this will be https://github.com/ssagov/andi.git"
      },
    }
  },

  internalMetadata: {
    "ui:order": [
      "publiclySharedMetadataConcerns",
      "concernsComments",
      'OCD',
      'projectID',
      'backlogUrl',
      'dependentOnDataStore',
      'databasehostedInstances',
      'sensitiveData',
      'intranetProjectHomepageURL',
      'hostedInstances'
      ],
      "classNames":"col-md-6",
    publiclySharedMetadataConcerns: {
      "ui:widget": "radio",
      "ui:options":{
        inline: true
      }
    },
    OCD: {
      "ui:help": "Hint: Get it from Organization Chart"
    },
    projectID: {
      "ui:help": "Hint: What “investment id” do you report your time to when working on this repo?"
    },
    backlogUrl: {
      "ui:help": "Example: JIRA URL"
    },
    dependentOnDataStore:{
      "ui:widget": "radio",
      "ui:options":{
        inline: true
      }
    },
    sensitiveData: {
      "ui:help": "PII: Personally identifiable Information; PHI: Protected Health Information; FTI: Federal Tax Information",
      "ui:widget": "checkboxes",
      "ui:options":{
        inline: true
      }

    },
    intranetProjectHomepageURL: {
      "ui:help": "Internal project Home page URL"
    },
    databasehostedInstances: {
      items:{
      name: {
        "ui:help": "Example: Development, Production, etc"
      }
    }
    },
    hostedInstances: {
      items:{
      name: {
        "ui:help": "Example: Sandbox, Development, Production, etc"
      },
      uri: {
        "ui:help": "Example: Internally hosted URL"
      },
      notes: {
        "ui:help": "Example: Any notes"
      },
    }
    }
  }
};

const INITIAL_STATE = {
conformsToSchemaUrl:"codemetadataSchema/codeMetadataSchema3.0.json",
metadataUpdatedDate: new Date().toISOString().slice(0,10),
publiclySharedMetadata: {
    codeAssetGUID: UUID.v4(),
    codeAssetGroupGUID: UUID.v4()
  },
  internalMetadata: {
    dependentOnDataStore: "No",
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      json: INITIAL_STATE,
      submitted: false
    };
  }

  validate(formData, errors) {
    console.log(errors);
    return errors;
  }

  render() {
    const { json, submitted } = this.state;

    let theCONTENT;

    if (submitted) {
      theCONTENT = (
        <div>
          <h1>Thank you</h1>
          <pre>{JSON.stringify(json, null, 2)}</pre>
          
            <div>
              <br />
              <button type="submit" className="btn btn-info" id="submitButton" onClick={()=>{
                 this.setState({ submitted: false });
                 this.setState({ json: {
                  conformsToSchemaUrl:"codemetadataSchema/codeMetadataSchema3.0.json",
                  metadataUpdatedDate: new Date().toISOString().slice(0,10),
                  publiclySharedMetadata: {
                      codeAssetGUID: UUID.v4(),
                      codeAssetGroupGUID: UUID.v4()
                    },
                    internalMetadata: {
                      dependentOnDataStore: "No",
                    }
                  } });
                 
              }}>
                Go Back and make another!
              </button>
            </div>
            
        </div>

        
      );
    } else {
      theCONTENT = (
        <div>
          <div>
            <div id="titlebar">
            <h1>Repo Documentation Generator</h1>
            <h5>
              Generates a codeMetadata.json, README.md, GETTING-STARTED.md, CONTRIBUTING.md, BACKLOG.md and CHANGELOG.md
              </h5>
              <br/>
              </div>
              <fieldset id="loadExistingSection">

              <legend id="loadExistingSection_title">
              
              <strong>Optional</strong>: Load an existing codeMetadata.json file
              
              </legend>
              <div className="row">
                  <div className="col-md-3">
                    <strong>
                    Load from bitbucket URL
                    </strong>
                  </div>
                  <div className="col-md-9">
                    <div className="form-row">
                    <div className="col-sm-11">
                    <input id="existingUrl" type="text" className="form-control" placeholder="PATH-TO-YOUR-EXISTING-codeMetadata.json-file/RAW/codeMetadata.json"></input>
                    </div>
                    <div className="col-auto my-1">
                    <button type="submit" className="btn btn-primary" onClick={(e)=> {
                  var is_chrome = /chrome/.test( navigator.userAgent.toLowerCase() );
                  if(is_chrome){
                    alert("this only works in IE because of CORS :(")
                  }
                var jsonUrl =document.getElementById('existingUrl').value; 
                    if(jsonUrl.includes('browse'))
                    {
                      jsonUrl = jsonUrl.replace('browse','raw');
                    }
                fetch(jsonUrl)
                .then(response => response.json())
                .then((jsonData) => {
                  // jsonData is parsed json object received from url
              
                  this.setState({ json: jsonData });
                })
                .catch((error) => {
                  // handle your errors here
                  console.error(error)
                })
                
                 }
                }>
                    Load</button>
                    </div>
                    
                    </div>
                    </div>
                </div>
                <div className="row mb-2">
                  <div className="col-md-2 text-center">
          <em>OR</em>
                  </div>
                  </div>  
              <div className="row">
                
              <div className="col-md-3">
                  <strong>Load from a file</strong>
                </div>
                <div className="col-md-9">
                </div>
          
          <input
                type="file"
                id="files"
                name="files[]"
                className="custom-file-input"
                onChange={evt => {
                  const self = this;
                  var files = evt.target.files; // FileList object

                  // files is a FileList of File objects. List some properties.
                  //var output = [];
                  for (var i = 0, f; (f = files[i]); i++) {
                    var reader = new FileReader();

                    // Closure to capture the file information.
                    reader.onload = (function(theFile) {
                      return function(e) {
                        try {
                          const newJSON = JSON.parse(e.target.result);
                          self.setState({ json: newJSON });
                        } catch (ex) {
                          alert("ex when trying to parse json = " + ex);
                        }
                      };
                    })(f);
                    reader.readAsText(f);
                  }
                }}
              />

              
          
                </div>

                </fieldset>
              
              <br />
              <div>
              <button className="btn btn-primary" id="helpToggle" onClick={(e)=> {
                var allX = document.getElementsByClassName("field-description");
                Array.from(allX).forEach((x)=> {
                if (x.style.display === "block") {
                    x.style.display = "none";
                    } else {
                    x.style.display = "block";
                }});
                 var allY = document.getElementsByClassName("help-block");
                 Array.from(allY).forEach((y)=> {
                 if (y.style.display === "block") {
                     y.style.display = "none";
                     } else {
                     y.style.display = "block";
                 }});
                 }
                }> Toggle Help
                </button>
                </div>
          </div>
          <Form 
            onChange={formData => {
              this.setState({ json: formData.formData });
            }}
            validate={this.validate}
            onSubmit={() => {
              var filename = json.publiclySharedMetadata.codeAssetTitle + "-RepoFiles.zip";
              var zip = new JSZip();

              this.setState({ submitted: true });
              zip.file("codeMetadata.json", JSON.stringify(json, null, 2));
  
              zip.file("README.md", createReadme(json));

              zip.file("CONTRIBUTING.md", createContruibuting());
  
              zip.file("GETTING-STARTED.md", createGettingStarted());

              zip.file("BACKLOG.md", createBacklog());
  
              zip.file("CHANGELOG.md", createChangelog());

               // Generate the zip file asynchronously
              zip.generateAsync({type:"blob"})
              .then(function(content) {
                  // Force down of the Zip file
                  saveAs(content, filename);
              });
              
              //fileDownload(JSON.stringify(json, null, 2), "codeMetadata.json");
            }}
            uiSchema={uiSchema}
            schema={schema}
            formData={json}
          >
            <div>
              <br />
              <button type="submit" className="btn btn-info" id="submitButton">
              Generate & download
              </button>
            </div>
          </Form>
        </div>
      );
    }
    return theCONTENT;
  }
}

render(<App />, document.getElementById("root"));
