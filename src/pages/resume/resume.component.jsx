
// import { Document, Page, pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import React from 'react'
import NavList from '../../components/navlist/navlist.component'
import './resume.styles.css'

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
      <>
      {/* <div className='navlist-container'>
        <NavList className='navlist'/>
      </div> */}
      <div ref={this.viewerRef} id='viewer' style={{ width: '100vw', height: '100vh' }}>

      </div>
      </>
    )
  }
}

