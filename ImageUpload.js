import React, {  useState } from "react";
import RotateIMG2 from "./RotateIMG2";
// class ImageUpload extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = { file: '', imagePreview: '' }
//     }
//     // const [image,setImage]=React.useState();

//      handleImage(e) {
//         e.preventDefault();
//         let file = e.target.files[0];
//         let reader = new FileReader();
//         reader.onloadend = () => {
//             this.setState({
//                 file: file,
//                 imagePreviewUrl: reader.result
//             });
//         }
//         reader.readAsDataURL(file)
//     }

//     render() {
//         let { imagePreviewUrl } = this.state;
//         let $imagePreview = null;
//         if (imagePreviewUrl) {
//             $imagePreview = (<RotateImage src={imagePreviewUrl} />);
//         }
//         else {
//             $imagePreview = (<div className="PreviewText"></div>);
//         }



//         return (
//             <div>
//                 <form>
//                     <label>choose file to upload</label>
//                     <input className="form-control" type="file" onChange={(e) => this.handleImage(e)} />
//                 </form>
//                 <div className="Preview" style={style.box}>
//                     {$imagePreview}
//                 </div>
//             </div>
//         )
//     }

// }

const ImageUpload = () => {
    const [state, setState] = useState({
        file: '',
        imagePreviewUrl: '',
    })
    const handleImage = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
        console.log(state)


    }

    return (
        <div style={style.design}>
         
            <form >
                <label>choose file to upload</label>
                <input className="form-control" type="file" onChange={handleImage} />
            </form>
            <div className="Preview" style={style.box}>
            <RotateIMG2 src={state.imagePreviewUrl} />
            </div>

        </div>
    )
}

export default ImageUpload;
const style = {
    box: {
        paddingTop: '90px',
        maxWidth: "100%",
        maxHeight: 350
    },
    design:{
        marginTop:'30px',
        marginLeft:'90px',
        marginRight:'50px',
    }
}

