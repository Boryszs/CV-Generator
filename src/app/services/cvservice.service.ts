import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvserviceService {

  private url = "http://127.0.0.1:8080/cv";

  constructor(private http: HttpClient) { }

  generatePDF(data:any,file:any):Observable<any>{
    const uploadImageData = new FormData();
    uploadImageData.append('file', file,file.name);
    uploadImageData.append('user', new Blob([JSON.stringify(data)], {type: "application/json"}));


    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type','undefined');
    headers.append('Accept', 'application/json');
    return this.http.post(this.url,uploadImageData,{headers:headers,responseType: 'blob' as 'json'});
  }
}