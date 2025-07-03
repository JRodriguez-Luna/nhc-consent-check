import { useEffect, useState } from "react";
import "./FileDropzone.css"
import { Icon } from "./Icon"
import { useDropzone } from 'react-dropzone';
import JSZip from "jszip";
import { consentList } from '../../data'

export function FileDropzone() {
    const [files, setFiles] = useState<File[]>();
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (files) => setFiles(files)
    });

    useEffect(() => {
        if (files !== undefined && files.length > 0) {
            const zip = new JSZip();
            const ecFolder = zip.folder("Electronic Consents")
            const roiFolder = zip.folder("ROI")
            const unknownFolder = zip.folder("Unknown")

            // Name the file and its content
            files.forEach(file => {
                const normalizedFileName = file.name.toLowerCase().replace(/\.[^/.]+$/, ""); // remove extension

                let matched = false;

                // check EC
                for (const consent of consentList.EC) {
                    if (normalizedFileName.includes(consent.toLowerCase())) {
                        ecFolder?.file(file.name, file);
                        matched = true;
                        break; // stop checking EC once found
                    }
                }

                // check ROI only if not matched
                if (!matched) {
                    for (const roi of consentList.ROI) {
                        if (normalizedFileName.includes(roi.toLowerCase())) {
                            roiFolder?.file(file.name, file);
                            matched = true;
                            break;
                        }
                    }
                }

                // if still not matched
                if (!matched) {
                    unknownFolder?.file(file.name, file);
                }
            });

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