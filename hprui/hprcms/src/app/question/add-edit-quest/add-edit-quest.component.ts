import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-quest',
  templateUrl: './add-edit-quest.component.html',
  styleUrls: ['./add-edit-quest.component.css']
})
export class AddEditQuestComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() quest:any;
  questionTypeId:string;
  questionTypeName:string;
  Description:string
  ngOnInit(): void {
    this.questionTypeId= this.quest.questionTypeId;
    this.questionTypeName=this.quest.questionTypeName;
    this.Description=this.quest.Description;

  }
  addQuestion(){
    var val = {questionTypeId:this.questionTypeId,
      questionTypeName:this.questionTypeName,
      Description:this.Description};

    this.service.addQuestion(val).subscribe(res=>{
      alert(res.toString());
 });

  }

  updateQuestion(){

    var val = {questionTypeId:this.questionTypeId,
      questionTypeName:this.questionTypeName,
      Description:this.Description
    }
this.service.updateQuestion(val).subscribe(res=>{
alert(res.toString());

});


  }

}
