describe('Friday the thirtTheents', () => {
    test('Is this a friday?', () => { 
        let someYear = '1999';
        let year = new Date();
        year.setFullYear(someYear);
        year.setMonth(7);
        console.log('year', year);
        year.setDate(13);
        expect(year.getDay()).toEqual(5);
    })
});