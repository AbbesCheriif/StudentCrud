import { Component } from '@angular/core';
import {StudentsServiceService} from '../students-service.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  constructor(private student: StudentsServiceService){}

  studentData : any = [];

  ngOnInit(){
    this.student.getAllStudent().subscribe(
      (data)=>{
        console.log(data);
        this.studentData = data;
      }
    );
  }

  deleteStudent(id: any){
    this.student.deleteStudent(id).subscribe(
      (result)=>{console.log(result);
        this.student.getAllStudent().subscribe(
          (data)=>{
            console.log(data);
            this.studentData = data;
          }
        );
      }
    );
    
  }

}
