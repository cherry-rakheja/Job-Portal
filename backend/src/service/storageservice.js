const ImageKit = require('@imagekit/nodejs')

const imgkit = new ImageKit({
    privateKey: process.env.IMAGEKIT_SECRET
})

const uploadFile = async (file) => {

    if (!file) {
        throw new Error('File is missing')
    }

    if (!process.env.IMAGEKIT_SECRET) {
        throw new Error('IMAGEKIT_SECRET is missing')
    }

    console.log('Uploading file:', {
        name: file.originalname,
        size: file.size,
        mimetype: file.mimetype
    })

    const response = await imgkit.files.upload({
        file: file.buffer,
        fileName: file.originalname,
        useUniqueFileName: true
    })

    console.log('ImageKit upload successful:', response)

    return response
}

module.exports = uploadFile