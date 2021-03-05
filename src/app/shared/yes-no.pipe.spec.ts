import { YesNoPipe } from "./yes-no.pipe";

describe('YesNoPipe', () => {
    let pipe: YesNoPipe;

    it('should display Oui if value is O', () => {
        pipe = new YesNoPipe();

        expect(pipe.transform('O')).toEqual('Oui');
    });

    it('should display Non if value is N', () => {
        pipe = new YesNoPipe();

        expect(pipe.transform('N')).toEqual('Non');
    });
});