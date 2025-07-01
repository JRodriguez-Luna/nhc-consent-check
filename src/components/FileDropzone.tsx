import { useState } from "react";
import "./FileDropzone.css"
import { Icon } from "./Icon"
import { useDropzone } from 'react-dropzone';
import JSZip from "jszip";

export function FileDropzone() {
    const [files, setFiles] = useState<File[]>();
    const zip = new JSZip();
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (files) => setFiles(files)
    });

    const pdfFolder = zip.folder("Electronic Consents")
    if (files !== undefined && files.length > 0) {
        pdfFolder?.file(files[0].name, files[0])
    }

    console.log('current Files:', files)

    return (
        <div className="fd-container" {...getRootProps()}>
            <input  {...getInputProps()} />
            <div className="column item-center">
                <Icon variant="upload"/>
                <div className="description">
                    {
                        isDragActive ?
                        <p>Release File(s) here...</p>
                        :
                        <>
                            <p>Drag & Drop files here</p>
                            <p className="light-text-m">or</p>
                            <p className="browse-text">click to browse</p>
                        </>
    
                    }
                </div>
                <p className="text-s">Supports PDF, DOC, DOCX, JPG, PNG</p>
            </div>
        </div>
    )
}