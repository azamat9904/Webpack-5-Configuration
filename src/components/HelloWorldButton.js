import "./HelloWorldButton.css"

export class HelloWorldButton{
    render(){
        const button = document.createElement('button');
        button.innerText = "Say hello world"
        button.addEventListener('click', (e) => {
            const p = document.createElement('p');
            p.innerText = 'Hello world'
            p.classList.add('test-text')
            document.body.append(p);
        });
        button.classList.add('test-btn')
        document.body.append(button)
    }
}