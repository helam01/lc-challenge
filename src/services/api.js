class APIService {

    async getQuotes() {
        return await new Promise(resolve =>{

            /** TODO: Call API request */
            let quotes = [
                {
                    id: 1,
                    name: 'Willian Smith',
                    from: 'Londom',
                    destination: 'China',
                    departure_date: '2022-10-15',
                    return_date: '2022-10-25',
                    travellers: 2,
                    transportation: 'rental car'
                },
                {
                    id: 2,
                    name: 'Willian Smith',
                    from: 'Londom',
                    destination: 'China',
                    departure_date: '2022-10-15',
                    return_date: '2022-10-25',
                    travellers: 2,
                    transportation: 'rental car'
                },
                {
                    id: 3,
                    name: 'Willian Smith',
                    from: 'Londom',
                    destination: 'China',
                    departure_date: '2022-10-15',
                    return_date: '2022-10-25',
                    travellers: 2,
                    transportation: 'rental car'
                },
            ];

            setTimeout(()=>{ resolve(quotes) }, 2000)
        });
    }


    async getQuote(id) {
        return await new Promise(resolve =>{

            /** TODO: Call API request */
            let quote = {
                    id: 1,
                    from: 'Canada',
                    destination: 'China',
                    departure_date: '2022-10-15',
                    return_date: '2022-10-25',
                    travellers: 2,
                    transportation: 'rental car',
                    contact: {
                        name: 'Willian Smith',
                        email: 'willian.s@email.com',
                        phone: '555-34556'
                    }
                };

            setTimeout(()=>{ resolve(quote) }, 2000)
        });
    }
}

export default new APIService();