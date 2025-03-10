const companies = [
    {id: 1, name: 'Google'},
    {id: 2, name: 'Facebook'},
    {id: 3, name: 'Apple'}
]

export function getCompanies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(companies)
        }, 500);
    });
}