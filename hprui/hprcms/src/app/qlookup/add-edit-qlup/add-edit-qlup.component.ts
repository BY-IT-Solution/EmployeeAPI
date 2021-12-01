import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-qlup',
  templateUrl: './add-edit-qlup.component.html',
  styleUrls: ['./add-edit-qlup.component.css']
})
export class AddEditQlupComponent implements OnInit {

  constructor(private service:SharedService) { }


  @Input() qlup:any;
  questionId:string;
  questionType:string;
  Institution:string;
  questionDescription:string
  currentDateTime:string;

  QuestionTypeList:any=[];
  InstitutionList:any=[];

  ngOnInit(): void {
    this.loadQuestionTypeList();
    this.loadInstitutionList();

  }

       loadInstitutionList(){
       this.service.getAllInstitutionNames().subscribe((data:any)=>{
       this.InstitutionList=data;

      this.questionId= this.qlup.questionId;
      this.questionType=this.qlup.questionTypeName;
      this.Institution=this.qlup.InstitutionName;
      this.questionDescription=this.qlup.questionDescription;
      this.currentDateTime=this.qlup.currentDateTime;


    });
  }


  loadQuestionTypeList(){
    this.service.getAllQuestionTypeNames().subscribe((data:any)=>{
      this.QuestionTypeList=data;

      this.questionId= this.qlup.questionId;
      this.questionType=this.qlup.questionTypeName;
      this.Institution=this.qlup.InstitutionName;
      this.questionDescription=this.qlup.questionDescription;
      this.currentDateTime=this.qlup.currentDateTime;


    });
  }


  addQuestionLookup(){
    var val = {questionId:this.questionId,
            questionType:this.questionType,
            Institution:this.Institution,
            questionDescription:this.questionDescription,
            currentDateTime:this.currentDateTime};

    this.service.addQuestionLookup(val).subscribe(res=>{
      alert(res.toString());
 });

  }

  updateQuestionLookup(){
    var val = {questionId:this.questionId,
      questionType:this.questionType,
      Institution:this.Institution,
      questionDescription:this.questionDescription,
      currentDateTime:this.currentDateTime};
this.service.updateQuestionLookup(val).subscribe(res=>{
alert(res.toString());

});

  }

}


