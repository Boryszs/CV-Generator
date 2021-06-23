import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { CvserviceService } from '../services/cvservice.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-cv-generator',
  templateUrl: './cv-generator.component.html',
  styleUrls: ['./cv-generator.component.css']
})
export class CvGeneratorComponent implements OnInit {


  productForm: FormGroup;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  
  

  constructor(private fb: FormBuilder,private service:CvserviceService) {
    this.productForm = this.fb.group({
      name: '',
      surname: '',
      about: '',
      educations: this.fb.array([]),
      skills: this.fb.array([]),
      careers: this.fb.array([]),
      address: '',
      telephone: '',
      email: '',
      languages: this.fb.array([]),
      interests: this.fb.array([]),
      colorStyle: 'GRAY_WHITE',
    });
  }

  setStyle(style:string){
      this.productForm.value.colorStyle=style;
  }
  
  education(): FormArray {
    return this.productForm.get("educations") as FormArray
  }

  skills(): FormArray {
    return this.productForm.get("skills") as FormArray
  }

  carrera(): FormArray {
    return this.productForm.get("careers") as FormArray
  }

  show() {
    this.service.generatePDF(this.productForm.value,this.selectedFile).subscribe((response) => {
      const blob = new Blob([response], {type: 'application/pdf; charset=utf-8'});
      saveAs(blob, 'Resume ' + this.productForm.value.name+"_"+this.productForm.value.surname+"_CV.pdf");
    })
  }

  public onFileChanged(event:any) {
        this.selectedFile = event.target.files[0];
  }
    
    
  language(): FormArray {
    return this.productForm.get("languages") as FormArray
  }

  interest(): FormArray {
    return this.productForm.get("interests") as FormArray
  }

  newEducation(): FormGroup {
    return this.fb.group({
      from: '',
      to: '',
      name: '',
      schoolName: '',
    })
  }

  newSkills(): FormGroup {
    return this.fb.group({
      name: ''
    })
  }

  newCareer(): FormGroup {
    return this.fb.group({
      from: '',
      to: '',
      company: '',
      jobTitle: '',
      about: ''
    })
  }

  newLanguage(): FormGroup {
    return this.fb.group({
      name: '',
      level: ''
    })
  }

  newInterest(): FormGroup {
    return this.fb.group({
      name: ''
    })
  }

  addQuantity() {
    this.education().push(this.newEducation());
  }

  addSkills() {
    this.skills().push(this.newSkills());
  }

  addCarrer() {
    this.carrera().push(this.newCareer());
  }

  addLanguage() {
    this.language().push(this.newLanguage());
  }

  addInterest() {
    this.interest().push(this.newInterest());
  }

  removeEducation(i:number) {
    this.education().removeAt(i);
  }

  removeSkills(i:number){
    this.skills().removeAt(i);
  }

  removeCarrier(i:number){
    this.carrera().removeAt(i);
  }

  removeLanguage(i:number){
    this.language().removeAt(i);
  }

  removeInterest(i:number){
    this.interest().removeAt(i);
  }



  ngOnInit(): void {
  }

}
