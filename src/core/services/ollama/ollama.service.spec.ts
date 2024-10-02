import { describe, expect, test } from '@jest/globals'
import { OllamaService } from './ollama.service'

describe('OllamaService', () => {
  let ollamaService: OllamaService
  test('should request ollama', async () => {
    const response = await ollamaService.generateQuestion('una funcion que genere la serie fibonaccio para un entero')
    console.log(response, 'response')

    //expect()
  })
})
