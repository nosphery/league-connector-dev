declare interface IConnection {
    address: string,
    port: number,
    username: string,
    password: string,
    protocol: string,
    authorization: string;
}

declare class LeagueConnector {

    connections: IConnection[]
    
    constructor();

    static getLCUConnectionsFromProcess(): Promise<IConnection | void>;

    start(): void;

    stop(): void;
    
    watchLeagueClient(): void;

    on(event: 'connect', listener: (data: IConnection) => void): this;

    on(event: 'disconnect', listener: (data: IConnection) => void): this;
}

export = LeagueConnector;