import { RootStackParamList } from 'routes/stack.routes';

export interface ConfirmationDTO {
  title: string;
  message: string;
  nextScreenRoute: keyof RootStackParamList;
}
