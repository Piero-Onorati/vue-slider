const app = new Vue(
    {
        el: '#app',
        data: {
            counter: 0,
            sliders: [
                'img/img-1.jpg',
                'img/img-2.jpg',
                'img/img-3.jpg',
                'img/img-4.jpg'
            ],
            active: 'active'

        },
        methods: {
            next: function(){
                (this.counter == this.sliders.length - 1) ? this.counter = 0 : this.counter++;
            },
            prev: function(){
                (this.counter <= 0) ? this.counter = this.sliders.length - 1 : this.counter--;
            },

            dotClick: function(index){
                this.counter = index;
            }
        }
    }
);