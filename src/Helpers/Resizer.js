const compress = file => {
    return new Promise( ( succ, err ) => {
        if (!HTMLCanvasElement.prototype.toBlob) {
            Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
                value: function (callback, type, quality) {
                    var dataURL = this.toDataURL(type, quality).split(',')[1]
                    setTimeout(function() {
                        var binStr = atob( dataURL ),
                            len = binStr.length,
                            arr = new Uint8Array(len)
                        for (var i = 0; i < len; i++ ) {
                            arr[i] = binStr.charCodeAt(i)
                        }
                        callback( new Blob( [arr], {type: type || 'image/png'} ) )
                    })
                }
            })
        }
        const width = 500
        const fileName = file.name
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = event => {
            const img = new Image()
            img.src = event.target.result
            img.onload = () => {
                const elem = document.createElement('canvas')
                elem.width = width
                const scaleFactor = width / img.width
                elem.height = img.height * scaleFactor
                const ctx = elem.getContext('2d')
                // img.width and img.height will contain the original dimensions
                ctx.drawImage(img, 0, 0, width, img.height * scaleFactor)
                ctx.canvas.toBlob((blob) => {
                    const file = new File([blob], fileName, {
                        type: 'image/jpeg',
                        lastModified: Date.now()
                    })
                    succ(file)
                }, 'image/jpeg', 1)
            }
        }
        reader.onerror = error => err( error )
    })
}

export default compress