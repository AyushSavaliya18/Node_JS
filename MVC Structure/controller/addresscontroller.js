const addressmodel = require('../model/addressSchema');

const createaddress = async (req, res) => {

    const{Address_id,User_id,city,state,country,pincode,address,phone_no} = req.body;

    const AddressData ={
        "Address_id":Address_id,
        "User_id":User_id,
        "city":city,
        "state":state,
        "country":country,
        "pincode":pincode,
        "address":address,
        "phone_no":phone_no
    }
        const data = await addressmodel.create(AddressData);
        res.status(201).send(data);
        console.log(data);

};

const searchaddress = async (req, res) => {
    try {
        // Extract addressId from request parameters
        const { addressId } = req.params;

        // Find address by ID
        const data = await addressmodel.findById(addressId);

        // Check if address is found
        if (!data) {
            return res.status(404).json({ message: 'Address not found' });
        }

        res.status(200).send(data);
    } catch (error) {
        console.error('Error finding address:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
module.exports = {createaddress,searchaddress};