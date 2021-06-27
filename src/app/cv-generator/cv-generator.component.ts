import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { CvserviceService } from '../services/cvservice.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-cv-generator',
  templateUrl: './cv-generator.component.html',
  styleUrls: ['./cv-generator.component.css']
})
export class CvGeneratorComponent implements OnInit {


  productForm: FormGroup;
  selectedFile: File | null = null;
  submitted = false;


  constructor(private fb: FormBuilder, private service: CvserviceService) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      about: ['', Validators.required],
      educations: this.fb.array([]),
      skills: this.fb.array([]),
      careers: this.fb.array([]),
      address: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern("[0-9 ]{11}")]],
      email: ['', [Validators.required, Validators.email]],
      languages: this.fb.array([]),
      interests: this.fb.array([]),
      colorStyle: 'GRAY_WHITE',
    });
  }

  setStyle(style: string) {
    this.productForm.value.colorStyle = style;
  }

   educations(): FormArray {
    return this.productForm.get("educations") as FormArray;
  }

  skills(): FormArray {
    return this.productForm.get("skills") as FormArray
  }

  carreras(): FormArray {
    return this.productForm.get("careers") as FormArray
  }

  get valid() {
    return this.productForm.controls;
  }

  send() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }

    
    this.service.generatePDF(this.productForm.value, this.selectedFile).subscribe((response) => {
      const blob = new Blob([response], { type: 'application/pdf; charset=utf-8' });
      saveAs(blob, this.productForm.value.name + "_" + this.productForm.value.surname + "_CV.pdf");
      window.location.reload();
    })


    
  }

  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }


  languages(): FormArray {
    return this.productForm.get("languages") as FormArray
  }

  interests(): FormArray {
    return this.productForm.get("interests") as FormArray
  }

  newEducation(): FormGroup {
    return this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      name: ['', Validators.required],
      schoolName: ['', Validators.required],
    })
  }

  newSkills(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
    })
  }

  newCareer(): FormGroup {
    return this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      company: ['', Validators.required],
      jobTitle: ['', Validators.required],
      about: ['', Validators.required],
    })
  }

  newLanguage(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
    })
  }

  newInterest(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
    })
  }

  addQuantity() {
    if (this.educations.length + 1 <= 2) {
      this.educations().push(this.newEducation());
    }
  }

  addSkills() {
    if (this.skills().length + 1 <= 7) {
      this.skills().push(this.newSkills());
    }
  }

  addCarrer() {
    if (this.carreras().length + 1 <= 2) {
      this.carreras().push(this.newCareer());
    }
  }

  addLanguage() {
    if (this.languages().length + 1 <= 3) {
      this.languages().push(this.newLanguage());
    }
  }

  addInterest() {
    if (this.interests().length + 1 <= 5) {
      this.interests().push(this.newInterest());
    }
  }

  removeEducation(i: number) {
    this.educations().removeAt(i);
  }

  removeSkills(i: number) {
    this.skills().removeAt(i);
  }

  removeCarrier(i: number) {
    this.carreras().removeAt(i);
  }

  removeLanguage(i: number) {
    this.languages().removeAt(i);
  }

  removeInterest(i: number) {
    this.interests().removeAt(i);
  }



  ngOnInit(): void {
  }

}
