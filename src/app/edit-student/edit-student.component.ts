import { Component } from '@angular/core';
import {StudentsServiceService} from '../students-service.service';
import {FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {

  constructor(private student: StudentsServiceService, private router:ActivatedRoute){}

  editStudent = new  FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
  message: boolean = false;


  ngOnInit(): void{
    console.log(this.router.snapshot.params['id']); 
    this.student.getStudentById(this.router.snapshot.params['id']).subscribe(
      (result: any)=>{console.log(result);
        this.editStudent = new FormGroup(
          {
            name: new FormControl(result.name),
            email:new FormControl(result.email)
          }
        );
      }
    );
  }

  updateData(){
    console.log(this.editStudent.value);
    return this.student.updateStudent(this.router.snapshot.params['id'], this.editStudent.value).subscribe(
      (result)=>{
        this.message = true;
      }
    );
  }

  removeMessage(){
    return this.message = false;
  }

}
