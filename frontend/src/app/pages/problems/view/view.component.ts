import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormRequest} from "../../../core/request/FormRequest";
import {HttpClientService} from "../../../core/http/http.client.service";
import {Problem} from "../problem.entity";
import {CodeModel} from "@ngstack/code-editor";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  constructor(private router: ActivatedRoute, private http: HttpClientService) {}

  model: CodeModel = {
    language: 'typescript',
    uri: 'main.json',
    value: '',
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  problem: Problem = new Problem();
  ngOnInit(): void {
    this.router.queryParams.subscribe(res => {
      this.getProblem(res['id']);
    })
  }

  getProblem(id: number) {
    let request = new FormRequest('problems', id);
    this.http.request(request, 'get').subscribe((res: any) => {
      this.problem = res;
    })
  }
}
