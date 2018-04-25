export class TimeApiResponse {
    public status: string;
    public message: string;
    public countryCode: string;
    public countryName: string;
    public zoneName: string;
    public abbreviation: string;
    public gmtOffset: number;
    public dst: string;
    public dstStart: number;
    public dstEnd: number;
    public nextAbbreviation: string;
    public timestamp: number;
    public formatted: string;

    constructor() {
        this.status = '';
        this.message = '';
        this.countryCode = '';
        this.countryName = '';
        this.zoneName = '';
        this.abbreviation = '';
        this.dst = '';
        this.nextAbbreviation = '';
        this.formatted = '';
    }
}