import { Configuration, Inject } from "@tsed/di";
import { PlatformApplication } from "@tsed/common";
import * as bodyParser from "body-parser";
import { Application } from "express";

const rootDir = __dirname;

@Configuration({
  rootDir,
  acceptMimes: ["application/json"],
})
export class Server {
  @Inject()
  // @ts-ignore
  app: PlatformApplication<Application>;

  @Configuration()
  // @ts-ignore
  settings: Configuration;

  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void | Promise<any> {
    this.app.use(bodyParser.json()).use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
  }
}
