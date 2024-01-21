import { Controller, Get, Res } from "@nestjs/common";
import { ApiExcludeController } from "@nestjs/swagger";

@ApiExcludeController()
@Controller()
export class AppController {

    @Get()
    showGreetings(@Res() res) {
        return res.redirect('/api#');
        //return "Application is running and ready to receive requests!";
    }
}