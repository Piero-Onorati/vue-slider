const app = new Vue(
    {
        el: '#app',

        data: {
            counter: 0,
            timer: '',
            sliders: [
                'img/img-1.jpg',
                'img/img-2.jpg',
                'img/img-3.jpg',
                'img/img-4.jpg'
            ],
            active: 'active'
        },

        methods: {
            // function for next slide
            next: function(){
                (this.counter == this.sliders.length - 1) ? this.counter = 0 : this.counter++;
            },

            // function for previous slide
            prev: function(){
                (this.counter <= 0) ? this.counter = this.sliders.length - 1 : this.counter--;
            },

            // function for dot of nav(each dot is a different image)
            dotClick: function(index){
                this.counter = index;
            },

            //function for autoplay
            play: function() {

                this.timer = setInterval(this.next, 3000)

                //alternative solution
                // let app = this;
                // this.timer = setInterval(function() {
                //   app.next();
                // }, 3000);
            }
        },

        created: function() {
            this.play();
        }

    }
);
