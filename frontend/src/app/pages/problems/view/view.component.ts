import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormRequest} from "../../../core/request/FormRequest";
import {HttpClientService} from "../../../core/http/http.client.service";
import {Problem} from "../problem.entity";
import {CodeCheckService} from "./code.check.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  constructor(private router: ActivatedRoute,
              private http: HttpClientService,
              public codeCheck: CodeCheckService) {}

  request: FormRequest = new FormRequest('problems/previous-check');

  editorValueChange(code: string) {
    this.request.body['content'] = code;
  }


  sendToCheck() {
    this.codeCheck.checkCode(this.request);
  }

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

