import React, {Component} from 'react';
import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

class MyComponent extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
              <SunEditor onChange={this.props.onChange}  setOptions={{
                            height: 300,
                            buttonList: buttonList.complex
                           
                            
                    }} />
            </div>
          );
    }

};

export default MyComponent;
 
