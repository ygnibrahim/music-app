class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Belki Üstümüzden Bir Kuş Geçer ", "Yüksek Sadakat", "BelkiUstumuzden.jpg", "Belki Üstümüzden Bir Kuş Geçer (En Baştan).mp3"),
    new Music("Sorma", "Can Gox", "Sorma.jpg", "Can Gox - Sorma _Official Video_.mp3"),
    new Music("Galiba", "Sagopa Kajmer", "Galiba.jpg", "Galiba - Sagopa Kajmer _Official Video_.mp3"),
    new Music("Aman Aman", "Duman", "AmanAman.jpg", "Duman - Aman Aman.mp3")
];