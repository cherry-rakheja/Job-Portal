const {ImageKit}= require('@imagekit/nodejs')
const imgkit= new ImageKit({
    privateKey:process.env.IMAGEKIT_SECRET
})
const uploadFile=async(file)=>{
    const response= await imgkit.files.upload({
        fileName:file.originalname,
        file:file.buffer.toString('base64')
    })
    return response
}
module.exports= uploadFile;