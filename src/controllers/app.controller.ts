import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {

    @Get()
    showGreetings() {
        return "Application is running and ready to receive requests!";
    }
}