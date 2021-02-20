const myData = [
    {
        name: 'John',
        tel: '0998765',
        gender: 'male'
    },
    {
        name: 'Mary',
        tel: '045678',
        gender: 'female'
    },{
        name: 'Javi',
        tel: '556711',
        gender: 'male'
    }
];
const addListing = (name, tel, gender) => {
    const listing = {
        name,
        tel,
        gender
    }
    return listing
}

// const getAll = () => {
//     return myData;
// }

export default { /*getAll ,*/ addListing};