import { Injectable } from "@nestjs/common";
import { PaymentDTO } from "src/dto/payment.dto";
import { Payment } from "src/frameworks/data-services/mongo/model/payment.model";

@Injectable()
export class PaymentFactoryService {
    createNewPayment(paymentDTO: PaymentDTO): Payment {
        const payment = new Payment();
        payment.name = paymentDTO.name;
        payment.description = paymentDTO.description;
        return payment;
    }

    updatePayment(paymentDTO: PaymentDTO): Payment {
        const updatePayment = new Payment();
        Object.entries(paymentDTO).forEach(([key, value]) => {
            if (key === 'id') return;
            updatePayment[key] = value;
        });
        return updatePayment;
    }
}