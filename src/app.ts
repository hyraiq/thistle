import { autoinject } from 'aurelia-framework';
import {ThistleDatabase} from "./services/thistle-database";
import {Candidate} from "./model/candidate";

@autoinject()
export class App {
  message = 'Hello World!';
  candidates: Candidate[];

  constructor(private candidateService: ThistleDatabase) {
  }

  async activate() {
    this.candidates = await this.candidateService.getCandidates();
  }
}
