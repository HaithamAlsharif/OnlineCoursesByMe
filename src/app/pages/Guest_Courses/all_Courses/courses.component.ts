import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  private courses = [];

  ngOnInit() {
    this.courses = [
      {
        id:1,
        title: "Intro to Java Programming",
        image:"https://www.teacheracademy.eu/wp-content/uploads/2019/02/CLA.1.DIV_-1216x757.jpg",
        instructor:"Adnan Hamida",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        rating: 3,
        cost: 50,
        status: "Published"
      },
      {
        id:2,
        title: "MATH 101",
        image:"https://www.teacheracademy.eu/wp-content/uploads/2019/02/CLA.1.DIV_-1216x757.jpg",
        instructor:"Sami Hamida",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        rating: 2,
        cost: 20,
        status: "Published"
      },
      {
        id:3,
        title: "Art",
        image:"https://www.teacheracademy.eu/wp-content/uploads/2019/02/CLA.1.DIV_-1216x757.jpg",
        instructor:"Sarah Alsharif",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        rating: 4,
        cost: 100,
        status: "Draft"
      },
      {
        id:4,
        title: "Science",
        image:"https://www.teacheracademy.eu/wp-content/uploads/2019/02/CLA.1.DIV_-1216x757.jpg",
        instructor:"Haitham Alsharif",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        rating: 4,
        cost: 100,
        status: "Deleted"
      },
    ]
  }

}
