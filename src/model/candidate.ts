export enum Decision {
    undecided = 'undecided',
    interested = 'interested',
    notInterested = 'notInterested',
}

export class Candidate {
    public id: number;

    constructor(public firstName: string,
                public lastName: string,
                public messageHtml: string,
                public decision: Decision,
                public receivedAt: Date,
                id?: number) {
        if (id) {
            this.id = id;
        }
    }
}
