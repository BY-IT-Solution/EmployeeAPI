import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  [x: string]: any;
  readonly APIUrl="https://localhost:44338/api/"

  constructor(private http:HttpClient) { }

  getInstList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Institution');
  }
  addInstitution(val:any){
    return this.http.post(this.APIUrl+'/Institution',val);
  }

  updateInstitution(val:any){
    return this.http.put(this.APIUrl+ '/Institution',val);
  }

  deleteInstitution(val:any){
    return this.http.delete(this.APIUrl+ '/Institution/'+val);
  }

  getQuestList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QuestionType');
  }
  addQuestion(val:any){
    return this.http.post(this.APIUrl+ '/QuestionType',val);
  }

  updateQuestion(val:any){
    return this.http.put(this.APIUrl+ '/QuestionType',val);
  }

  deleteQuestion(val:any){
    return this.http.delete(this.APIUrl+ '/QuestionType/'+val);
  }


  getQlupList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/QuestionLookup');
  }
  addQuestionLookup(val:any){
    return this.http.post(this.APIUrl+'/QuestionLookup',val);
  }

  updateQuestionLookup(val:any){
    return this.http.put(this.APIUrl+ '/QuestionLookup',val);
  }

  deleteQuestionLookup(val:any){
    return this.http.delete(this.APIUrl+ '/QuestionLookup/'+val);
  }

  getAllInstitutionNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/QuestionLookup/GetAllInstitutionNames');

    }

    getAllQuestionTypeNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/QuestionLookup/GetAllQuestionTypeNames');

      }
}
