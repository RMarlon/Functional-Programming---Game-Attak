
const char = createKnight('Ryuki');
const monster =  createLittleMOnster();

stage.start(
    char, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);