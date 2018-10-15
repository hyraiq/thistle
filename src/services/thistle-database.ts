import {Dexie} from 'dexie/dist/dexie';
import {Candidate, Decision} from '../model/candidate';

const sampleCandidates: ISampleCandidate[] = require('./sample-candidates.json');

interface ISampleCandidate {
    firstName: string;
    lastName: string;
    messageHtml: string;
    receivedAt: string;
}

export class ThistleDatabase extends Dexie {
    protected candidates: Dexie.Table<Candidate, number>;

    constructor() {
        super('thistle');
        this.version(1).stores({
            candidates: '++id, firstName, lastName, messageHtml, decision, receivedAt'
        });
        this.candidates.mapToClass(Candidate);

        // This sets up a function repopulate() that you can run in your console to reset the scenario
        const safeWindow = (window as any);
        if (!safeWindow.hasOwnProperty('repopulate')) {
            safeWindow.repopulate = this.repopulate.bind(this);
        }
    }

    /**
     * Fetches all the candidates from the database, with an optional parameter for a filter
     *
     * @param filter
     */
    async getCandidates(filter: null|Decision = null) {
        let collection = this.candidates.toCollection();

        if (filter !== null) {
            collection = this.candidates.where('decision').equals(filter);
        }

        return await collection.toArray();
    }

    /**
     * Updates/saves the candidate in the database
     *
     * @param candidate
     */
    async saveCandidate(candidate: Candidate) {
        await this.candidates.put(candidate);
    }

    /**
     * This is the method that is called by window.repopulate()
     */
    async repopulate() {
        await this.candidates.clear();

        await this.candidates.bulkAdd(
            sampleCandidates.map((candidate: ISampleCandidate) => {
                return new Candidate(candidate.firstName, candidate.lastName, candidate.messageHtml, Decision.undecided, new Date(candidate.receivedAt));
            })
        );
    }
}

