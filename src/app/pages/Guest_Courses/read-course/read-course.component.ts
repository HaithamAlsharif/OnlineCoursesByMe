import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-course',
  templateUrl: './read-course.component.html',
  styleUrls: ['./read-course.component.scss']
})
export class ReadCourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private course = 
  {
    id:1,
    title: "Intro to Java Programming",
    image:"https://www.teacheracademy.eu/wp-content/uploads/2019/02/CLA.1.DIV_-1216x757.jpg",
    instructor:"Adnan Hamida",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    rating: 3,
    cost: 50,
    status: "Published",
    students:[],
    reviews:[{
      review_id:1,
      student:{
        id:1,
        name:"Haitham Alsharif",
        email:"haitham@gmail.com",
        age: 21,
        gender: "male"
      },
      content:"R Some quick example text to build on the card title and make up the bulk of the card's content."
    }]
  }

}
