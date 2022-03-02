import testImageUrl from "./test.png"

const addImage = () => {
    const image = document.createElement('img');
    image.alt = 'test';
    image.width = 500
    image.src = testImageUrl
    document.body.append(image)
}

export default  addImage