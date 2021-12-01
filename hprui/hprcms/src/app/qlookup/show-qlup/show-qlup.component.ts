import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-qlup',
  templateUrl: './show-qlup.component.html',
  styleUrls: ['./show-qlup.component.css']
})
export class ShowQlupComponent implements OnInit {

  constructor(private service:SharedService) { }

  QuestionLookupList: any=[];

  ModalTitle:string;
  ActivateAddEditQlupComp:boolean=true;
  qlup:any;

  ngOnInit(): void {
    this.refreshQlupList();
  }

  refreshQlupList(){
    this.service.getQlupList().subscribe(data=>{
      this.QuestionLookupList=data;

    });
  }

  addClick(){
     this.qlup={
      questionId:0,
      questionType:"",
      Institution:"",
      questionDescription:"",
      currentDateTime:""
   }
   this.ModalTitle="Add QuestionLookup";
   this.ActivateAddEditQlupComp=true;
  }

  closeClick(){
  this.ActivateAddEditQlupComp=false;
  this.refreshQlupList();
  }

  deleteClick(item){
    if(confirm('Are you shure?? ')){
      this.service.deleteQuestionLookup(item.questionId).subscribe(data=>{
        alert(data.toString());
        this.refreshQlupList();
      })
    }
  }


editClick(item){
this.qlup=item;
this.ModalTitle="Edit QuestionLookup";
this.ActivateAddEditQlupComp=true;
}


}
