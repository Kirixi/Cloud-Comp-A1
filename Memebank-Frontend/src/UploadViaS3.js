// import React , {useRef} from 'react';
// import S3 from "react-aws-s3";


// const S3_BUCKET ='memebank-bucket';
// const REGION ='us-east-1';
// const ACCESS_KEY ='ASIARHJT5X4J7WJQ2FHT';
// const SECRET_ACCESS_KEY ='vRM6DdoVhg95/igeQN3AGycgSP3U8WSz9+GE/N9V';

// function UploadViaS3() {
//     const fileInput = useRef();
//     const handleClick = () => {
//         console.log("here");
//         let file = fileInput.current.files[0];
//         console.log(file);
//         let newFileName = fileInput.current.files[0].name;
//         const config = {
//             bucketName: S3_BUCKET,
//             region: REGION,
//             accessKeyId: ACCESS_KEY,
//             secretAccessKey: SECRET_ACCESS_KEY,
//         }
//         const ReactS3Client = new S3(config);
//         ReactS3Client.uploadFile(file, newFileName).then(data => {
//             console.log(data);
//             if (data.status === 204){
//                 console.log("success");
//             }
//             else {
//                 console.log("fail");
//             }
//         });
//     };
//     return (
//         <>
//         <form className='upload-steps' onSubmit={handleClick}>
//             <label>
//                 Upload File:
//                 <input type='file' ref={fileInput}></input>
//                 <br/>
//             </label>
//             <button type='submit'> Upload </button>
//         </form>
//         </>
//     )
// }
// export default UploadViaS3;
// // const UploadViaS3 = () => {

// //     const [selectedFile, setSelectedFile] = useState(null);

// //     const handleFileInput = (e) => {
// //         setSelectedFile(e.target.files[0]);
// //     }

// //     const handleUpload = async (file) => {
// //         uploadFile(file, config)
// //             .then(data => console.log(data))
// //             .catch(err => console.error(err))
// //     }

// //     return <div>
// //         <div>React S3 File Upload</div>
// //         <input type="file" onChange={handleFileInput}/>
// //         <button onClick={() => handleUpload(selectedFile)}> Upload to S3</button>
// //     </div>
// // }

// // export default UploadViaS3;