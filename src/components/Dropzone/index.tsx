import { useContext } from 'react'
import {useDropzone} from 'react-dropzone'
import {FiUpload} from 'react-icons/fi'
import { IFileProps, UserContext } from '../../providers/UserContext';
import { DragContainer, FilesPreview } from './style'

const DropzoneAvatar = () => {
  const {files, setFiles} = useContext(UserContext)
  const { getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
      accept: {
        "image/*": []
      },
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
          );
      },
    });
    const Preview = files.map((file: any) => (
      <div key={file.name}>
        <img src={file.preview} alt="Imagem enviada"/>
      </div>
    ));

    return (
      <div className="container">
        <DragContainer {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p><FiUpload/> Arraste a imagem ou cliqe aqui.</p>
        </DragContainer>
        <FilesPreview>{Preview}</FilesPreview>
      </div>
    );
};

  
export default DropzoneAvatar