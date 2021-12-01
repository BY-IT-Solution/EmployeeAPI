import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-inst',
  templateUrl: './add-edit-inst.component.html',
  styleUrls: ['./add-edit-inst.component.css']
})
export class AddEditInstComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() inst:any;
  InstitutionId:string;
  InstitutionName:string;
  InstitutionDescription:string
  ngOnInit(): void {
    this.InstitutionId= this.inst.InstitutionId;
    this.InstitutionName=this.inst.InstitutionName;
    this.InstitutionDescription=this.inst.InstitutionDescription;

  }

  addInstitution(){
    var val = {InstitutionId:this.InstitutionId,
            InstitutionName:this.InstitutionName,
            InstitutionDescription:this.InstitutionDescription};

    this.service.addInstitution(val).subscribe(res=>{
      alert(res.toString());
 });

  }

  updateInstitution(){

    var val = {InstitutionId:this.InstitutionId,
      InstitutionName:this.InstitutionName,
      InstitutionDescription:this.InstitutionDescription
};
this.service.updateInstitution(val).subscribe(res=>{
alert(res.toString());

});


  }

}
