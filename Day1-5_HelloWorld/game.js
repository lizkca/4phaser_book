const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'https://phaser.io/images/logo/logo-download.png');
}

function create ()
{
    this.add.image(400, 300, 'logo');
}