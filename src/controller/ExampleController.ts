import { Get } from "@tsed/schema";
import { Controller } from "@tsed/di";
import { fileTypeFromFile } from "file-type";

@Controller("/calendars")
export class ExampleController {
  @Get()
  async findAll(): Promise<string> {
    const result = await fileTypeFromFile("test.png");
    return result.ext;
  }
}
