export default class HelloDate {

    public static GetCurrentDateByType(typeOfDate: string): string {
        switch (typeOfDate) {
            case "date":
                return (new Date).getDate().toString();

            default:
                throw "Wring tyoe if date! FIX IT!!!";
        }
    }
}