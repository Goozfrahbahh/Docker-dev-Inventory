import { EmailValidator } from '@angular/forms';

export interface User {
              _id: string;
              name: string;
              email: EmailValidator;
              password: string;
}

