import "./FileDropzone.css"
import { Icon } from "./Icon"
import { BrowseFile } from "./BrowseFile"

export function FileDropzone() {
    return (
        <div className="fd-container">
            <div className="column item-center">
                <Icon variant="upload"/>
                <div className="description">
                    <p>Drag & Drop files here</p>
                    <p className="text-m">or</p>
                </div>
                <BrowseFile>Browse File</BrowseFile>
                <p className="text-s">Supports PDF, DOC, DOCX, JPG, PNG</p>
            </div>
        </div>
    )
}