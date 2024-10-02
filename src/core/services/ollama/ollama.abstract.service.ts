export abstract class OllamaAbstractService {
  abstract generateQuestion(prompt: string): Promise<any>
}
