const addressmodel = require('../model/addressSchema');

const createaddress = async (req, res) => {

    const { Address_id, User_id, city, state, country, pincode, address, phone_no } = req.body;

    const AddressData = {
        "Address_id": Address_id,
        "User_id": User_id,
        "city": city,
        "state": state,
        "country": country,
        "pincode": pincode,
        "address": address,
        "phone_no": phone_no
    }
    const data = await addressmodel.create(AddressData);
     res.status(201).send({ message: 'Address Created successfully', data });
    console.log(data);

};

const searchaddress = async (req, res) => {

    const { addressId } = req.params;

    const data = await addressmodel.findById(addressId);

    if (!data) {
        return res.status(404).json({ message: 'Address not found' });
    }

    res.status(200).send({ message: 'Address Fetched successfully', data });

};

const getaddress = async (req, res) => {

    const data = await addressmodel.find().populate('User_id');
    res.status(200).send({ message: 'Address Fetched successfully', data });
    console.log(data);
};

const updateaddress = async (req, res) => {
    const { id } = req.params; // Extract the id from the params
    const { Address_id,User_id,city,state,country,pincode,address,phone_no} = req.body;

        const data = await addressmodel.updateOne(
            { _id: id },
            {Address_id,User_id,city: city,state: state, country: country, pincode: pincode, address: address, phone_no: phone_no,}
        );

        res.status(200).send({ message: 'Address updated successfully', data });
        console.log(data); 
};
module.exports = { createaddress, searchaddress, getaddress, updateaddress };