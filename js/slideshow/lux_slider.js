var slider = {
    slides:['../img/hotels/lux/slideshow/1.jpg',
    '../img/hotels/lux/slideshow/2.jpg',
    '../img/hotels/lux/slideshow/3.jpg',
    '../img/hotels/lux/slideshow/4.jpg',
    '../img/hotels/lux/slideshow/5.jpg',
    '../img/hotels/lux/slideshow/6.jpg',],
    frame:4, // текущий кадр для отбражения - индекс картинки из массива
    lastFrame:0,
    set: function(image) { // установка нужного фона слайдеру
        document.getElementById("scr").style.backgroundImage = "url("+image+")";
        this.changeCurrentNavigColor();
    },
    changeCurrentNavigColor: function() {
        document.getElementById("n" + this.lastFrame).style.color = "black";
        document.getElementById("n" + this.lastFrame).style.opacity = "0.5";
        document.getElementById("n" + this.frame).style.color = "white";
        document.getElementById("n" + this.frame).style.opacity = "1";
        this.lastFrame = this.frame;
    },
    init: function() { // запуск слайдера с картинкой с нулевым индексом
        this.set(this.slides[this.frame]);
    },
    left: function() { // крутим на один кадр влево
        this.frame--;
        if(this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
    },
    right: function() { // крутим на один кадр вправо
        this.frame++;
        if(this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);      
    },
    navigation: function(number) {
        switch(number) {
            case 0: 
                this.frame = 0; 
                this.set(this.slides[this.frame]);
                break;
            case 1: 
                this.frame = 1; 
                this.set(this.slides[this.frame]);
                break;
            case 2: 
                this.frame = 2; 
                this.set(this.slides[this.frame]);
                break;
            case 3: 
                this.frame = 3; 
                this.set(this.slides[this.frame]);
                break;
            case 4: 
                this.frame = 4; 
                this.set(this.slides[this.frame]);
                break;
            case 5: 
                this.frame = 5; 
                this.set(this.slides[this.frame]);
                break;
            case 6: 
                this.frame = 6; 
                this.set(this.slides[this.frame]);
                break;
            case 7: 
                this.frame = 7; 
                this.set(this.slides[this.frame]);
                break;
            case 8: 
                this.frame = 8; 
                this.set(this.slides[this.frame]);
                break;
            case 9: 
                this.frame = 9; 
                this.set(this.slides[this.frame]);
                break;
            case 10: 
                this.frame = 10; 
                this.set(this.slides[this.frame]);
                break;
        }
    },
    check: function() {
        if(this.frame == 0) {
            console.log("0");
        }
    }
};

function sliderInit() {
    var durationSlide = 9000;
    slider.init();
    setInterval(function() { // интервал для перелистывания картинок
        slider.right();
    }, durationSlide);
};