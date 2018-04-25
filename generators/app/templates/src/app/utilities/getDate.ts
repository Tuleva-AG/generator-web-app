import axios from 'axios';
import * as moment from 'moment';

import { TimeApiResponse } from './../types/timeApiResponse';

export default class GetDate {

    public static GetCurrentDateByType(typeOfDate: string): string {
        switch (typeOfDate) {
            case 'date':
                return moment().format('DD');

            default:
                throw 'Wrong type';
        }
    }

    public static GetCurrentDateFromApi(): Promise<string> {
        return new Promise((resolve, reject) => {

            let apiUrl = 'https://api.timezonedb.com/v2/get-time-zone?key=V4M31OVZ4AAQ&format=json&by=zone&zone=Europe/Berlin';

            axios.get(apiUrl, {
                headers: {
                    'Accept': 'application/json; odata=verbose'
                }
            })
                .then(response => {
                    let apiResponse = response.data as TimeApiResponse;
                    if (apiResponse.status === 'OK') {
                        resolve(apiResponse.formatted);
                    }
                }).catch(error => {
                    reject(error);
                });
        });
    }
}