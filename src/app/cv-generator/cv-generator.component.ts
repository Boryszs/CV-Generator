import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cv-generator',
  templateUrl: './cv-generator.component.html',
  styleUrls: ['./cv-generator.component.css']
})
export class CvGeneratorComponent implements OnInit {


  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
    });
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
    console.log(this.productForm.value);
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
      name: new FormControl()
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

  ngOnInit(): void {
  }

}
