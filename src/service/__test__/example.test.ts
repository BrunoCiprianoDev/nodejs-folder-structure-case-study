import { ExampleService } from "@src/service/example"

describe('Example service', () => {

    it('should return message example', () => {
        const exampleService = new ExampleService();
        const message = exampleService.getExampleMessage();

        expect(message).toEqual('message from test.');
    })

})