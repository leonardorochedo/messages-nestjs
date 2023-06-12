import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    NotFoundException
} from '@nestjs/common';

import { CreateMessagesDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService) {}

    @Get()
    async listMessages() {
        const messages = await this.messagesService.findAll();

        if (!messages) {
            throw new NotFoundException('Messages not found');
        }

        return messages;
    }

    @Post()
    createMessages(@Body() body: CreateMessagesDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);

        if (!message) {
            throw new NotFoundException('Message not found');
        }

        return message;
    }
}
