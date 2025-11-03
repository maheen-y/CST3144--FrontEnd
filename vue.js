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
        }, 
        isCheckoutFormValid(){
            const nameCheck =  /^[a-zA-Z ]*$/;
            const phoneCheck = /^[0-9]+$/;

            return (
                nameCheck.test(this.order.firstName) &&
                nameCheck.test(this.order.surname) &&
                phoneCheck.test(this.order.phone) &&
                this.order.address &&  
                this.order.city &&  
                this.order.postcode &&  
                this.order.email
            );
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
                this.basket.push({lesson});
                lesson.space_available--;
            }
        },
        removeLesson(index, lesson){
            this.basket.splice(index,1);
            lesson.space_available++;
        },

        submitOrder(){
            if(this.isCheckoutFormValid){
                console.log(`Thank you, ${this.order.name}! for placing an order with us`);
                this.order = {firstName:"", surname:"", phone:"", address:"", city:"", 
                    postcode:"", email:""};
                this.basket = [];
                this.showLessons = true;
            } else {
                console.log("Error occurred, please check the information entered is valid"); 
            }
        }
    }
});