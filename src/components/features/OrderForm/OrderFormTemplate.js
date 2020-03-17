import { useState } from 'react';

const OrderFormTemplate = order => {
  const [name, setName] = useState(order ? order.name : '');
  const [address, setAddress] = useState(order ? order.address : '');
  const [phoneNumber, setPhoneNumber] = useState(order ? order.phoneNumber : '');
  const [comment, setComment] = useState(order ? order.comment : '');

  return {
    fields: {
      name,
      address,
      phoneNumber,
      comment
    },
    methods: {
      setName,
      setAddress,
      setPhoneNumber,
      setComment
    }
  };
};

export default OrderFormTemplate;
