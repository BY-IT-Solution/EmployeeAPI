import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service'
@Component({
  selector: 'app-show-quest',
  templateUrl: './show-quest.component.html',
  styleUrls: ['./show-quest.component.css']
})
export class ShowQuestComponent implements OnInit {

  constructor(private service:SharedService) { }

QuestionTypeList: any=[];
ModalTitle:string;
ActivateAddEditQuestComp:boolean=true;
quest:any;


ngOnInit(): void {
  this.refreshQuestList();
}

refreshQuestList(){
  this.service.getQuestList().subscribe(data=>{
    this.QuestionTypeList=data;
  });
}


addClick(){
  this.quest={
  questionTypeId:0,
  questionTypeName:"",
  Description:""
}
this.ModalTitle="Add QuestionType";
this.ActivateAddEditQuestComp=true;

}

closeClick(){
  this.ActivateAddEditQuestComp=false;
  this.refreshQuestList();

}


deleteClick(item){
  if(confirm('Are you shure?? ')){
    this.service.deleteQuestion(item.questionTypeId).subscribe(data=>{
      alert(data.toString());
      this.refreshQuestList();
    });
  }
}

editClick(item){
  this.quest=item;
  this.ModalTitle="Edit QuestionType";
  this.ActivateAddEditQuestComp=true;
}

}


