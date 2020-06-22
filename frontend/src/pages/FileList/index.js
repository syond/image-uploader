import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ files }) => (
    <Container>
        {files.map(uploadedFile => (
            <li>
                <FileInfo>
                    <Preview src={uploadedFile.preview} />
                    <div>
                        <strong>{uploadedFile.name}</strong>
                        <span>{uploadedFile.readebleSize} <button onClick={() => {}}>Excluir</button></span>
                    </div>
                </FileInfo>
                    <div>
                        {!uploadedFile.uploaded && !uploadedFile.error &&(
                            <CircularProgressbar
                                styles={{
                                    root: { width: 24 },
                                    path: { stroke: '#7159c1' }
                                }}
                                strokeWidth={10}
                                value={uploadedFile.progress}
                            />
                        )}

                        {uploadedFile.url && (
                            <a
                                href="https://avatars1.githubusercontent.com/u/8021140?s=460&u=0e3db5f6c5673d2743031efdee8320ffc115bbb6&v=4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                            </a>
                        )}

                        {uploadedFile.uploaded && (
                            <MdCheckCircle style={{ marginRight: 8 }} size={24} color="#78e5d5" />
                        )}
                        
                        {uploadedFile.error && (
                            <MdError style={{ marginRight: 8 }} size={24} color="#e57878" />
                        )}
                        
                    </div>
            </li>
        ))}
    </Container>
);

export default FileList;