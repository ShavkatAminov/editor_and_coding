import {HttpClientService} from "../../../core/http/http.client.service";
import {FormRequest} from "../../../core/request/FormRequest";
import {delay} from "../../../core/basic/sleep";
import {firstValueFrom} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CodeCheckService {
  constructor(private http: HttpClientService) {
  }

  buttonCheckText = "Check";
  buttonPretest: string = 'Sample tests'
  buttonSubmit: string = 'Submit'

  resultText = '';
  resultStatusClass = 'hide';

  checkCode(request: FormRequest) {
    this.buttonCheckText = 'Running...';

    this.sendAndGetResult(request, 3).then((res: any) => {
      this.buttonCheckText = 'Check';
      if(res && res.success) {
        this.resultText = res.success;
        this.resultStatusClass = 'success';
      }
      if(res && res.error) {
        this.resultText = res.error;
        this.resultStatusClass = 'error';
      }
    });
  }

  runTest(request: FormRequest, full: boolean = false) {
    if(full)
      this.buttonSubmit = 'Running...'
    else
      this.buttonPretest = 'Running...';
    this.sendAndGetResult(request).then((res: any) => {
      if(full)
        this.buttonSubmit = 'Submit';
      else
        this.buttonPretest = 'Sample tests';
      if(res && res.success) {
        this.resultText = 'Success';
        this.resultStatusClass = 'success';
      }
      if(res && res.error) {
        this.resultText = 'Wrong answer on test ' + res.error;
        this.resultStatusClass = 'error';
      }
    })
  }


  private async sendAndGetResult(request: FormRequest, countOfAttempts: number = 100) {
    return new Promise((resolve, reject) => {
      this.http.request(request, 'post').subscribe(async (res: any) => {
        let cacheKey: string = res['cacheKey'];
        let request = new FormRequest('problems/cache-result');
        request.params = request.params.set('cacheKey', cacheKey);
        for (let i = 0; i < countOfAttempts; i++) {
          await delay(2000);
          let res: any = await firstValueFrom(this.http.request(request));
          if (res) {
            resolve(res);
            break;
          }
        }
        reject();
      });
    });
  }
}
