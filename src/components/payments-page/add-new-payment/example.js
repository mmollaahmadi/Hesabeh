import React from 'react';
import DropzoneComponent from 'react-dropzone-component';
import '../../../../node_modules/react-dropzone-component/styles/filepicker.css'
import '../../../../node_modules/dropzone/dist/min/dropzone.min.css'
import '../../../../node_modules/dropzone/dist/min/dropzone.min.js'
import './example.css'
import reuqest from 'superagent'

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          files:[]
        };
        // For a full list of possible configurations,
        // please consult http://www.dropzonejs.com/#configuration
        this.djsConfig = {
            addRemoveLinks: true,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            // autoProcessQueue: false,
            dictDefaultMessage:'بارگذاری تصویر',
            dictCancelUpload:'توقف',
            dictRemoveFile:'حذف'
            // dictDefaultMessage:''
        };
        this.componentConfig={
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: 'https://httpbin.org/post',
        };
        // If you want to attach multiple callbacks, simply
        // create an array filled with all your callbacks.
        this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];

        // Simple callbacks work too, of course
        // this.callback = () => console.log('Hello!');




        this.removedfile = file => console.log('removing...', file);

        this.dropzone = null;

        this.callback=this.callback.bind(this);
        this.success =this.success.bind(this);
    }
    success(file){
      console.log('uploaded', file);
      let files = this.state.files;
      files.push(file.name)
      this.props.setFiles(files);
      this.setState({
        files:files
      });
    }
    callback = (file) => {
      const req = reuqest.post('https://httpbin.org/post');
      req.attach(file.name, file);
      req.end();
      console.log('end', file);
    };

    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        // For a list of all possible events (there are many), see README.md!
        const eventHandlers = {
            // init: dz => this.dropzone = dz,
            drop: this.callbackArray,
            addedfile: this.callback,
            success: this.success,
            removedfile: this.removedfile
        }

        return <DropzoneComponent
          config={config}
          eventHandlers={eventHandlers}
          djsConfig={djsConfig}
        />
    }
}
