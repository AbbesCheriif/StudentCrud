import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {StudentsServiceService} from '../students-service.service'


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private student: StudentsServiceService){}
  addStudent = new  FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
  message: boolean = false;
  ngOnInit(): void{}

  saveData(){
    console.log(this.addStudent.value);
    return this.student.saveStudent(this.addStudent.value).subscribe(
      (result)=>{
        this.addStudent.reset({});
        this.message = true;
      }
    );
  }

  removeMessage(){
    return this.message = false;
  }

}
