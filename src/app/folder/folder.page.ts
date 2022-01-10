import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder:string;
  public ip:any;
  public country_name:string;
  public latitude:number;
  public altitude:number;
  public region_name:string;
  public timezone:any;
  public topluData:any;
  public url:string="https://freegeoip.app/json/";

  constructor(private activatedRoute: ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(this.url).subscribe(data=>{
      this.topluData = data;
      this.topluData=Array.of(this.topluData);
    });
  
  }

}
