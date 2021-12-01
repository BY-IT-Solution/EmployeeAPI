import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-inst',
  templateUrl: './show-inst.component.html',
  styleUrls: ['./show-inst.component.css']
})
export class ShowInstComponent implements OnInit {

  constructor(private service:SharedService) { }

  InstitutionList: any=[];

  ModalTitle:string;
  ActivateAddEditInstComp:boolean=true;
  inst:any;

  ngOnInit(): void {
    this.refreshInstList();
  }

  refreshInstList(){
    this.service.getInstList().subscribe(data=>{
      this.InstitutionList=data;

    });
  }

  addClick(){
     this.inst={
     InstitutionId:0,
     InstitutionName:"",
     InstitutionDescription:""

   }
   this.ModalTitle="Add Institution";
   this.ActivateAddEditInstComp=true;

  }

  closeClick(){
  this.ActivateAddEditInstComp=false;
  this.refreshInstList();
  }

  deleteClick(item){
    if(confirm('Are you shure?? ')){
      this.service.deleteInstitution(item.InstitutionId).subscribe(data=>{
        alert(data.toString());
        this.refreshInstList();
      })
    }
  }


editClick(item){
this.inst=item;
this.ModalTitle="Edit Institution";
this.ActivateAddEditInstComp=true;
}


}
