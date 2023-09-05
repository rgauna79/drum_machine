import React from "react";
import { Badge } from "react-bootstrap";
import { marked } from 'marked'

export default class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      markdown: "",
    };
  }
    updateMarkdown(markdown) {
      this.setState({ markdown });
     }
  
  render(){
    var previewdata = '';

    var inputStyle = {
      width: "500px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
    var outputStyle = {
      width: "500px",
      height: "50vh",
      overflow: "scroll",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px",
      
    };
    
    return(
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div class="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                     Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="mark-input" style={inputStyle}>
                <textarea 
                  id="editor"
                  className="input" 
                  style={inputStyle} 
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                  >{console.log(this.state.markdown)}</textarea>
              </div>;
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" variant="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
              id="preview" 
              style={outputStyle}
              dangerouslySetInnerHTML={{
              __html: marked(this.state.markdown) 
              }}
              >
              </div>
            </div>


          </div>

          

        {/* end of class container*/}
        </div>
        {/* end of class app*/}
      </div>

      
    );
  }


}