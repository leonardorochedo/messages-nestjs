import { CreateMessagesDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor(messagesService: MessagesService);
    listMessages(): Promise<any>;
    createMessages(body: CreateMessagesDto): Promise<void>;
    getMessage(id: string): Promise<any>;
}
