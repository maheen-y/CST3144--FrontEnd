new Vue({
    el: "#app",
    data: {
        website: "After School Lessons & Activities",
        showLessons: true,
        lessons: [
            {
                subject: "English",
                location: "Barnet",
                price: 40,
                space_available: 5,
                image: "images/english.jpg"
            },

            {
                subject: "Maths",
                location: "Edgware",
                price: 50,
                space_available: 5,
                image: "images/math.jpg"
            },

            {
                subject: "Biology",
                location: "Finchley",
                price: 45,
                space_available: 5,
                image: "images/biology.jpg"
            },

            {
                subject: "Chemistry",
                location: "Harrow",
                price: 55,
                space_available: 5,
                image: "images/chemistry.jpg"
            },

            {
                subject: "Physics",
                location: "Hendon",
                price: 60,
                space_available: 5,
                image: "images/physics.jpg"
            },

            {
                subject: "Geography",
                location: "Westminster",
                price: 70,
                space_available: 5,
                image: "images/geography.jpg"
            },

            {
                subject: "Computing",
                location: "Kilburn",
                price: 65,
                space_available: 5,
                image: "images/computing.png"
            },

            {
                subject: "French",
                location: "Battersea",
                price: 40,
                space_available: 5,
                image: "images/french.png"
            },

            {
                subject: "Spanish",
                location: "Mile End",
                price: 45,
                space_available: 5,
                image: "images/spanish.jpg"
            },

            {
                subject: "Physical Education",
                location: "East Ham",
                price: 35,
                space_available: 5,
                image: "images/PE.jpg"
            }
        ],
        basket: [],

        order: {
            firstName: "", 
            surname: "", 
            phone: "", 
            address:"", 
            city:"", 
            postcode:"",
            email:"",

        }
    },

    computed: {
        lessonsInBasket() {
            return this.basket.length || 0;
        }
    },
    methods: {
        displayCheckout() {
            if (this.showLessons) {
                this.showLessons = false
            } else {
                this.showLessons = true
            }
        },
        addLessonToBasket(lesson) {
            if (lesson.space_available > 0) {
                this.basket.push(lesson);
                lesson.space_available--;
            }
        }, 

        submitOrder(){
            if(this.isFormValid){
                console.log(`Thank you, ${this.order.name}! for placing an order with us`);
                this.order = {name:"", phone:""};
                this.basket = [];
                this.showLessons = true;
            } else {
                console.log("Error occurred, please check the information entered is valid"); 
            }
        }
    }
});