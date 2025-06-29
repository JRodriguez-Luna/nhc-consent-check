import "./FileDropzone.css"
import { Icon } from "./Icon"
import { useDropzone } from 'react-dropzone';

export function FileDropzone() {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: files => console.log(files)
    });

    return (
        <div className="fd-container" {...getRootProps()}>
            <input  {...getInputProps()} />
            <div className="column item-center">
                <Icon variant="upload"/>
                <div className="description">
                    {
                        isDragActive ?
                        <p>Drop File here...</p>
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