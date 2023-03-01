
const loadMeme = () =>{
    const URL = 'https://meme-api.com/gimme/20';
    fetch(URL)
    .then(res => res.json())
    .then(data => displayMeme(data.memes));
};
const displayMeme = (memes) =>{
    const memeContainer = document.getElementById('meme-container');
    memes.slice(0,6).forEach((meme)=>{
        console.log(meme);
        const div = document.createElement('div');
        div.innerHTML = `
        <img class="img-fluid shadow-lg bg-body-tertiary rounded" style="width: 400px; height: 400px;" src="${meme.url}" alt="">
        `;
        memeContainer.appendChild(div);
    })
}

loadMeme();
