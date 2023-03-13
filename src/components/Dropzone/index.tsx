import { useContext } from 'react'
import {useDropzone} from 'react-dropzone'
import {FiUpload} from 'react-icons/fi'
import { UserContext } from '../../providers/UserContext';
import { DragContainer, FilesPreview } from './style'

const DropzoneAvatar = ({maxFiles}: any) => {
  const { files, setFiles } = useContext(UserContext)
  const { getRootProps, getInputProps } =
    useDropzone({
      maxFiles: maxFiles,
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
        {/* <img src={file.preview} alt="Imagem enviada"/> */}
        <p>{file.name}</p>
      </div>
    ));

    return (
      <div className="container">
        <DragContainer {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p><FiUpload/> Arraste a imagem ou clique aqui.</p>
        </DragContainer>
        <FilesPreview>{Preview}</FilesPreview>
      </div>
    );
};

  
export default DropzoneAvatar