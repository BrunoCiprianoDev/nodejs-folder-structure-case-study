import { Server } from '@overnightjs/core';
import './util/module-alias';
import bodyParser from 'body-parser';
import { ExampleController } from './controllers/example';
import { Application } from 'express';

export class SetupServer extends Server {

    constructor(private port = 3000) {
        super(true);
    }

    public init(): void {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const exampleController = new ExampleController();
        this.addControllers([
            exampleController
        ]);
    }

    public getApp(): Application {
        return this.app;
    }

}