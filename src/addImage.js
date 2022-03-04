import testImageUrl from "./test.png"
import text from "./test.txt"

const addImage = () => {
    const image = document.createElement('img');
    image.alt = 'test';
    image.width = 500
    image.src = testImageUrl
    document.body.append(image)
    document.body.append(text)
}

export default  addImage