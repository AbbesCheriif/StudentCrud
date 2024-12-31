import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {
  url = "http://localhost:3000/students";
  constructor(private http: HttpClient) { }

  getAllStudent(): Observable<any>{
    return this.http.get(this.url);
  }

  getStudentById(id: any){
    return this.http.get(`${this.url}/${id}`);
  }

  saveStudent(data: any){
    return this.http.post(this.url, data);
  }

  deleteStudent(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  updateStudent(id:any, data: any){
    return this.http.put(`${this.url}/${id}`, data); 
  }

}
