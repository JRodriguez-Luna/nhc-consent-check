import { useEffect, useState } from "react";
import "./FileDropzone.css"
import { Icon } from "./Icon"
import { useDropzone } from 'react-dropzone';
import JSZip from "jszip";

export function FileDropzone() {
    const [files, setFiles] = useState<File[]>();
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (files) => setFiles(files)
    });

    useEffect(() => {
        if (files !== undefined && files.length > 0) {
            const zip = new JSZip();
            const pdfFolder = zip.folder("Electronic Consents")

            // Name the file and its content
            files.map((file) => {
                pdfFolder?.file(file.name, file)
            })

            // Generate and download the zip after adding files
            zip.generateAsync({ type: "blob" }).then(content => {
                const url = URL.createObjectURL(content);
                const a = document.createElement("a");
                a.href = url;
                a.download = "sorted_files.zip";
                a.click();
            });
        }
    }, [files])

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