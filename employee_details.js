// call api https://dummyapis.com/dummy/employee GET ? noofRecords=10&idStarts=1001

const axios = require('axios');

const getEmployees = async (noofRecords, idStarts) => {
    try {
        const response = await axios.get(`https://dummyapis.com/dummy/employee?noofRecords=${noofRecords}&idStarts=${idStarts}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employees:', error);
    }
};
