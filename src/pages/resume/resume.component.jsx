
// import { Document, Page, pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import React from 'react'

export default class Resume extends React.Component {

  constructor(props) {
    super(props);
    this.viewerRef = React.createRef();
    this.backend = new props.backend();
  }

  componentDidMount() {
    const { src } = this.props;
    const element = this.viewerRef.current;

    this.backend.init(src, element);
  }



  render() {
    return (
      <div ref={this.viewerRef} id='viewer' style={{ width: '100%', height: '1000px' }}>

      </div>
    )
  }
}

