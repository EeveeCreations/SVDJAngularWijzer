import {JsonArray, JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

export class DeconstructionService {
  //
  // public deConstructJSON(requestJsonAnswer: JsonArray, className: string): Object[] {
  //   let deConstructedList: Object[] = [];
  //   for (let item of requestJsonAnswer) {
  //     // deConstructedList.push(this.setToCorrectModel(className,  item typeof Object));
  //   }
  //   return deConstructedList;
  // }
  //
  // private setToCorrectModel(className: string, item: JsonObject): Object {
  //   let newObject: Object = null;
  //   switch (className.toLowerCase()) {
  //     case "grant" :
  //       newObject = this.getGrant(item);
  //       break;
  //     case "question" :
  //       newObject = this.getQuestion(item);
  //       break;
  //     case "answer" :
  //       newObject = this.getAnswer(item);
  //       break;
  //     case "givenanswer" :
  //       newObject = this.getGivenAnswer(item);
  //       break;
  //     case "route" :
  //       newObject = this.getRoute(item);
  //       break;
  //     case "result" :
  //       newObject = this.getResult(item);
  //       break;
  //     case "category" :
  //       newObject = this.getCategory(item);
  //       break;
  //   }
  //   return newObject;
  // }
  //
  //
  // private getGivenAnswer(item: JsonObject): GivenAnswer {
  //   return <GivenAnswer>JSON.parse(item.toString())
  // }
  //
  // private getGrant(item: JsonObject): Grant {
  //
  //   return <Grant>JSON.parse(item.toString())
  // }
  //
  // private getQuestion(item: JsonObject): Question {
  //   return <Question>JSON.parse(item.toString())
  // }
  //
  // private getCategory(item: JsonObject): Category {
  //   return <Category>JSON.parse(item.toString())
  //
  // }
  //
  // private getAnswer(item: JsonObject): Answer {
  //   return <Answer>JSON.parse(item.toString())
  // }
  //
  // private getRoute(item: JsonObject): Route {
  //   return <Route>JSON.parse(item.toString())
  // }
  //
  // private getResult(item: JsonObject): Result {
  //   return <Result>JSON.parse(item.toString())
  // }

}