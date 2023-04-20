function cli(){
    document.getElementById('img1').style.setProperty('display','none');
    document.getElementById('img2').style.setProperty('display','grid');
    const audio = new Audio('./sound.mp3'); audio.play();
    setTimeout(() => {
        document.getElementById('img2').style.setProperty('display','none');
        document.getElementById('img1').style.setProperty('display','grid');
    }, 300);
}