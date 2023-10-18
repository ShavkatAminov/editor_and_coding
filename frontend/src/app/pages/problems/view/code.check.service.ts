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
  buttonSubmit: string = 'Sample tests'

  resultText = '';
  resultStatusClass = 'hide';

  checkCode(request: FormRequest) {
    this.buttonCheckText = 'Running...';
    this.http.request(request, 'post').subscribe(async (res: any) => {
      let cacheKey: string = res['cacheKey'];
      let request = new FormRequest('problems/cache-result');
      request.params = request.params.set('cacheKey', cacheKey);
      for (let i = 0; i < 3; i++) {
        await delay(2000);
        let res: any = await firstValueFrom(this.http.request(request));
        if (res) {
          this.buttonCheckText = 'Check';
          if(res && res.success) {
            this.resultText = res.success;
            this.resultStatusClass = 'success';
          }
          if(res && res.error) {
            this.resultText = res.error;
            this.resultStatusClass = 'error';
          }
          break;
        }
      }
    })
  }

  runTest(request: FormRequest) {
    this.buttonPretest = 'Running...';
    this.http.request(request, 'post').subscribe(async (res: any) => {
      let cacheKey: string = res['cacheKey'];
      let request = new FormRequest('problems/cache-result');
      request.params = request.params.set('cacheKey', cacheKey);
      for (let i = 0; i < 100; i++) {
        await delay(2000);
        let res: any = await firstValueFrom(this.http.request(request));
        if (res) {
          this.buttonPretest = 'Sample tests';
          if(res && res.success) {
            this.resultText = 'Success';
            this.resultStatusClass = 'success';
          }
          if(res && res.error) {
            this.resultText = 'Wrong answer on test ' + res.error;
            this.resultStatusClass = 'error';
          }
          break;
        }
      }
    })
  }
}
