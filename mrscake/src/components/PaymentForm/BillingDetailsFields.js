
import React from "react";
import styled from "@emotion/styled";
import Row from "./Row";

const FormFieldContainer = styled.div`
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
margin-left: 15px;
border-top: 1px solid #FFC0CB	;
&:first-of-type {
  border-top: none;
}
`;

const Label = styled.label`
width: 20%;
min-width: 70px;
padding: 11px 0;
color: #c4f0ff;
overflow: hidden;
font-size: 16px;
text-overflow: ellipsis;
white-space: nowrap;
border-right: 1px solid #819efc;
`;

    const Input = styled.input`
font-size: 15px;
width: 100%;
padding: 15px 15px 11px 8px;
color: #fff;
background-color: transparent;
animation: 1ms void-animation-out;

&::placeholder {
  color: black;
}
`;

const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
    }

const BillingDetailsFields = () => {
    return (
        <>
            <Row>
                    <FormFieldContainer >
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="name"   required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="surname">surname</Label>
                        <Input id="surname" name="surname" type="text" placeholder="surname"   required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="email" required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="adress">adress</Label>
                        <Input id="adress" name="adress" type="text" placeholder="adress"   required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" name="city" type="text" placeholder="City"   required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" name="country" type="text" placeholder="country"  required />
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="zipCode">zipCode</Label>
                        <Input id="zipcode" name="zipCode" type="number" placeholder="zipcode" maxLength="6"  required  onInput={maxLengthCheck}/>
                    </FormFieldContainer>
                    <FormFieldContainer>
                        <Label htmlFor="comments">Comments</Label>
                        <Input id="comments" name="comments" type="text" placeholder="comments"   />
                    </FormFieldContainer>
                </Row>
        </>
    );
};

export default BillingDetailsFields;