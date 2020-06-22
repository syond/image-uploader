import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import * as UploadStyled from './styles.js';

export default class Upload extends Component {
    renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return <UploadStyled.UploadMessage>Drop your files here...</UploadStyled.UploadMessage>
        }
        if (isDragReject) {
            return <UploadStyled.UploadMessage type="error">File not supported</UploadStyled.UploadMessage>
        }

        return <UploadStyled.UploadMessage type="success">Drop HERE!</UploadStyled.UploadMessage>
    };

    render() {
        const { onUpload } = this.props;
        return (
            <Dropzone accept="image/*" onDropAccepted={onUpload}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <UploadStyled.DropContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
                        <input {...getInputProps()} />

                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </UploadStyled.DropContainer>
                )}
            </Dropzone>
        );
    }
}
