import { Component, OnInit } from '@angular/core';
import { Result } from '../../models/user-reponse.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  usersList: Result[];

  // private userService: UserService will create a
  // an instance variable in our students.component
  // controller which we can access using this.userService
  constructor(private userService: UserService) {}

  // executed after Angular first displays the data-bound properties
  // see Angular lifecycle https://angular.io/guide/lifecycle-hooks
  ngOnInit(): void {
    // we subscribe to getUsers
    this.userService.getUsers(7).subscribe((userResponse) => {
      // when the asynchronous method is done
      // we can get the result using the 'userResponse' variable
      this.usersList = userResponse.results;
    });
  }

  // this method is called when the button 'Randomize' is clicked
  generateStudents(studentsNumber: string) {
    this.userService.getUsers(+studentsNumber).subscribe((userResponse) => {
      this.usersList = userResponse.results;
    });
  }

  // deletes a student from constructed list from the API
  deleteStudent(studentEmail: string) {
    // TODO remove the student from the 'usersList'
  }

  // decide if we can show a user or not
  // this method is called by an *ngIf
  canBeShown(user: Result) {
    // if the user has a first name
    // then we can show it in the HTML
    if (user.name.first) {
      return true;
    }

    return false;
  }
}
